const booksBD = '../json/libreria.json'
import { getJson } from "./libs/getJson.js"

// GETSELECTCATEGORY reconoce el label
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
    if (filterSelected == 'general') {
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
    constructor(librosFiltrados, 4)
}


export function arquited(par1, par2) {
    // par1 array de objetos
    // par2 numero de objetos por contenedor (var css)

    const mainContainer = document.getElementById('mainContainer')
    mainContainer.innerHTML = '' // vaciado del contenedor principad
    // calcular el número de contanedores
    const containers = Math.ceil(par1.length / par2)
    for (let i = 0; i < containers; i++) {
        const newContainer = mainContainer.appendChild(document.createElement('div'))
        newContainer.setAttribute('id', 'flexContainer' + i)
        newContainer.setAttribute('class', 'flexContainer')
    }
    //
    // devolver el numero de contenedores creados (para TEST)
    const out = mainContainer.querySelectorAll('div')
    console.log('ARQUITED devuelve: ' + out.length)
    console.log(out)
    return out
    // test result .lenght
}


// FUNCION CONSTRUCTOR - Crea los contenedores individuales para cada componente
export function constructor(par1, par2) {
    const returnArquited = arquited(par1, par2)
    
    let x = 0 // Contador para BOX y BOOK
    for (const element of returnArquited) {
        for (let i = par2; i > 0; i--) {
            if (x < par1) {
                // Se crea el contendor BOX
                const newBox = element.appendChild(document.createElement('div'))
                newBox.setAttribute('id', 'box' + x)
                newBox.setAttribute('class', 'box')
                // Se crea BOOK dentro del contenedor
                const newBook = newBox.appendChild(document.createElement('book-card'))
                newBook.setAttribute('id', 'book' + x)
                x = x + 1
            }
        }
    }
    // devolver el numero de COMPONENTES creados (para TEST)
    const out = document.querySelectorAll('book-card')
    console.log('CONSTRUCTOR devuelve: ' + out.length)
    console.log(out)
    return out
    // test result .lenght
}



const inputs = document.querySelectorAll('input')
for (const item of inputs) {
    item.addEventListener('click', function() { filter(booksBD) })
}
filter(booksBD)