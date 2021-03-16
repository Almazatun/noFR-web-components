const template = document.createElement('template')
template.innerHTML = `
<style>

 .app {
  margin: 0;
  min-height: 100vh;
  background: cornflowerblue;
 }
 .header {
    height: 85px;
    background-color: lightskyblue;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
</style>

<div class="app"> 
    <header-component class="header"> </header-component> 
    <content-component class="content"></content-component> 
</div>
`

class App extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

//
window.customElements.define('app-component', App)