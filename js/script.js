'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');  //method, url, async, login, password.
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {  //Если все отработало правильно показываем результат
            const data = JSON.parse(request.response); //Преобразовываем объект
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); 
        } else {
            inputUsd.value = 'Что-то пошло не так...';
        }
    });

});