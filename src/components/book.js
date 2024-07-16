export class componente extends HTMLElement {
    constructor() {
        super()
        const template = document.createElement('template')
        template.innerHTML = `
            <style>
                * {
                    font-size:1vw;
                }

                :host {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    position: relative;
                    overflow: hidden;
                }

                :host(:hover) .info {
                    transform: translateY(-100%);
                    transition: .5s ease-in;
                }

                .book {
                    height: 100%;
                    width: 100%;
                    background-size: cover;
                    background-position: center;
                }

                .info {
                    width: 80%;
                    height: 100%;
                    background-color: rgba(255, 255, 255, 0.3);
                    transition: 0.3s ease-out;
                    position: absolute;
                    top: 100%;
                    backdrop-filter: blur(6px);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                  /*   padding: 16px; */
                }

                .info h4 {
                    color: #2f4f4f;
                }

                .info p {    
                    text-align: center;        
                }
            </style>
            <div class="book"></div>
            <div class="info">
                <h4></h4>
                <p><strong>Autor:</strong> <span id="author"></span></p>
                <p><strong>Fecha de publicación:</strong> <span id="publish_date"></span></p>
                <p><strong>Resumen:</strong> <span id="resume"></span></p>
                <p><strong>Etiquetas:</strong> <span id="tags"></span></p>
                 <button id="sell">Comprar</button>
            </div>

            
        `

        const root = this.attachShadow({ mode: "open" })
        root.appendChild(document.importNode(template.content, true))
    }

    //  recoger los atributos
    get image() {
        return this.getAttribute('image')
    }
    get title() {
        return this.getAttribute('title')
    }
    get author() {
        return this.getAttribute('author')
    }
    get publish_date() {
        return this.getAttribute('publish_date')
    }
    get resume() {
        return this.getAttribute('resume')
    }
    get tags() {
        return this.getAttribute('tags')
    }

    // insertar los atributos
    set image(value) {
        this.setAttribute('image', value)
        this.shadowRoot.querySelector('.book').style.backgroundImage = `url('${value}')`
    }
    set title(value) {
        this.setAttribute('title', value)
        this.shadowRoot.querySelector('h4').textContent = value
    }
    set author(value) {
        this.setAttribute('author', value)
        this.shadowRoot.getElementById('author').textContent = value
    }
    set publish_date(value) {
        this.setAttribute('publish_date', value);
        this.shadowRoot.getElementById('publish_date').textContent = value
    }
    set resume(value) {
        this.setAttribute('resume', value)
        this.shadowRoot.getElementById('resume').textContent = value
    }
    set tags(value) {
        this.setAttribute('tags', value)
        this.shadowRoot.getElementById('tags').textContent = value
    }



    static get observedAttributes() {
        return ['image', 'title', 'author', 'publish_date', 'resume', 'tags']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'image') {
            this.shadowRoot.querySelector('.book').style.backgroundImage = `url('${newValue}')`
        } else if (name === 'title') {
            this.shadowRoot.querySelector('h4').textContent = newValue
        } else if (name === 'author') {
            this.shadowRoot.getElementById('author').textContent = newValue
        } else if (name === 'publish_date') {
            this.shadowRoot.getElementById('publish_date').textContent = newValue
        } else if (name === 'resume') {
            this.shadowRoot.getElementById('resume').textContent = newValue
        } else if (name === 'tags') {
            this.shadowRoot.getElementById('tags').textContent = newValue
        }
    }
}

customElements.define('book-card', componente)


