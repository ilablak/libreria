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
}

const inputs = document.querySelectorAll('input')
for (const item of inputs) {
    item.addEventListener('click', function() { filter(booksBD) })
}
filter(booksBD)