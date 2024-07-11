const labelCats = document.querySelectorAll('label')

// function fetch base de datos
async function getJson() {
    let dataList = []
    const response = await fetch('../json/libreria.json')
    const articlesJson = await response.json()

    for (const item of articlesJson) {
        dataList.push(item)
    }
    return dataList
}

// funcion obtener categorias
function getCategories() {
    let list = []
    for (const item of labelCats) {
        list.push(item.innerText)

    }
    return list
}

function getSelectCategory() {
    const inputChecked = document.querySelectorAll('input:checked')
    const categorySelect = inputChecked[0].nextElementSibling.innerText
    return categorySelect
}

// funcion filtrar 
let librosFiltrados = []
async function filter(par) {

    const json = await getJson()
    const categories = getCategories()
    // identificar filtro seleccionado

    // por cada elemento del json, comprobar si el elemento contiene los tags, igual a la categoria seleccionada
    console.log('elemento')

    let i = 0
    for (const item of json) {
        console.log(i)
        console.log(item.tags)
        console.log(item.tags.includes(par))
        console.log('--------------- ----------------------------')
        i = i + 1
        if (item.tags.includes(par)) {
            console.log(item + ' si ')
            librosFiltrados.push(item)
        }



    }
    console.log(librosFiltrados)
}

const inputs = document.querySelectorAll('input')
console.log(inputs)

for (const item of inputs) {
    item.addEventListener('click', filter(getSelectCategory()))
}
