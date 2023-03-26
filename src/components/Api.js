export class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;

      this._authorization = options.headers.authorization;
      // console.log(this._authorization);
    }
    // Загрузка информации о пользователе с сервера
    getUserInfo() {
        return fetch(this._baseUrl + `/users/me`, {
          method: 'GET',
          headers: {
            authorization: this._authorization
          }
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
          })
    }


    // Загрузка карточек с сервера
    getInitialCards() {
        return fetch(this._baseUrl + `/cards`, {
            method: 'GET',
            headers: {
              authorization: this._authorization
            }
          })
            .then((res) => {
              if (res.ok) {
                return res.json();
              }
              // если ошибка, отклоняем промис
              return Promise.reject(`Ошибка: ${res.status}`);
            })
      }

     // Редактирование профиля
    editUserInfo(data) {
        return fetch(this._baseUrl + `/users/me`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            name: data.name,
            about: data.about,
          })
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
          })
    }
    // Добавление новой карточки
    addNewCard(data) {
        return fetch(this._baseUrl + `/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link,
              })
          })
            .then((res) => {
              if (res.ok) {
                return res.json();
              }
              // если ошибка, отклоняем промис
              return Promise.reject(`Ошибка: ${res.status}`);
            })
      }
    
    // Отображение количества лайков карточки

    // Удаление карточки
    deleteCard(cardId) {
      return fetch(this._baseUrl + `/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._authorization
        }
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })
    }
    // Постановка и снятие лайка
    putLike(cardId) {
      // PUT https://mesto.nomoreparties.co/v1/cohortId/cards/cardId/likes
      return fetch(this._baseUrl + `/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: {
          authorization: this._authorization
        }
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })
    }

    takeOfLike(cardId) {
      // DELETE https://mesto.nomoreparties.co/v1/cohortId/cards/cardId/likes
      return fetch(this._baseUrl + `/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: {
          authorization: this._authorization
        }
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })
    }
    // Обновление аватара пользователя
}


// Требования к коду
// Для работы с API создайте класс Api. Все запросы должны быть методами этого класса:
// class Api {
//   constructor(options) {
//     // тело конструктора
//   }

//   getInitialCards() {
//     // ...
//   }

//   // другие методы работы с API
// }

// const api = new Api({
//   baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
//   headers: {
//     authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
//     'Content-Type': 'application/json'
//   }
// }); 