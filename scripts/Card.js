export class Card {
  constructor(item, template, funcOpenPopup) {
    this._link = item.link;
    this._name = item.name;
    this._template = document.querySelector(template);
    this._funcOpenPopup = funcOpenPopup;
  }

  _getTemplate() {
    const cardTemplate = this._template.content
      .querySelector(".gallery__card")
      .cloneNode(true);
    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._photoElement = this._element.querySelector(".gallery__photo");
    this._photoElement.src = this._link;
    this._photoElement.alt = this._name;
    this._element.querySelector(".gallery__name-place").textContent =
      this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._elementLike = this._element.querySelector(".like");
    this._elementLike.addEventListener("click", () => {
      this._toggleLike();
    });
    this._element
      .querySelector(".gallery__delete")
      .addEventListener("click", () => {
        this._deleteCard();
      });
    this._element
      .querySelector(".gallery__photo")
      .addEventListener("click", () => {
        this._funcOpenPopup(this._name, this._link);
      });
  }

  _toggleLike() {
    this._elementLike.classList.toggle("like_active");
  }

  _deleteCard() {
    this._element.closest(".gallery__card").remove();
  }
}
