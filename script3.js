/* 3. Месяц и время года */

let num = +prompt('Введите число:');

try {
  if (num < 1 || num > 12) {
    throw 'Ошибка!!!';
  } else {
    switch (num) {
      case 1:
      case 2:
      case 12:
        console.log('Сейчас зима!');
        break;
      case 3:
      case 4:
      case 5:
        console.log('Сейчас весна!');
        break;
      case 6:
      case 7:
      case 8:
        console.log('Сейчас лето!');
        break;
      case 9:
      case 10:
      case 11:
        console.log('Сейчас осень!');
        break;
      // default:
      // console.log('Error!');
    }
  }
} catch (error) {
  console.log(error);
}
