class Header extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../components/header/header.css">
        <h1>AAAA</h1>
        `
  }
}

window.customElements.define('header-component', Header)
