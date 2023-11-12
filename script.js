'use strict'

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 37,
    allServicePrices: 0,
    servicePercentPrice: 0,
    fullPrice: 0,
    service1: '',
    service2: '',
    start: function () {
        appData.asking()
        appData.allServicePrices = appData.getAllServicePrices()
        appData.fullPrice = appData.getFullPrice()
        appData.servicePercentPrice = appData.getServicePercentPrices()
        appData.title = appData.getTitle()

        appData.logger()
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    asking: function () {
        appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки")
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")

        appData.screenPrice = prompt("Сколько будет стоить данная работа?")

        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?")
        }
        while (!appData.isNumber(appData.screenPrice))

        appData.adaptive = confirm("Нужен ли адаптив на сайте?")
    },
    getAllServicePrices: function (servPr1, servPr2) {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?")
            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?")
            }
            do {
                appData.screenPrice = prompt("Сколько это будет стоить?")
            }
            while (!appData.isNumber(appData.screenPrice))

            sum += +appData.screenPrice
        }
        return sum
    },
    getFullPrice: function () {
        return +appData.screenPrice + appData.allServicePrices
    },
    getTitle: function () {
        if (appData.title == "") {
            return "Упс, где же название проекта?"
        } else {
            return appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase();
        }
    },
    getServicePercentPrices: function () {
        return Math.floor(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
    },
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даем скидку в 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%";
        } else if (price >= 0 && price < 15000) {
            return "Скидка не предусмотрена";
        } else {
            return "Что то пошло не так";
        };
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        for (let key in appData) {
            console.log("Ключ: " + key + " " + "Значение: " + appData[key]);
        }
    }
}

appData.start()