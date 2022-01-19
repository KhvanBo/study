'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const tabsParent = document.querySelector('.tabheader__items'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        calculatingParent = document.querySelector('.calculating__choose'),
        calculatingChoose = calculatingParent.querySelectorAll('.calculating__choose-item');

    const dateEnd = '2021-12-31';

    function timeParse(dateEnd) {
        const totalTime = Date.parse(dateEnd) - Date.parse(new Date()),
            days = Math.floor(totalTime / (1000 * 60 * 60 * 24)),
            hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((totalTime / (1000 * 60)) % 60),
            seconds = Math.floor((totalTime / 1000) % 60);
        return {
            't': totalTime,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }
    }

    function setZero(value) {
        if (value >= 0 && value < 10) {
            return (`0${value}`);
        }
        return (value);
    }

    function setTime(timerClass, endTime) {
        const timer = document.querySelector(timerClass),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            totalTime = setInterval(updateTime, 1000);
        updateTime();

        function updateTime() {
            const t = timeParse(endTime);
            days.innerHTML = setZero(t.days);
            hours.innerHTML = setZero(t.hours);
            minutes.innerHTML = setZero(t.minutes);
            seconds.innerHTML = setZero(t.seconds);

            if (t.t <= 0) {
                clearInterval(totalTime);
            }
        }
    }

    function hideTabs() {
        tabs.forEach(element => {
            element.classList.remove('tabheader__item_active');
        });
        tabsContent.forEach(element => {
            element.classList.add('hide');
            element.classList.remove('show');
        });
    }

    function showTabs(i = 0) {
        tabs[i].classList.add('tabheader__item_active');
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
    }

    tabsParent.addEventListener('click', element => {
        const target = element.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, index) => {
                if (target == tab) {
                    hideTabs();
                    showTabs(index);
                }
            });

        }
    });

    function hideCalculating() {
        calculatingChoose.forEach(item => {
            item.classList.remove('calculating__choose-item_active');
        });
    }

    hideTabs();
    showTabs();
    setTime('.timer', dateEnd);
    hideCalculating();
    //создание модального окна

    const modalOpen = document.querySelectorAll('[data-modal]'),
        modalWindows = document.querySelector('.modal'),
        modalClose = document.querySelector('[data-close]');

    function modalShow() {
        modalOpen.forEach(event => {
            event.addEventListener('click', () => {
                modalWindows.style.display = 'block';
                console.log(modalWindows);
            });
        });

    }
    modalClose.addEventListener('click', () => {
        modalWindows.style.display = '';
    });
    modalShow();

    //rest оператор - объединяет отдельные элементы в массив. остаточные элементы. 
    // используезтся когда мы незнаем сколько параметром будет приходить
    const log = function(a, b, ...arg) {
        console.log(a, b, arg);
    }
    log('basic', 'rest', 'operator', 'usage');

    function calcOrDouble(number, basis) {
        console.log(number * basis);
    }
    calcOrDouble(3, 5);

    //fetch api
    /* fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({ name: 'Alex' }),
            headers: {
                'Conten-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => console.log(json));
 */

});