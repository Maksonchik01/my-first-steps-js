//concat()

/* Є два рядки: 'Hello, ' і 'World!'. Об'єднай їх у змінну greeting.


Створи функцію combineNames(firstName, lastName), яка повертає повне ім'я.

*/
const firstWord = "Hello,";
const secondWord = "World!";
const greeting = firstWord.concat(' ' + secondWord);
console.log(greeting)

function combineNames(firstName, lastName){
    const fullName = firstName.concat(' ' + lastName)
    return fullName
}

/*endsWith()

Перевір, чи рядок "report.pdf" закінчується на ".pdf".

Є список email-адрес. Виведи тільки ті, які закінчуються на "@gmail.com".

Напиши функцію isSentence(sentence), яка перевіряє, чи рядок закінчується крапкою, знаком питання або оклику. 

*/

const fileName = "report.pdf";
const isPdf = fileName.endsWith(".pdf")
console.log(isPdf)

const mailList = [
    'ivan@gmail.com',
  'anna@yahoo.com',
  'peter@gmail.com',
  'maria@hotmail.com'
]; 
const gmailList = mailList.filter(email => email.endsWith('@gmail.com'));

console.log(gmailList);

function isSentence(sentence){
    return sentence.endsWith('.') || sentence.endsWith('?') || sentence.endsWith('!');

}

console.log(isSentence('!'))
/*
🧠 Завдання 1 — includes()
Напиши функцію hasLogin(text), яка перевіряє, чи в рядку є слово "login".
*/

function hasLogin(text) {
    return text.includes('login')
}
const hasLoginResult = hasLogin("iouibiib")
console.log(hasLoginResult)
/*Питання: Чому коли роблю перевірку функції через console.log мені видає повний рядок коду а не true чи false ? 
console.log(hasLogin)  видає 
ƒ hasLogin(text) {
 return text.includes('login')
}*/

/*🧠 Завдання 2 — indexOf()

Напиши функцію findAt(text), яка повертає позицію символу '@' в email-адресі. Якщо немає — повертає -1. */

function findAt(text){ 
    return text.indexOf('@')

}
/*  

slice()

✏️ Завдання:
Напиши функцію cutWord(word), яка повертає перші 3 літери слова.

*/

function cutWord(word){
    return word.slice(0, 3)
}

/*  split()

✏️ Завдання:
Напиши функцію getWords(sentence), яка розділяє речення на слова.

*/

function getWords(sentence) {
    return sentence.split(' ')
}

/*  trim()

✏️ Завдання:
Напиши функцію cleanInput(input), яка прибирає зайві пробіли з початку і кінця рядка.
*/
function cleanInput(input){
return input.trim()
}

/* 
padStart() — формат годинника
Завдання:
Напиши функцію formatTime(minutes, seconds), яка повертає рядок у форматі mm:ss.
Кожне число має бути двозначне — додай 0, якщо потрібно.
*/

function formatTime(minutes, seconds){
    const min = String(minutes).padStart(2, '0');
    const sec = String(seconds).padStart(2, '0');
    return `${min}:${sec}`;
}
console.log(formatTime(5, 9))
console.log(formatTime(12, 3))

/* 
2. padEnd() — вирівнювання в таблиці
Завдання:
Напиши функцію formatRow(label, value), яка форматує пару як рядок таблиці.
label має бути шириною 10 символів, вирівняне зліва, value — справа.
*/

function formatRow(label, value){
    const sheet= label.padEnd(10) + value;
    return sheet
}

/* 
🔹 3. repeat() — генерація зірочок
Завдання:
Напиши функцію generateStars(n), яка повертає рядок з n зірочок *.
*/
function generateStars(n){
    const stars = "*".repeat(n)
    return stars
}
console.log(generateStars(4))

/* 
🔹 4. replace() — автокорекція
Завдання:
Напиши функцію fixText(text), яка виправляє першу помилку "hte" на "the".
*/
function fixText(text){
    const fixMistakes = text.replace('hte', 'the');
    return fixMistakes
}
console.log(fixText("Im hte best"))

/* 
🔹 5. replaceAll() — цензура
Завдання:
Напиши функцію censor(text), яка замінює всі входження слова "bad" на "***".
*/

function censor(text){
    const censored = text.replaceAll("bad", "***")
    return censored
}
console.log(censor("Im very bad guy"))

/* 
🔹 6. search() — позиція першого символу
Завдання:
Напиши функцію findAtSymbol(email), яка повертає позицію символу @ у рядку.
*/

function findAtSymbol(email){
    const findOut = email.search("@")
    return findOut
}
console.log(findAtSymbol("la@gmail.com"))