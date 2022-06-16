class myCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return [""];
  }

  attributeChangedCallback(attribute, oldVal, newVal) {
    if (attribute === "") {
    }
  }

  getStyles() {
    return `
    <style>  
        :host{
            
        }
        
        ::slotted{

        }

        
    </style>
    `;
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
    <section class="product-card">
      <div class="product-card__image-container">
        <h3 class="product-card__brand"></h3>
        <img class="product-card__image" src="" alt="" />
      </div>
      <div>
        <div class="product-card__info-container">
          <div class="product-card__title-container">
            <h2 class="product-card__title"></h2>
            <h3 class="product-card__subtitle"></h3>
          </div>
          <p class="product-card__description"></p>
          <div class="product-card__price-container">
            <p class="product-card__price"></p>
            <a class="product-card__buy-button" href=""></a>
          </div>
        </div>
      </div>
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

  disconnectedCallback() {}
}

customElements.define("product-card", myCard);
