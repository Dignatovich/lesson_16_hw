/*  1. Базовый уровень: Калькулятор  */

let num = +prompt('Введите первое число:');
let num1 = +prompt('Введите второе число:');
let sumboll = prompt('Введите математическое действие:');
let error1 = num1 == 0;
let result = num / num1;

try {
  if (error1 && result) {
    throw '0';
  } else if (isNaN(num, num1)) {
    throw 'Nan!';
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
  if (error == '0') {
    console.log('Error делить на 0 нельзя!');
  } else if (error == 'Nan!') {
    console.log('Вы ввели не число!');
  }
}
