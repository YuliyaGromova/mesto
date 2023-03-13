import { Card } from "../components/Card.js";
import { initialCards, formValidationConfig, cardConfig } from "../components/Config.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import './index.css';

const profilePopupClass = new PopupWithForm("#popupEdit", saveEditProfile);
profilePopupClass.setEventListeners();
const cardPopupClass = new PopupWithForm("#popupAdd", saveAddCard);
cardPopupClass.setEventListeners();
const imagePopupClass = new PopupWithImage("#popupOpenPic");
imagePopupClass.setEventListeners();

const profile = document.querySelector(".profile");
const buttonEditProfile = profile.querySelector(".profile__button-edit");
const buttonAddCard = profile.querySelector(".profile__button-add");

const profileClass = new UserInfo(".profile__name", ".profile__info");

const formProfile = document.forms["popupEdit"];
const validatorEditProfile = new FormValidator(
  formProfile,
  formValidationConfig
);

const formAddCard = document.forms["popupAdd"];
const validatorAddCard = new FormValidator(formAddCard, formValidationConfig);

const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const cardElement = getCard(item);
      cardList.addItem(cardElement);
    },
  },
  cardConfig.galleryClass
);

cardList.renderItems();

//функции открывающие popup
function openPopupProfile() {
  const data = profileClass.getUserInfo();
  profilePopupClass.setInputValues(data);
  validatorEditProfile.resetValidation();
  profilePopupClass.open();
}

function openPopupAddCard() {
  formAddCard.reset();
  validatorAddCard.resetValidation();
  cardPopupClass.open();
}

function openPopupBigImage(name, link) {
  imagePopupClass.open({ name, link });
}

function getCard(item) {
  const card = new Card(item, cardConfig.templateSelector, openPopupBigImage);
  const cardElement = card.generateCard();
  return cardElement;
}

//функции сохраняющие изменения
function saveEditProfile(evt, data) {
  evt.preventDefault();
  profileClass.setUserInfo(data);
  profilePopupClass.close();
}

function saveAddCard(evt, data) {
  evt.preventDefault();
  const cardElement = getCard(data);
  cardList.addItem(cardElement);
  cardPopupClass.close();
}

//кнопка "редактировать" открывает popup редактирования информации о пользователе
buttonEditProfile.addEventListener("click", openPopupProfile);

//кнопка "добавить" открывает popup добавления новой картиочки
buttonAddCard.addEventListener("click", openPopupAddCard);

//вызов функции валидации форм
validatorEditProfile.enableValidation();
validatorAddCard.enableValidation();
