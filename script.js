'use strict'

let title;
let screens;
let screenPrice;
let adaptive;

let rollback = 37;

let service1;
let service2;

let fullPrice;
let allServicePrices
let servicePercentPrice;

const showTypeOf = function (variable) {
    return variable, typeof variable;
}

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function() {
    title = prompt("Как называется ваш проект?", "Калькулятор верстки")
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")

    screenPrice = prompt("Сколько будет стоить данная работа?")

    do {
        screenPrice = prompt("Сколько будет стоить данная работа?")
    }
    while (!isNumber(screenPrice))

adaptive = confirm("Нужен ли адаптив на сайте?")
}

const getAllServicePrices = function (servPr1, servPr2) {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?")
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?")
        }
        do {
            screenPrice = prompt("Сколько это будет стоить?")
        }
        while(!isNumber(screenPrice))

    sum += +screenPrice 
    }
    return sum
}

const getFullPrice = function () {
    return +screenPrice + allServicePrices
}

const getTitle = function () {
    if (title == "") {
        return "Упс, где же название проекта?"
    } else {
        return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase();
    }
}

const getServicePercentPrices = function () {
    return Math.floor(fullPrice - (fullPrice * (rollback/100)));
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена";
    } else {
        return "Что то пошло не так";
    };
}


asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

console.log(screens);

console.log(screens.length);

console.log(getRollbackMessage(fullPrice));
console.log("allServicePrices", allServicePrices);
console.log("servicePercentPrice", servicePercentPrice);
console.log('Стоимость разработки сайта ' + fullPrice + ' долларов');

console.log(showTypeOf(title));
console.log(showTypeOf(screenPrice));
console.log(showTypeOf(adaptive));
