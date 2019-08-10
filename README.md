# Mail client

[Пример работы](https://react-hw-mail-client.surge.sh) 

Данные авторизации:

```
Почта: test@test.ru
Пароль: 321
```

## Общая информация

В данной работе 2 контекста: один для данных, а второй для работы с авторизацией.

### Работа со стилями

Кроме того, для работы со стилями в данной работе используется новый подход —
`css-modules`. Теперь он встроен в `create-react-app`.

Как происходит работа? Обратите внимание на названия `css` файлов. Если в названии
присутствует слово `.module`, это значит webpack будет обрабатывать такие файлы по особенному. 

При импорте `css-modules` модулей в `js`, файл становится объектом, ключами которого являются названия классов из `css` файла, а значениями автоматически сгенерированные с помощью webpack имена.

Webpack следит за коллизиями имен. 

Теперь в каждом модуле можно определить класс `container` или `button`, а webpack
проследит за тем, чтобы эти имена в реальном дом дереве не пересекались.

Для работы с несколькими классами используется библиотека `classnames`. В самом
простом исполнении она объеденяет все строки-классы, переданные аргументами и
возвращает конкатенированную строку классов для тегов. 

Более подробно мы ее
изучим на соответствующем занятии про стили в react.

## Что нужно сделать?

Задача — написать почтвый клиент используя `react-router-dom`. Все данные
находятся в контексте.

**Внимание!** Тесты для этого задания написаны на `cypress` и запускаются командой `yarn cypress:run`. Для их работы необходимо чтобы приложение было запущено (команда `yarn start`).

> Перед началом работы не забудьте установить пакеты.
> Выполните команду `yarn` или `npm install`

*  Посмотрите пример работы, чтобы понять, как будет выглядеть финальное приложение.
* Изучите `cypress/integration/homework.spec.js` чтобы понять какой функционал должен быть реализован.
* Начните работу с `RootRouter.js`. В нем необходимо определить базовые роуты.
* Реализуйте приватный роут. Он должен находиться в файле `StartRoutes`.
* Реализуйте лейаут и навигацию в приложении в файле `AppRouter.js`.
* Реализуйте компоненты:
   * `Home` - в нём должно показываться приветствие
   * `InboxList` - показывает список входящих писем
   * `InboxMail` - показываетвыбранное входящее письмо
   * `OutboxList` - показывает список исходящих
   * `OutboxMail` - показывает выбранное исходящее письмо