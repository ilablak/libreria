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
    arquited(librosFiltrados, 4)
}


export function arquited(par1, par2) {
    // Obtener el contenedor principal
    const mainContainer = document.getElementById('mainContainer');
    mainContainer.innerHTML = ''; // Vaciar el contenido del contenedor principal

    // Calcular el número de contenedores necesarios
    const containers = Math.ceil(par1.length / par2);
    let x = 0;

    // Iterar para crear cada contenedor
    for (let i = 0; i < containers; i++) {
        // Crear un nuevo contenedor
        const newContainer = document.createElement('div');
        newContainer.setAttribute('id', 'flexContainer' + i);
        newContainer.setAttribute('class', 'flexContainer');

        // Contador para elementos dentro de cada contenedor

        // Llenar el contenedor con elementos hasta par2 o hasta que se acaben los elementos
        for (let i = par2; i > 0; i--) {
            // Crear un nuevo elemento dentro del contenedor
            const newBox = document.createElement('div');
            newBox.setAttribute('id', 'box' + x);
            newBox.setAttribute('class', 'box');

            // Añadir el nuevo elemento al contenedor
            newContainer.appendChild(newBox);

            // Incrementar el contador de elementos
            x += 1;
        }

        // Añadir el contenedor creado al contenedor principal
        mainContainer.appendChild(newContainer);
    }

    // Devolver todos los contenedores creados
    const out = mainContainer.querySelectorAll('div');
    console.log('ARQUITED devuelve: ' + out.length);
    console.log(out);
    return out;
}

const inputs = document.querySelectorAll('input')
for (const item of inputs) {
    item.addEventListener('click', function () { filter(booksBD) })
}
filter(booksBD)