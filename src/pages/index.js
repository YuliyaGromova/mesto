import { Card } from "../components/Card.js";
import { formValidationConfig, cardConfig } from "../components/Config.js";
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
// при загрузке страницы загружаются данные пользователя
api
  .getUserInfo()
  .then((data) => {
    userId = data._id;
    profileClass.setUserInfo(data);
  })
  .catch((err) => {
    console.log(err);
    disabledAll();
  });

// Добавление умолчательных карточек с сервера

api
  .getInitialCards()
  .then((res) => {
    createCardList(res);
  })
  .catch((err) => {
    console.log(err);
  });

// карточки в галерею
function createCardList(res) {
  const cardList = new Section(
    {
      data: res.reverse(),
      renderer: (item) => {
        const cardElement = getCard(item);
        cardList.addItem(cardElement);
      },
    },
    cardConfig.galleryClass
  );

  cardList.renderItems();
}

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
  formAddCard.reset();
  validatorAddCard.resetValidation();
  cardPopupClass.open();
}

function openPopupBigImage(name, link) {
  imagePopupClass.open({ name, link });
}

function openPopupDetitionConfirmation(cardId) {
  cardDeletePopupClass.open(cardId);
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

function getCard(item) {
  const card = new Card(
    item,
    cardConfig.templateSelector,
    openPopupBigImage,
    openPopupDetitionConfirmation,
    checkMyLike,
    api
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
    .then(() => {
      api
        .getInitialCards()
        .then((res) => {
          createCardList(res);
          cardPopupClass.close();
        })
        .catch((err) => {
          errorApiMessage(err);
        });
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
    .then(() => {
      profileClass.setUserAvatar(data.avatar);
      avatarPopupClass.close();
    })
    .catch((err) => {
      errorApiMessage(err);
    })
    .finally(() => {
      avatarPopupClass.renderLoading(false);
    })
}

function deleteCard(evt, cardId) {
  evt.preventDefault();
  api
    .deleteCard(cardId)
    .then(() => {
      api
        .getInitialCards()
        .then((res) => {
          createCardList(res);
          cardDeletePopupClass.close();
        })
        .catch((err) => {
          errorApiMessage(err);
        });
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
