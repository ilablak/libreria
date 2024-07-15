const sold = JSON.parse(localStorage.getItem('cesta'))

const cesta = document.getElementById('cesta')

let books = []
for (const item of sold) {
        const newItem = document.createElement('p')
        newItem.innerHTML = item.title
        cesta.appendChild(newItem)
    }
