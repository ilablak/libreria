
class BandaCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set banda(banda) {
        this.shadowRoot.innerHTML = `

                    <img src="${banda.image}" alt="${banda.title}">
                <div>
                    <h2>${banda.title}</h2>
                    <h3>año: ${banda.publish_date}</p>
                    <p>autor: ${banda.author}</p>
                </div>

            <style>

                img {
                    margin-top: 20px;
                    background-color: antiquewhite;
                    height: 250px;
                    width: 250px;
                    border-radius: 10px;
                }
                
                h2 {
    font-family: Arial, sans-serif;
    font-size: 1.2rem;
    color: antiquewhite;
    margin: 1px;
}

h3 {
    font-family: Arial, sans-serif;
    font-size: 1rem;
    color: antiquewhite;
      margin: 5px;
}

p {
    font-family: Arial, sans-serif;
    font-size: 1rem;
    color: antiquewhite;
      margin: 5px;
}
            </style>

        `;
    }
}

customElements.define('banda-card', BandaCard);

fetch('../json/libreria.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('contenedor');
        data.forEach(banda => {
            const bandaCard = document.createElement('banda-card');
            bandaCard.banda = banda;
            container.appendChild(bandaCard);
        });
    })
    .catch(error => console.error('Error al cargar los datos:', error));