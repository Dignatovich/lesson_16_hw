/* 5. Классификация ошибок */
try {
  let num = +prompt('Введите число:');
  let num2 = +prompt('Введите второе число:');
  let division = num / num2;

  if (isNaN(division)) {
    throw 'text';
  } else if (num2 == 0) {
    throw '0';
  } else if ((num >= 100 && num <= 1000) || (num2 >= 100 && num2 <= 1000)) {
    throw '100';
  }

  console.log(division);
} catch (error) {
  if (error === 'text') {
    console.log('Введен текст или пустая строка, некорректно!');
  } else if (error === '100') {
    console.log('Ошибка!!! Число больше 100!');
  } else if (error == '0') {
    console.log('Делить на 0 нельзя!');
  } else {
    console.log(error);
  }
}
