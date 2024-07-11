const labelCats = document.querySelectorAll('label')
console.log(labelCats)

// function fetch base de datos
async function getJson() {
    const response = await fetch('../json/libreria.json')
    const articlesJson = await response.json()

    for (const item of articlesJson) {
        dataList.push(item)
    }
    let dataList = []
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

// funcion filtrar 
let librosFiltrados = []
async function filter() {

    const json = await getJson()
    const categories = getCategories()
    // identificar filtro seleccionado
    const inputChecked = document.querySelectorAll('input:checked')
    const category = inputChecked[0].nextElementSibling.innerText

    // por cada elemento del json, comprobar si el elemento contiene los tags, igual a la categoria seleccionada
    console.log('elemento')

    for (const item of json) {
        console.log(item.tags)
        console.log(item.tags.includes(category))
        console.log('--------------- ----------------------------')

        if (item.tags.includes(category)) {
            console.log(item + ' si ')
            librosFiltrados.push(item)
        }



    }
    console.log(librosFiltrados)
}

filter()