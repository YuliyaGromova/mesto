let editPopup= document.querySelector('#popupEdit');
let toggleButton = editPopup.querySelector('.popup__toggle');
let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__button-edit');

let userName = profile.querySelector('.profile__name');
let editName = editPopup.querySelector('.popup__item_el_name');

let userInfo = profile.querySelector('.profile__info');
let editInfo = editPopup.querySelector('.popup__item_el_info');

const editSave = editPopup.querySelector('.popup__edit');

function popupOpen() {
  editPopup.classList.add('popup_opened');
  editName.value = userName.textContent;
  editInfo.value = userInfo.textContent;
};

function popupClose() {
  editPopup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = editName.value;
  let infoInput = editInfo.value;

  userName.textContent = nameInput;
  userInfo.textContent = infoInput;
  popupClose();
}

// кнопка "редактировать" открывает popup
editButton.addEventListener('click', popupOpen);

// кнопка "закрыть" в popup закрывает его
toggleButton.addEventListener('click', popupClose);

// кнопка "сохранить" в popup сохраняет введенные значения и закрывает popup
editSave.addEventListener('submit', handleFormSubmit);

// умолчательные карточки с фото
const initialCards = [
  {
    name: 'Россия',
    link: 'https://images.unsplash.com/photo-1612622807284-9854ea9bbdd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
  },
  {
    name: 'Греция',
    link: 'https://images.unsplash.com/photo-1649609855494-51ccd16ac8d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  },
  {
    name: 'Объединенные Арабские Эмираты',
    link: 'https://images.unsplash.com/photo-1642952238795-da915a83206d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Индия',
    link: 'https://images.unsplash.com/photo-1609067643332-8785d998aee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Испания',
    link: 'https://images.unsplash.com/photo-1573393264565-b85b58325758?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  },
  {
    name: 'Мальдивы',
    link: 'https://images.unsplash.com/photo-1649231144211-2840666bae26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  }
];

const addCards = document.querySelector('.gallery__cards'); //куда вставить
const template = document.querySelector('#gallery-card').content; // от куда вставлять
for (let i=0; i<initialCards.length; i+=1) {
  const cardTemplate = template.querySelector('.gallery__card').cloneNode(true); //клон 
  cardTemplate.querySelector('.gallery__photo').src = initialCards[i].link;
  cardTemplate.querySelector('.gallery__photo').alt = initialCards[i].name;
  cardTemplate.querySelector('.gallery__name-place').textContent = initialCards[i].name;
  addCards.append(cardTemplate);

}


// popup  добавление нового места
let addPopup= document.querySelector('#popupAdd');
let toggleButtonAdd = addPopup.querySelector('.popup__toggle');
let addButton = profile.querySelector('.profile__button-add');

let namePlace = addCards.querySelector('.gallery__name-place');
let namePlaceNew = addPopup.querySelector('.popup__item_el_name');

let linkPhoto = addCards.querySelector('.gallery__photo');
let linkPhotoNew = addPopup.querySelector('.popup__item_el_info');

const addSave = addPopup.querySelector('.popup__edit');

function popupOpenTwo() {
  addPopup.classList.add('popup_opened');
  linkPhotoNew.value = '';
  namePlaceNew.value = '';
 };

function popupCloseTwo() {
  addPopup.classList.remove('popup_opened');
};

function handleFormSubmitTwo(evt) {
  evt.preventDefault();

  let namePlaceInput = namePlaceNew.value;
  let linkInput = linkPhotoNew.value;

  const cardTemplate = template.querySelector('.gallery__card').cloneNode(true); //клон 
  cardTemplate.querySelector('.gallery__photo').src = linkInput;
  cardTemplate.querySelector('.gallery__photo').alt = namePlaceInput;
  cardTemplate.querySelector('.gallery__name-place').textContent = namePlaceInput;
  addCards.append(cardTemplate);

  popupCloseTwo();
}

// // кнопка "редактировать" открывает popup
addButton.addEventListener('click', popupOpenTwo);
// // кнопка "закрыть" в popup закрывает его
toggleButtonAdd.addEventListener('click', popupCloseTwo);

// // кнопка "сохранить" в popup сохраняет введенные значения и закрывает popup
addSave.addEventListener('submit', handleFormSubmitTwo);