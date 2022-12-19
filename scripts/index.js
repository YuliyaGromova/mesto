function popupCloseOpen() {
    editPopup.classList.toggle('popup_opened');
    editName.value=userName.textContent;
    editInfo.value=userInfo.textContent;
}

let editPopup = document.querySelector('.popup');
let toggleButton = editPopup.querySelector('.popup__toggle')
let profile = document.querySelector('.profile__user');
let editButton = profile.querySelector('.profile__button-edit');

let userName=profile.querySelector('.profile__name');
let editName=editPopup.querySelector('.popup__item_el_name');

let userInfo=profile.querySelector('.profile__info');
let editInfo=editPopup.querySelector('.popup__item_el_info');


// кнопка "редактировать" открывает popup
editButton.addEventListener('click', popupCloseOpen);
// кнопка "закрыть" в popup закрывает его
toggleButton.addEventListener('click', popupCloseOpen);


function handleFormSubmit (evt) {
    evt.preventDefault();

    let nameInput = editName.value;
    let infoInput = editInfo.value;

    userName.textContent = nameInput;
    userInfo.textContent = infoInput;
    popupCloseOpen();
}

const editSave=document.querySelector('.popup');

editSave.addEventListener('submit', handleFormSubmit); 