// create npm packet
/* npm init инициалтзация проекта
установка пакета:
jsonServer
npm install json-server 
пакеты устанавляиваются 
 */
'use strict';
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/menu') // промис подключаемся к json базе
        .then(data => data.json()) // data - получаем данные с базы и переводим в json
        .then(res => console.log(res)); // выводим результат в консоль



});