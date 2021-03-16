const template = document.createElement('template')
template.innerHTML = `
<style>
   .card_emoji {
    display: flex;
    margin: 10px 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 8px;
    height: 6rem;
    width: 35rem;
    font-size: 55px;
    font-family: sans-serif;
   }
</style>

<div class="card_emoji"> 
     <span> </span>
</div>
`

class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('span').innerText = this.getAttribute("emoji")
    }
}

window.customElements.define('card-component', Card)