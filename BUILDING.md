# Стили сайта

Готовый `assets/site.css` хранится в репозитории и загружается обычным `<link>`. Для GitHub Pages сборка и доступ к Tailwind CDN не нужны. Шрифты Cormorant Garamond и Inter также хранятся локально в `assets/fonts/`, лицензии находятся рядом.

После изменения классов Tailwind пересоберите CSS:

```sh
npm install
npm run build:css
```

Версия Tailwind закреплена в `package.json`. В коммит включайте обновлённый `assets/site.css`. Пользовательские цвета и темы находятся в `assets/theme.css`, просмотр дипломов — в `assets/diplomas.css`.
