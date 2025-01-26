/* 6. Игровой автомат */

let num = +prompt('Введите число:');

try {
  if (num > 3) {
    throw 'Побробуйте еще раз!';
  } else {
    switch (num) {
      case 1:
        console.log('Выиграл 100 очков!');
        break;
      case 2:
        console.log('Выиграл 50 очков!');
        break;
      case 3:
        console.log('Ничего не выиграл =(');
        break;
    }
  }
} catch (error) {
  console.log(error);
}
