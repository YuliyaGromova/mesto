import { Card } from "../components/Card.js";
import { formValidationConfig, cardConfig } from "../components/config.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupForDeleteCard } from "../components/PopupForDeleteCard.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import "./index.css";
//

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-62",
  headers: {
    authorization: "6356ac75-0b91-4413-9681-673544a8d741",
    "Content-Type": "application/json",
  },
});
//

const profilePopupClass = new PopupWithForm("#popupEdit", saveEditProfile);
profilePopupClass.setEventListeners();
const cardPopupClass = new PopupWithForm("#popupAdd", saveAddCard);
cardPopupClass.setEventListeners();
const avatarPopupClass = new PopupWithForm("#popupEditAvatar", saveNewAvatar);
avatarPopupClass.setEventListeners();
const imagePopupClass = new PopupWithImage("#popupOpenPic");
imagePopupClass.setEventListeners();

const cardDeletePopupClass = new PopupForDeleteCard(
  "#popupDeleteCard",
  deleteCard
);
cardDeletePopupClass.setEventListeners();

const profile = document.querySelector(".profile");
const buttonEditProfile = profile.querySelector(".profile__button-edit");
const buttonAddCard = profile.querySelector(".profile__button-add");
const buttonEditAvatar = profile.querySelector(".profile__button-avatar");

const profileClass = new UserInfo(".profile__name", ".profile__info");

const formProfile = document.forms["popupEdit"];
const validatorEditProfile = new FormValidator(
  formProfile,
  formValidationConfig
);

const formAvatar = document.forms["popupAvatar"];
const validatorEditAvatar = new FormValidator(formAvatar, formValidationConfig);

const formAddCard = document.forms["popupAdd"];
const validatorAddCard = new FormValidator(formAddCard, formValidationConfig);


let userId;
let cardList;

Promise.all([ //в Promise.all передаем массив промисов которые нужно выполнить
    api.getUserInfo(),
    api.getInitialCards()
])
  .then((data)=>{
    userId = data[0]._id;
    profileClass.setUserInfo(data[0]);
    data[1].reverse();
    cardList = new Section(
  {
    renderer: (item) => {
      const cardElement = getCard(item);
      cardList.addItem(cardElement);
    },
  },
  cardConfig.galleryClass
);
    cardList.renderItems(data[1]);
  })
  .catch((err)=>{ //попадаем сюда если один из промисов завершаться ошибкой
    console.log(err);
    disabledAll();
  }) 

function errorApiMessage(err) {
  console.log(err);
      alert(
        "По техническим причинам данная операция недоступна. Попробуйте позднее"
      );
}

function disabledAll() {
  document.querySelector('.content').classList.add('content_disabled');
  document.querySelector('.error').classList.add('error_active');
}

//функции открывающие popup
function openPopupProfile() {
  const data = profileClass.getUserInfo();
  profilePopupClass.setInputValues(data);
  validatorEditProfile.resetValidation();
  profilePopupClass.open();
}

function openPopupAddCard() {
  //formAddCard.reset();
  validatorAddCard.resetValidation();
  cardPopupClass.open();
}

function openPopupBigImage(name, link) {
  imagePopupClass.open({ name, link });
}

function openPopupDetitionConfirmation(cardId, card) {
  cardDeletePopupClass.open(cardId, card);
}

function openPopupEditAvatar() {
  formAvatar.reset();
  validatorEditAvatar.resetValidation();
  avatarPopupClass.open();
}

function checkMyLike(likes) {
  let myLike = false;
  if (likes.length) {
    likes.forEach((like) => {
      if (like._id === userId) {
        myLike = true;
      }
    });
  }
  return myLike;
}

function toggleLike(card) {
  if (!card._myLike) {
    api.putLike(card._id)
      .then((resAdd) => {
        card.toggleLike(resAdd.likes.length);
      })
      .catch((err)=> {console.log(err)})
  } else {
    
    api.takeOfLike(card._id)
      .then((resDel) => {
        card.toggleLike(resDel.likes.length);
      })
      .catch((err)=> {console.log(err)})
  }

}

function getCard(item) {
  const card = new Card(
    item,
    cardConfig.templateSelector,
    openPopupBigImage,
    openPopupDetitionConfirmation,
    checkMyLike,
    toggleLike
  );
  const cardElement = card.generateCard();
  card.handleDeleteCard(userId);
  return cardElement;
}

//функции сохраняющие изменения
function saveEditProfile(evt, data) {
  evt.preventDefault();
  profilePopupClass.renderLoading(true);
  api
    .editUserInfo(data)
    .then((res) => {
      profileClass.setUserInfo(res);
      profilePopupClass.close();
    })
    .catch((err) => {
      errorApiMessage(err);
    })
    .finally(() => {
      profilePopupClass.renderLoading(false);
    }
      
    )
}

function saveAddCard(evt, data) {
  evt.preventDefault();
  cardPopupClass.renderLoading(true);
  api
    .addNewCard(data)
    .then((res) => {
      const cardElement = getCard(res);
      cardList.addItem(cardElement);
      cardPopupClass.close();
    })    
    .catch((err) => {
      console.log(err);
      errorApiMessage(err);
    })
    .finally(() => {
      cardPopupClass.renderLoading(false);
    })
}

function saveNewAvatar(evt, data) {
  evt.preventDefault();
  avatarPopupClass.renderLoading(true);
  api
    .editAvatar(data)
    .then((res) => {
      profileClass.setUserAvatar(res.avatar);
      avatarPopupClass.close();
    })
    .catch((err) => {
      errorApiMessage(err);
    })
    .finally(() => {
      avatarPopupClass.renderLoading(false);
    })
}

function deleteCard(evt, cardId, card) {
  evt.preventDefault();
  api
    .deleteCard(cardId, card)
    .then(() => {
        card.remove();
        cardDeletePopupClass.close();
        })
    .catch((err) => {
      errorApiMessage(err);
    });
}

//кнопка "редактировать" открывает popup редактирования информации о пользователе
buttonEditProfile.addEventListener("click", openPopupProfile);

//кнопка "добавить" открывает popup добавления новой картиочки
buttonAddCard.addEventListener("click", openPopupAddCard);

//кнопка "Редактировать" открывает popup загрузки новой аватарки
buttonEditAvatar.addEventListener("click", openPopupEditAvatar);

//вызов функции валидации форм
validatorEditProfile.enableValidation();
validatorAddCard.enableValidation();
validatorEditAvatar.enableValidation();
