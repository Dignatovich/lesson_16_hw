/* 2. Определение времени суток */

let num = prompt('Введите время:');

if (num >= 0 && num <= 5) {
  console.log('Сейчас ночь.');
} else if (num >= 6 && num <= 11) {
  console.log('Сейчас утро.');
} else if (num >= 12 && num <= 17) {
  console.log('Сейчас день.');
} else if (num >= 18 && num <= 23) {
  console.log('Сейчас вечер.');
} else {
  console.log('Вы ввели некоректное время.');
}
