export class Card {
  constructor(item, template, handleCardClick) {
    this._link = item.link;
    this._name = item.name;
    this._template = document.querySelector(template);
    this._handleCardClick = handleCardClick;
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
    this._elementLike = this._element.querySelector(".like");
    this._photoElement.src = this._link;
    this._photoElement.alt = this._name;
    this._element.querySelector(".gallery__name-place").textContent =
      this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._elementLike.addEventListener("click", () => {
      this._toggleLike();
    });
    this._element
      .querySelector(".gallery__delete")
      .addEventListener("click", () => {
        this._deleteCard();
      });
    this._photoElement
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });
  }

  _toggleLike() {
    this._elementLike.classList.toggle("like_active");
  }

  _deleteCard() {
    this._element.closest(".gallery__card").remove();
  }
}

