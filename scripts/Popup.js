export class Popup {
  constructor(selector) {
    this._selector = selector;
    this._popup = document.querySelector(this._selector);
    this._bottonClose = this._popup.querySelector(".popup__toggle");
  }

  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      this._closePopupOverlay(evt);
    });
    this._bottonClose.addEventListener("click", () => {
      this.close();
    });
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  
  _closePopupOverlay(evt) {
    if (evt.currentTarget === evt.target) {
      this.close();
    }
  }

  _handleEscClose = (evt) => {
    if (evt.key == "Escape") {
      this.close();
    }
  };
}
