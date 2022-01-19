'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Loading',
        success: 'request successfuly',
        failure: 'fatal eror'
    };
    // под каждую форму подвязываем функцию
    forms.forEach(element => {
        postData(element);

    });

    //fuction for posting data
    function postData(form) { // принимает форму. в будущем на нее проще будет навешать обработчик события
        form.addEventListener('submit', event => { // используем на форме событие submit - срабатывает каждый раз когда хотим отправить форму, если на форме стоит кнопка с типом сабмит то автоматически событие сабмит
            event.preventDefault(); //отменяем стандртное поведение браузера, в AJAX запросах она должна идти в самом начале
            //создаем новый блок для вывода сообщений по отравботке отправки формы
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status'); // добавляем классы если естть
            statusMessage.textContent = message.loading; //добавляем сообщение в новый элемент на странице
            form.append(statusMessage); // добавляем в форму(фронт) этот элемент

            //создаем объект HXMLHTTPReq
            const req = new XMLHttpRequest();
            //вызываем метод open для настройки запроса
            req.open('POST', 'server.php'); //передаем настройки, 1 -метод, 2 -путь к серверу
            //первый простой способ подготовки данных из формы jобъект formData - формат - ключ - значение

            //req.setRequestHeader('Content-type', 'multipart/form-data'); // настраиваем заголовки если используем XMLHTTPReques+FormData заголовок не нужен
            req.setRequestHeader('Content-type', 'application/json') //отправка в формате JSON
            const formData = new FormData(form); // создаем переменеую, пристваеивам объект FormData() во внутрь ту форму с которой нам нужны данные

            // из FormData в JSON
            const obj = {};

            // получаем обычный объект из formData
            formData.forEach((value, key) => {
                obj[key] = value;
            });
            //конвертируем объект в Json
            const json = JSON.stringify(obj);

            //отправка данных на сервер
            req.send(json); // отправляем сформированный объект
            req.addEventListener('load', () => { // обработчик события load - конечная узка нашего запросаю получаем ответ от сервера
                if (req.status === 200) { // проверяем наш запрос, что он успешно отрпавился
                    console.log(req.response);
                    statusMessage.textContent = message.success; //сообще при ответе от сервера
                    form.reset(); //  оочищяяем фоормупосле отправки,  (сбрасываем ее)
                    // удаляем блок statusMessage через определенное время
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2200);
                } else { statusMessage.textContent = message.failure; };



            });


        });
    }
});