# Skyeng

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Тестовое задание (Skyeng)

Форкнуть [шаблон приложения](https://stackblitz.com/edit/vim8-1-tabs-template?file=app%2Fapp.component.html) и на его основе реализовать табы по указанной в app.component.html разметке (в отдельном аккуратно оформленном модуле, в отдельном каталоге)

  * и содержимое, и заголовок должны поддерживать отображение других компонентов/произвольного html
  * по умолчанию активен первый таб
  * должна поддерживаться возможность динамически добавить/убрать таб
  * при удалении активного таба, активным становится первый таб (если остался хотя бы один)
  * учесть что таких блоков с табами на странице может быть множество в разных местах
  * (желательно) контент табов должен инициализироваться только при активации соответствующего таба
  * изменять разметку app компонента можно только для решения проблемы инициализации контента активного таба

Для оформления табов достаточно использовать 3 класса из styles.css. Приложение должно работать без NO_ERRORS_SCHEMA/CUSTOM_ELEMENTS_SCHEMA в AppModule.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
