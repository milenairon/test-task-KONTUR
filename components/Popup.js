export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  //закрыть попап на esc
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  //закрыть попап  на крестик/темный фон
  _handlePopupClose(evt) {
    if (
      evt.currentTarget === evt.target //закрытие при нажатии в пустоту
    ) {
      //если 'элемент на котором висит(сам попапа, смотри ниже вызов)' = 'элемент, на который нажали(сам попап)' или 'параметр содержит класс popup__button-close'
      this.close();
    }
  }

  //слушатели/обработчики событий
  setEventListeners() {
    this._popup.addEventListener("click", this._handlePopupClose.bind(this));
  }
}
