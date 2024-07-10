// 1- recoger el fetch 

// parsear el fetch

// pasarlo a un array 

// 2- identificar todos los inputs

// 3- extraer las categorias

// 4- filtrar el array segun la categoria y guardarlo temporalmente en un array

// 5- identidicar el contenedor e insertar tantos div como componentes filtrados existan

// funcion obtener json to array



const labelCats = document.querySelectorAll('label')
console.log(labelCats)



let dataList = []

// mock fecth
const arrayDEPrueba = [{
    "title": "El espejismo",
    "publish_date": "2024-02-14",
    "author": "Camilla Läckberg",
    "resume": "Una novela que mezcla la atmósfera navideña de Estocolmo con un misterio siniestro.",
    "tags": ["novela negra", "misterio"],
    "image": "https://prodimage.images-bn.com/pimages/9786073912471_p0_v1_s600x595.jpg"
},
{
    "title": "Bajo tierra seca",
    "publish_date": "2024-03-22",
    "author": "César Pérez Gellida",
    "resume": "Un thriller ambientado en la España rural.",
    "tags": ["novela negra", "thriller"],
    "image": "URL_de_la_imagen"
},
{
    "title": "La inquilina silenciosa",
    "publish_date": "2024-01-11",
    "author": "Clémence Michallon",
    "resume": "Una historia de misterio y suspense que te mantendrá al borde de tu asiento.",
    "tags": ["novela negra", "suspense"],
    "image": "URL_de_la_imagen"
},
{
    "title": "La mujer fugitiva",
    "publish_date": "2024-04-05",
    "author": "Alicia Giménez Bartlett",
    "resume": "Un nuevo caso de la inspectora Petra Delicado.",
    "tags": ["novela negra", "policiaco"],
    "image": "URL_de_la_imagen"
}
]
// ...............................................

async function getArticles() {
    const response = await fetch('../json/libreria.json')
    const articlesJson = await response.json()

    for (const item of articlesJson) {
        dataList.push(item)
    }
    return dataList
}

// funcion obtener categorias

let categorias = []

function getCats() {
    for (const item of labelCats) {
        categorias.push(item.innerText)

    }
}

// funcion filtrar 
// let categoriaSeleccionada = []
let librosFiltrados = []
function filter() {
    // categorias dataList

    // identificar filtro seleccionado
    const inputChecked = document.querySelectorAll('input:checked')
    const categoriaSelect = inputChecked[0].nextElementSibling.innerText

    // por cada elemento del json, comprobar si el elemento contiene los tags, igual a la categoria seleccionada
    console.log('elemento')

    for (const item of arrayDEPrueba) {
        console.log(item.tags)
        console.log(item.tags.includes(categoriaSelect))
        console.log('--------------- ----------------------------')

        if (item.tags.includes(categoriaSelect)) {
            console.log(item + ' si ')
            librosFiltrados.push(item)
        }



    }
    console.log(librosFiltrados)
}




// getArticles()

getCats()


console.log(dataList)
console.log(categorias)
filter()