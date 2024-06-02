import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
  }

  close() {
    super.close(); //функция закрытие попапа на esc, темный фон
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
      super.close();
      this._form.reset();
    });
  }
}
