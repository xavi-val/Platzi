class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes(){
    return ['src']
  }

  attributeChangedCallback(attribute, oldVal, newVal){
    if(attribute === 'src' ){
      this.src = newVal
    }
  }

  getStyles() {
    return `
    <style>
        h2{
            color: red;
        }
    </style>
    `;
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
    <section>
        <h2>
            <slot name="titulo"></slot>
        </h2>
            <img src="${this.src}"/>
    </section>
    ${this.getStyles()}
    `;

    return template;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback(){
    console.log("adios amigos :c")
  }
}

customElements.define("my-element", myElement);
// document.querySelector("my-element").remove();