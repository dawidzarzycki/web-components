class DZ_Input extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const children = document.createElement("template");
    children.content.cloneNode(true);
    const input = document.createElement("input");
    children.appendChild(input);

    this.shadowRoot.appendChild(children);
  }
}

class DZ_Header extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Header";

    this.shadowRoot.appendChild(h1);
  }
}

class DZ_Form extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  template() {
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
      <form></form>
    `;

    return template.content.cloneNode(true);
  }

  render() {
    this.shadowRoot.appendChild(this.template());
  }
}

// customElements.define("dz-input", DZ_Input);
customElements.define("dz-form", DZ_Form);
customElements.define("dz-header", DZ_Header);
