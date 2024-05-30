// подключаем path к конфигу вебпак
const path = require("path");
// плагин для подключения html
const HtmlWebpackPlugin = require("html-webpack-plugin");
//плагин для очистки папки dist(при новой сборке)
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//плагин для того чтобы объединить много css-файлов в один
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // указали первое место, куда заглянет webpack,
  //— файл index.js в папке src
  entry: { main: "./src/pages/index.js" },
  output: {
    //место складывания файлов
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "",
  },
  mode: "development", // добавили режим разработчика
  // настройки локального сервера
  devServer: {
    static: path.resolve(__dirname, "./dist"), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    open: true, // сайт будет открываться сам при запуске npm run dev
  },
  //если тебе попадётся файл с расширением .js, сначала
  //отдай этот файл модулю babel-loader, а затем добавляй в сборку :
  module: {
    // rules — это массив правил
    // добавим в него объект правил для бабеля
    rules: [
      {
        //js файлы
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: "babel-loader",
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: "/node_modules/",
      },
      {
        //картинки, шрифты
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
      },
      {
        //CSS-файлы
        test: /\.css$/,
        // при обработке этих файлов нужно использовать
        // MiniCssExtractPlugin.loader и css-loader
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            // добавляем options, т.к. в css есть @import
            options: { importLoaders: 1 },
          },
          // Добавляем postcss-loader
          "postcss-loader",
        ],
      },
    ],
  },
  //подключение плагинов
  plugins: [
    new HtmlWebpackPlugin({
      //html
      template: "./src/index.html", // путь к файлу index.html
    }),
    new CleanWebpackPlugin(), //очистка dist
    new MiniCssExtractPlugin(), //объединяет много css-файлов в один
  ],
};
