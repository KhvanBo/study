//'use strict';
document.addEventListener('DOMContentLoaded', () => {

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector = null, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            if (parentSelector) {
                this.parent = document.querySelector(parentSelector);
            }
            this.transfer = 27;
            this.changeToUAH(); //метод конвертации валюты. свойства конструируются по порядку, когда дойдет то метода конвертации он отработает и вернет в прайс нужную цифру
        }

        // методы можно вызывать не посредственно в конструторе либо в других методах
        changeToUAH() {
                this.price = this.price * this.transfer;
            }
            // метод формирования верстки
        render() {
            // создаем элемент
            const element = document.createElement('div');
            //обработка массива rest
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            //помещаем структуру HTML в элемент
            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                
                `;
            // this.parent это DOM элемент. append метод DOM элемента что бы мыпоместили во внуть DOM элеент
            this.parent.append(element);

        }
    }

    // вывоз объекта один из способов
    //const div = new MenuCard();
    //div.render();
    // укороченный вариант делаем тогда когда объект используется на месте. Метод отработает и удалитьсяю что бы и
    //использовать 1 раз
    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container' //берем див menu в котором есть container

    ).render();
    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container', //берем див menu в котором есть container
        'menu__item'
    ).render();
    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container', //берем див menu в котором есть container
        'menu__item'
    ).render();


});