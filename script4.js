/* 4. Оценка студента */

let rating = +prompt('Введите оценку:');

try {
  if (isNaN(rating)) {
    throw 'Error! Вы ввели текст!';
  } else {
    if (rating >= 90 && rating <= 100) {
      console.log('Отлично!');
    } else if (rating >= 70 && rating <= 89) {
      console.log('Хорошо!');
    } else if (rating >= 50 && rating <= 69) {
      console.log('Удовлетворительно!');
    } else if (rating >= 0 && rating <= 49) {
      console.log('Неудовлетворительно!');
    } else {
      console.log('Нет такого значения!');
    }
  }
} catch (error) {
  console.log(error);
}
