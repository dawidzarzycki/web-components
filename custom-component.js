class CustomInput extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.inputValue = "";
    this.idValue = "";
    this.ariaLabelValue = "";
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

      case "aria-label":
        this.ariaLabelValue = this.getAttribute("aria-label");
        break;

      default:
        break;
    }
  }

  connectedCallback() {
    this.render();
  }

  renderInput() {
    const input = document.createElement("input");
    input.setAttribute("name", "name");
    input.setAttribute("type", this.inputValue);
    input.setAttribute("id", this.idValue);
    input.setAttribute("aria-label", this.ariaLabelValue);

    input.addEventListener("input", (ev) => {
      console.log(ev.target.value);
    });

    this.shadowRoot.appendChild(input);
  }

  render() {
    this.renderInput();
  }
}

customElements.define("custom-input", CustomInput);
