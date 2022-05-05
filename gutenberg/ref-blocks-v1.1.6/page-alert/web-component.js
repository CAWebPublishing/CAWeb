/**
 * Page Alert web component
 * Supported endpoints: Wordpress v2
 */
class CAGovPageAlert extends window.HTMLElement {
  connectedCallback() {
    this.type = "wordpress";
    this.message = this.dataset.message || "";
    this.icon = this.dataset.icon || "";

    if (this.type === "wordpress") {
      document.addEventListener("DOMContentLoaded", () => {
        this.template({ message: this.message, icon: this.icon }, "wordpress");
        document.querySelector('cagov-page-alert .close-button').addEventListener('click', (e) => {
          document.querySelector('cagov-page-alert').style.display = "none";
          // document.querySelector('cagov-page-alert').classList.add("component-closed"); // Alternative way to do this that is a little more stable - add a class, however, the :has selector is still not supported in browsers so we can't use it.
          if (document.querySelector('cagov-page-alert').closest('.cagov-block') !== null) {
            document.querySelector('cagov-page-alert').closest('.cagov-block').style.display = "none"; 
          }
        })
      }
      );
    }
  }

  template(data, type) {
    if (data !== undefined && data !== null && data.content !== null) {
      if (type === "wordpress") {
        this.innerHTML = `<div class="cagov-page-alert cagov-stack"><div class="icon"><span class="${this.icon}"></span></div>
        <div class="body">${this.message}</div>
        <div class="close-button"><span class="ca-gov-icon-close-line"></span></div></div>`;
      }
    }

    return null;
  }
}

if (customElements.get("cagov-page-alert") === undefined) {
  window.customElements.define("cagov-page-alert", CAGovPageAlert);
}
