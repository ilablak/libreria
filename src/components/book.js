export class componente extends HTMLElement {

    constructor() {
        super()
        const template = document.createElement('template')
        template.innerHTML =
            `
        <div class=book></div>
        <div class=info></div>

        <style>
        :host {
            height: 100%;
            width:100%;
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
            background-color: grey;
        }

        .info {
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.318);;
            transition: 3s ease-out;
            position: absolute;
            top: 100%;
            backdrop-filter: blur(6px);
        }

        </style>
        `


        const root = this.attachShadow({ mode: "open" })
        root.appendChild(document.importNode(template.content, true))
    }

    connectedCallback() {
        // // fetch to array
        // async function jsonToArr() {
        //     const response = await fetch('./books.json')
        //     const json = await response.json()
        //     let jsonArr = []

        //     for (const item of json) {
        //         jsonArr.push(item)
        //     }
        //     console.log(jsonArr)
        //     return jsonArr
        // }

        // jsonToArr()
    }
}

customElements.define('book-card', componente)
