import readlineSync from 'readline-sync';
import { game } from './games.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);

export const brainProgression = () => {
  console.log('Brain progression');
  console.log('What number is missing in the progression?');

  // инициализация массива с прогрессией
  const arr = [];
  const progres = Math.floor(Math.random() * 10);

  const firstElement = Math.floor(Math.random() * 10);
  let result = firstElement;
  let i;
  for (i = 0; i <= 10; i += 1) {
    result += progres;
    arr.push(result);
  }
  const ind = Math.floor(Math.random() * 10);
  arr.splice(ind, 1, '..');

  const question = arr;

  // правильный ответ

  const trueAnsver = (ind === 0 ? firstElement + progres : arr[ind - 1] + progres);

  // запуск игры

  game(question, trueAnsver, userName);
};



/* const game = () => {
    let i;
    let res;
    for (i = 0; i < 3; i += 1) {
      const arr = [];

      const progres = Math.floor(Math.random() * 10);
      const firstElement = Math.floor(Math.random() * 10);
      let result = firstElement;
      for (i = 0; i <= 10; i += 1) {
        result += progres;
        arr.push(result);
      };

      const ind = Math.floor(Math.random() * 10);
      arr.splice(ind, 1, '..');

      const answer = readlineSync.question(`Question: ${arr} \nYour answer:`);

      const trueAnsver = (ind === 0 ? firstElement + progres : arr[ind - 1] + progres);

      if (trueAnsver === Number(answer)) {
     console.log('Correct!');
      } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnsver}'. Let's try again, ${userName}!`);
        break;
      }
    }
    if (i === 3) {console.log(`Congratulations, ${userName}!`)};

  };
  game();
};

export default brainProgression */
