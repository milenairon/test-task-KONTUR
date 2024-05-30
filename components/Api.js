// export default class Api {
//   constructor({ url, headers }) {
//     this._url = url;
//     this._headers = headers;
//   }
//   _getRequest(url, options) {
//     return fetch(url, options).then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//       //если запрос ушел, но пришел ответ с ошибкой
//       return new Error("Что-то пошло не так");
//     });
//   }

//   //Получить цитату
//   getQuote() {
//     return this._getRequest(`${this._url}`, {
//       method: "POST",
//       headers: this._headers,
//       body: JSON.stringify({}),
//       redirect: "follow",
//     });
//   }
// }
