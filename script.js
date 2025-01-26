/*  1. Базовый уровень: Калькулятор  */

let num = +prompt('Введите первое число:');
let num1 = +prompt('Введите второе число:');
let sumboll = prompt('Введите математическое действие:');
let error1 = num == 0 || num1 == 0;

try {
  if (error1) {
    throw 'Error делить на 0 нельзя!';
  } else {
    if (sumboll == '+') {
      console.log(num + num1);
    } else if (sumboll == '-') {
      console.log(num - num1);
    } else if (sumboll == '*') {
      console.log(num * num1);
    } else if (sumboll == '/') {
      console.log(num / num1);
    } else {
      console.log(`Вы ввели не верное математическое действие.`);
    }
  }
} catch (error) {
  console.log(error);
}
