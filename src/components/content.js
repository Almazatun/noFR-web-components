const template = document.createElement('template')
template.innerHTML = `
<style>
    .main {
        margin: 20px 0 0 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
<main class="main"> 
       <card-component emoji="Card 1️⃣"> <span>Hello</span></card-component>
       <card-component emoji="Card 2️⃣"></card-component>
       <card-component emoji="Card 3️⃣"></card-component>
       <card-component emoji="Card 4️⃣"></card-component>
       <card-component emoji="Card 5️⃣"></card-component>
</main>
`

class Content extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

//
window.customElements.define('content-component', Content)