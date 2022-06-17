# WebPack Template

_By Sergey Skvorcov_

### About

Готовая сборка WebPack для работы с нативным js, разметкой и стилями.

### Install

`git clone https://github.com/Gray-Starling/WebPack-Template.git`

`cd WebPack-Template`

`npm install`

### Comands

- `npm run start` - Запуск проекта локально в браузере

- `npm run dev` - Сборка проекта в режиме разработки

- `npm run build` - Сборка проекта в режиме продакшн

### Особенности:

scss но как угодно
eslint по airbnb
prettier - некоторые настройки

### Лоадеры:

html-loader Экспортирует HTML как строку. HTML сворачивается, когда этого требует компилятор.
sass-loader
postcss-loader
css-loader
style-loader, а при сборки в продакшн MiniCssExtractPlugin.loader
babel-loader - для js/jsx/ts/tsx

### плагины:

HtmlWebpackPlugin
MiniCssExtractPlugin
в продакшн BundleAnalyzerPlugin

### git/ git actions/ husky

Настроен хаски при комите или пуше прогоняет через линтер

### Template

Шаблон имеет 3 основных файла (index.html, index.js, index.scss)
index.html содержит основную статическую разметку
index.scss не имеет стилей как таковых, а лишь импортирует нормалайз, шрифт, миксины и изменяемые переменные
index.js сердце сборки. весь код должен начинаться здесь

#### scss folder

global.scss - имеет глобальные стили для всего вашего проекта
normilize.scss - тут понятно
scss-fonts - настройки шрифтов
scss-mixins - миксины для проекта
scss-variables - изменяемые переменные

#### assets folder

##### img

Содержит все изображения используемые в разработке

#### fonts

Набор шрифтов подключенных к проекту
