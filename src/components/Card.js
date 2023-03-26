import { Api } from "./Api.js";

export class Card {
  constructor(item, template, handleCardClick, openPopupCardDelete,checkMyLike, api) {
    this._link = item.link;
    this._name = item.name;
    this._owner = item.owner._id; //id создателя карточки
    this._id= item._id; //id карточки
    this._template = document.querySelector(template);
    this._handleCardClick = handleCardClick; //открываем попап просмотра карточки
    this._openPopupCardDelete = openPopupCardDelete;
    this._myLike=checkMyLike(item.likes); //проверяем есть ли среди лайкнувших пользователь с id пользователя
    this._likeCounter = item.likes.length; // количество лайков
    this._api=api;
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
    this._textCounter = this._element.querySelector('.gallery__like-counter');
    this._countLike();
    this._showMyLike(); //если есть "мой" лайк красим сердечко
    this._setEventListeners();
    return this._element;
  }

  handleDeleteCard(userId) {
    if (userId === this._owner) {
      this._element.querySelector('.gallery__delete').classList.add('gallery__delete_active');
    
      this._element
        .querySelector(".gallery__delete")
        .addEventListener("click", () => {
          this._openPopupCardDelete(this._id);
        });
    }
  }

  _setEventListeners() {
    this._elementLike.addEventListener("click", () => {
      this._toggleLike();
    });
    
    this._photoElement
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });
  }
  
  _countLike() {
    this._textCounter.textContent = this._likeCounter;
  }

  _toggleLike() {
    if (!this._myLike) {
      this._elementLike.classList.add("like_active");
      this._likeCounter = +this._likeCounter +1
      this._countLike();
      this._api.putLike(this._id)
        .catch((err)=> {console.log(err)})
    } else {
      this._elementLike.classList.remove("like_active");
      this._likeCounter = +this._likeCounter -1;
      this._countLike();
      this._api.takeOfLike(this._id)
      .catch((err)=> {console.log(err)})
    }
    this._myLike = !this._myLike;
  }

  _showMyLike() {
      if (this._myLike) {
        this._elementLike.classList.add("like_active");
      } 
  }

}

