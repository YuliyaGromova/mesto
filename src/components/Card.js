export class Card {
  constructor(item, template, handleCardClick, openPopupCardDelete,toggleLike, userId) {
    this._link = item.link;
    this._name = item.name;
    this._owner = item.owner._id; //id создателя карточки
    this._id= item._id; //id карточки
    this._template = document.querySelector(template);
    this._handleCardClick = handleCardClick; //открываем попап просмотра карточки
    this._openPopupCardDelete = openPopupCardDelete;
    this._likes = item.likes;
    this._likeCounter = item.likes.length; // количество лайков
    this._userId = userId;
    this._toggleLike = toggleLike;
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
    this._myLike = this._checkMyLike();
    if (this._myLike) {
      this._showMyLike(); //если есть "мой" лайк красим сердечко
    }
    this._setEventListeners();
    this.handleDeleteCard();
    return this._element;
  }

  handleDeleteCard() {
    if (this._userId === this._owner) {
      this._element.querySelector('.gallery__delete').classList.add('gallery__delete_active');
    
      this._element
        .querySelector(".gallery__delete")
        .addEventListener("click", () => {
          this._openPopupCardDelete(this._id, this.deleteCard);
        });
    }
  }

  _checkMyLike() {
    if (this._likeCounter) {
      this._likes.forEach((like) => {
        if (like._id === this._userId) {
          this._myLike = true;
        } else {
          this._myLike = false;
        }
      });
    } return this._myLike; 
  }

  _setEventListeners() {
    this._elementLike.addEventListener("click", () => {
      this._toggleLike(this._id, this._myLike, this.showToggleLiKe);
    });
    
    this._photoElement
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });
  }
  
  _countLike() {
    this._textCounter.textContent = this._likeCounter;
  }

  showToggleLiKe = (likeCount) => {
    this._elementLike.classList.toggle("like_active");
    this._textCounter.textContent = likeCount;
    this._myLike = !this._myLike;
  }

  _showMyLike() {
    if (this._myLike) {
      this._elementLike.classList.add("like_active");
    } 
  }

  deleteCard = () => {
    this._element.closest(".gallery__card").remove();
  }

}