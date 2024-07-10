// 1- recoger el fetch 

// parsear el fetch

// pasarlo a un array 

// 2- identificar todos los inputs

// 3- extraer las categorias

// 4- filtrar el array segun la categoria y guardarlo temporalmente en un array

// 5- identidicar el contenedor e insertar tantos div como componentes filtrados existan

const labelCats = document.querySelectorAll('label')
console.log(labelCats)

let dataList = []

async function getArticles() {
    const response = await fetch('../json/libreria.json')
    const articlesJson = await response.json()

    for (const item of articlesJson) {
        dataList.push(item)
    }
    return dataList
}

let categorias = []

function getCats(){
    for (const item of labelCats){
        categorias.push(item.innerText)
  
    }
}

getCats()

// getArticles()

console.log(dataList)
console.log(categorias)