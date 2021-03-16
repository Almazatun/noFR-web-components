const template = document.createElement('template')
template.innerHTML = `
<style>
    .pages {
        display: flex;
        align-items: center;  
        height: 90%;
        width: auto;
        margin: 0 20px 0 0;
    }
    
    .pages > span {
    font-size: 36px;
    padding: 10px;
    border-radius: 8px;
    margin: 0 10px;
    background-color: plum;
    cursor: pointer;
    transition: 0.3s;
    font-family: sans-serif;
    }
    
    .pages > span:hover {
        background-color: palevioletred;
        transition: all;
    }
    
</style>
<div id="pages" class="pages"> </div>
`

class Header extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.appendChild(template.content.cloneNode(true));

        //Bind
        this.onClickPage = this.onClickPage.bind(this)

        //Pages
        this.pages = [
            {id: "1", pageName: '😺'},
            {id: "2", pageName: '🐶'},
            {id: "3", pageName: '🦊'},
            {id: "4", pageName: '🦄'},
        ]

        this.pagesElement = shadowRoot.getElementById('pages')
        this.pages.forEach((page, index) => {
            const span = document.createElement('span')
            span.innerText = this.pages[index].pageName
            span.setAttribute('id', `${this.pages[index].id}`)
            span.classList.add('page')
            this.pagesElement.appendChild(span)

        })

        //
        this.pagesElement.addEventListener('click', this.onClickPage)
    }

    onClickPage(event) {
        const item = event.target
        alert(item.innerText)
    }

}

//
window.customElements.define('header-component', Header)