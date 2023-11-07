'use strict'

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
let rollback = 37;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?")
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?")

let fullPrice;
let servicePercentPrice;

const showTypeOf = function (variable) {
    return variable, typeof variable;
}

const getAllServicePrices = function(servPr1, servPr2) {
    return servPr1 + servPr2;
}

const getFullPrice = function() {
    fullPrice = screenPrice + getAllServicePrices(servicePrice1, servicePrice2);
    return fullPrice;
}

const getTitle = function (str) {
    if (str == "") {
        return "Упс, где же название проекта?"
    } else {
        return str.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase();
    }
}

const getServicePercentPrices = function(total, percent) {
    servicePercentPrice = Math.floor(total - (total * (percent / 100)));
    return servicePercentPrice;
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

console.log(showTypeOf(title));
console.log(showTypeOf(screenPrice));
console.log(showTypeOf(adaptive));

console.log(screens);

console.log(getAllServicePrices(servicePrice1, servicePrice2));
console.log(getFullPrice());
console.log(getTitle(title))
console.log(getServicePercentPrices(fullPrice, rollback));
console.log(getRollbackMessage(fullPrice));

console.log(screens.length);
console.log('Стоимость разработки сайта ' + fullPrice + ' долларов');