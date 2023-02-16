class CustomInput extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.attachInternals();

    this.inputValue = "";
    this.idValue = "";

    this.input = document.createElement("input");
  }

  static get observedAttributes() {
    return ["name", "type", "id", "aria-label"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "type":
        this.inputValue = this.getAttribute("type");
        break;

      case "id":
        this.idValue = this.getAttribute("id");
        break;

      default:
        break;
    }
  }

  connectedCallback() {
    this.render();
  }

  renderInput() {
    this.input.setAttribute("name", "name");
    this.input.setAttribute("type", this.inputValue);
    this.input.setAttribute("id", this.idValue);

    this.input.addEventListener("input", (ev) => {
      console.log(ev.target.value);
    });

    this.shadowRoot.appendChild(this.input);
    this.getLabel();
  }

  getLabel() {
    if (this.parentNode.nodeName === "LABEL") {
      this.input.setAttribute("aria-label", this.parentNode.textContent);
    } else {
      const label = [
        ...document.querySelectorAll(`label[for=${this.idValue}]`),
      ];

      if (label) this.input.setAttribute("aria-label", label[0].innerText);
    }
  }

  render() {
    this.renderInput();
  }
}

customElements.define("custom-input", CustomInput);
