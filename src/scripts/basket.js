const sold = JSON.parse(localStorage.getItem('cesta'))

const cesta = document.getElementById('cesta')

let x = 1
for (const item of sold) {
        const newItem = document.createElement('p')
        newItem.innerHTML = x + '. ' + item.title.toUpperCase()
        cesta.appendChild(newItem)
        x += 1
    }
