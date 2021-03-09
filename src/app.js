const template = document.createElement('template')
template.innerHTML = `
<style>
    h3 {
    margin: 0;
    }
    .app {
        padding: 20px;
        margin: 0;
        height: 100vh;
        background: #997999;
    };
    
</style>
<div class="app"> </div>
`

class App extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}