// Создайте класс UserInfo
// Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.

export class UserInfo {
    constructor(nameSelector, infoSelector) {
        this._profile = document.querySelector(".profile");
        this._userName = this._profile.querySelector(nameSelector);
        this._userInfo = this._profile.querySelector(infoSelector);
    }
    getUserInfo() {
        this.data = {
            name: this._userName.textContent,
            info: this._userInfo.textContent
        }
        return this.data;
    }
    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userInfo.textContent = data.info;
    }
}