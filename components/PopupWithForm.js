import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { callbackSubmitForm }) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    //собирает данные со всех полей формы
    this._inputs = Array.from(this._form.querySelectorAll(".popup__input"));
    this._callbackSubmitForm = callbackSubmitForm;
    // this._popupBtn = this._popup.querySelector(config.submitButtonSelector);
  }

  //метод для получения полей
  _getInputValues() {
    //создаем пустой объекст
    this._inputValues = {};
    //Добавляем в пустой объект все инпуты {name: value}
    this._inputs.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  //метод обратный методу для получения полей
  setInputValues(inputValues) {
    this._inputs.forEach((input) => {
      //к примеру, значение инпута = инпут[job]
      input.value = inputValues[input.name];
    });
  }

  close() {
    super.close(); //функция закрытие попапа на esc
    this._form.reset();
  }

  //Изменить значение кнопки во время загрузки
  changeValueButtonAtBoot(textLoading) {
    this._popupBtn.textContent = textLoading;
  }

  setEventListeners() {
    super.setEventListeners(); //слушатель закрытие попапа на темный фон/крестик
    //добавляет обработчик сабмита формы
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callbackSubmitForm(this._getInputValues());
    });
  }
}
