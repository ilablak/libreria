const booksBD = '../json/libreria.json'
import { getJson } from "./libs/getJson.js"
import { componente } from '../components/book.js'

// asociado al input  checked y extrae su valor
function getSelectCategory() {
    const inputChecked = document.querySelectorAll('input:checked')
    const categorySelect = inputChecked[0].nextElementSibling.innerText
    return categorySelect
}

// FILTER filtra el json buscando tag seleccionado
// y guarda las coincidencias en un array  
let librosFiltrados = []
async function filter(param) {
    librosFiltrados = []
    const json = await getJson(param)
    const filterSelected = getSelectCategory()

    let i = 0 // contador de libros en json
    if (filterSelected === 'General') {
        librosFiltrados = json
    } else {
        for (const item of json) {
            i = i + 1
            if (item.tags.includes(filterSelected)) {
                librosFiltrados.push(item)
            }
        }
    }
    console.log(filterSelected)
    console.log(librosFiltrados)
    arquited(librosFiltrados, 4)
}

// ARQUITED crea contenedores Flex, boxes e integra los componentes
let arquitedOut = []
export function arquited(par1, par2) {
    arquitedOut = []
    const mainContainer = document.getElementById('mainContainer')
    mainContainer.innerHTML = ''
    const containers = Math.ceil(par1.length / par2) // contenedores necesarios
    let x = 0 // contador de libros no tocar

    for (let i = 0; i < containers; i++) {
        // crear un nuevo contenedor
        const newContainer = document.createElement('div');
        newContainer.setAttribute('id', 'flexContainer' + i);
        newContainer.setAttribute('class', 'flexContainer');

        for (let i = par2; i > 0; i--) {
            // crear boxes 
            const newBox = document.createElement('div');
            newBox.setAttribute('id', 'box' + x);
            newBox.setAttribute('class', 'box');
            // crear componentes
            const newBook = document.createElement('book-card')
            newBook.setAttribute('id', 'book' + x);
            // elementos movidos a su contenedor
            newBox.appendChild(newBook)
            newContainer.appendChild(newBox)
            //
            x += 1;
        }
        mainContainer.appendChild(newContainer);
    }
    // pasando a array los componentes creados
    arquitedOut = mainContainer.querySelectorAll('book-card');
    console.log(arquitedOut)
    draw()
}

// DRAW muestra la info de cada book
function draw() {
    let cont = 0 // contador de paridad entre los arrays
    for (const item of librosFiltrados) {
        arquitedOut[cont].setAttribute('image', item.image)
        arquitedOut[cont].setAttribute('title', item.title)
        arquitedOut[cont].setAttribute('publish_date', item.publish_date)
        arquitedOut[cont].setAttribute('author', item.author)
        arquitedOut[cont].setAttribute('resume', item.resume)
        arquitedOut[cont].setAttribute('tags', item.tags.join(', '))
        cont += 1
    }
    seller()
}

// SELLER - añade los libros seleccionados a un array (cesta)
const soldBooks = []
function seller() {
    for (const item of arquitedOut) {
        const buttonSell = item.shadowRoot.getElementById('sell')
        buttonSell.addEventListener('click', () => {
            const book = {
                title: item.title,
                author: item.author,
            }
            soldBooks.push(book)
            console.log(soldBooks)
            localStorage.setItem('cesta', JSON.stringify(soldBooks))
        })
    }
}

const inputs = document.querySelectorAll('input')
for (const item of inputs) {
    item.addEventListener('click', function () { filter(booksBD) })
}
filter(booksBD)