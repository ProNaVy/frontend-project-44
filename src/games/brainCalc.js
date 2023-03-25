import { game } from '../../bin/games.js';

export const brainCalc = (name) => {
  console.log('Brain calc');
  console.log('What is the result of the expression?');

  const round = () => {
    const arr = ['+', '-', '*'];
    const randomArr = Math.floor(Math.random(arr) * arr.length);
    const randomNamber1 = Math.floor(Math.random() * 100);
    const randomNamber2 = Math.floor(Math.random() * 100);
    const question = (`${randomNamber1}${arr[randomArr]}${randomNamber2}`);

    const trueAnsver1 = () => {
      let res;
      if (arr[randomArr] === '+') {
        res = randomNamber1 + randomNamber2;
      } else if (arr[randomArr] === '-') {
        res = randomNamber1 - randomNamber2;
      } else {
        res = randomNamber1 * randomNamber2;
      }
      return res;
    };

    const trueAnsver = trueAnsver1(randomArr, randomNamber1, randomNamber2);
    return [question, trueAnsver];
  };

  game(round, name);
};
