let num = +prompt('Угадай число от 1 до 10:');
const random = Math.floor(Math.random() * 10);

try {
  if (num < 0 || num > 10) {
    throw 'Ошибка!!! Число должно быть в диапазоне от 1 до 10!';
  }
  if (num > random) {
    console.log('Меньше!');
  } else if (num < random) {
    console.log('Больше!');
  } else if (num == random) {
    console.log('Правильно!');
  } else if (isNaN(num)) {
    console.log('Error! Вы ввели не число!');
  }
} catch (error) {
  console.log(error);
}

console.log(random);
console.log(num);
