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
    padding: 10px;
    border-radius: 8px;
    margin: 0 10px;
    background-color: plum;
    cursor: pointer;
    
    font-family: sans-serif;
    }
    
</style>
<div id="pages" class="pages"> </div>
`

class Header extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.appendChild(template.content.cloneNode(true));
        //Pages
        this.pages = [
            {id: "1", pageName: 'Page1'},
            {id: "2", pageName: 'Page2'},
            {id: "3", pageName: 'Page3'},
            {id: "4", pageName: 'Page4'},
        ]

        this.pagesElement = shadowRoot.getElementById('pages')
        this.pages.forEach((page, index) => {
            const span = document.createElement('span')
            span.innerText = this.pages[index].pageName
            span.classList.add('page')
            this.pagesElement.appendChild(span)

        })
        //Bind
        this.onClick = this.onClick.bind(this)

        this.pagesElement.addEventListener('click', this.onClick)
    }

    onClick() {
       console.log("Hello")
    }

}

//
window.customElements.define('header-component', Header)