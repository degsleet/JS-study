'use strict'

let title = prompt("Как называется ваш проект?");
console.log(title);
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
console.log(screens);
let screenPrice = prompt("Сколько будет стоить данная работа?", 12000);
console.log(screenPrice);
let rollback = 37;
let adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = prompt("Сколько это будет стоить?")
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = prompt("Сколько это будет стоить?")
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.floor(fullPrice - (fullPrice * (rollback / 100)));
console.log(servicePercentPrice)

switch (true) {
    case fullPrice >= 30000:
        console.log ("Даем скидку в 10%");
        break
    case fullPrice >= 15000 && fullPrice < 30000:
        console.log ("Даем скидку в 5%");
        break
    case fullPrice < 15000 && fullPrice >= 0:
        console.log("Скидка не предусмотрена");
        break
    default:
        console.log("Что-то пошло не так");
}

alert('любой текст в алерте');
console.log('любой текст в консоли');
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' доллара') ;
console.log('Стоимость разработки сайта ' + fullPrice + ' долларов');
console.log(screens.toLowerCase().split(','));
console.log(fullPrice * (rollback / 100));