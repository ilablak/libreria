export class componente extends HTMLElement {

    constructor() {
        super()
        const template = document.createElement('template')
        template.innerHTML = `
            <style>
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
                    width: 100%;
                    height: 100%;
                    background-color: rgba(255, 255, 255, 0.318);
                    transition: 0.3s ease-out;
                    position: absolute;
                    top: 100%;
                    backdrop-filter: blur(6px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 20px;
                }

                h3 {
                    color: #333;
                    font-size: 1.5rem;
                    margin: 0;
                }
            </style>
            <div class="book"></div>
            <div class="info">
                <h3></h3>
            </div>
        `
        
        const root = this.attachShadow({ mode: "open" })
        root.appendChild(document.importNode(template.content, true))
    }

    set image(value) {
        this.setAttribute('image', value)
        this.shadowRoot.querySelector('.book').style.backgroundImage = `url('${value}')`
    }

    get image() {
        return this.getAttribute('image')
    }

    set title(value) {
        this.setAttribute('title', value)
        this.shadowRoot.querySelector('h3').textContent = value
    }

    get title() {
        return this.getAttribute('title')
    }

    static get observedAttributes() {
        return ['image', 'title']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'image') {
            this.shadowRoot.querySelector('.book').style.backgroundImage = `url('${newValue}')`
        } else if (name === 'title') {
            this.shadowRoot.querySelector('h3').textContent = newValue
        }
    }
}

customElements.define('book-card', componente)

