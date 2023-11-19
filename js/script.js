const fifthBookList = bookList[5].querySelectorAll('ul li')
'use strict'

const books = document.querySelectorAll('.books')
const bookList = document.querySelectorAll('.book')
const background = document.querySelector('body');
const header = bookList[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов'
const adv = document.querySelector('.adv').remove()
const secondBookList = bookList[0].querySelectorAll('ul li')
const sixthBookList = bookList[2].querySelectorAll('ul')
const newElem = document.createElement('li')

bookList[0].before(bookList[1])
bookList[3].before(bookList[4])
bookList[5].after(bookList[2])

background.style.backgroundImage = 'url(./../image/you-dont-know-js.jpg'

secondBookList[9].after(secondBookList[2])
secondBookList[3].after(secondBookList[6])
secondBookList[6].after(secondBookList[8])

fifthBookList[1].after(fifthBookList[9])
fifthBookList[9].after(fifthBookList[3])
fifthBookList[3].after(fifthBookList[4])

newElem.textContent = 'Глава 8: За пределами ES6”'
sixthBookList[0].append(newElem)