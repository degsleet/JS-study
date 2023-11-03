let title = 'Project name';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 73;
let rollback = 37;
let fullPrice = 3000;
let adaptive = true;
alert('любой текст в алерте');
console.log('любой текст в консоли');
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice +
' доллара') ;
console.log('Стоимость разработки сайта ' + fullPrice + ' долларов');
console.log(screens.toLowerCase().split(','));
console.log(fullPrice * (rollback / 100));