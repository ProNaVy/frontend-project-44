import readlineSync from 'readline-sync';

/*export const brainGcd = (name) => {
  console.log('Brain gcd');

  console.log('Find the greatest common divisor of given numbers.');
  const game = () => {
    let i = 0;
    for (i = 0; i < 3; i += 1) {
      const randomNamber1 = Math.floor(Math.random() * 100);
      const randomNamber2 = Math.floor(Math.random() * 100);
      const randomGcd = (`${randomNamber1} ${randomNamber2}`);

      const answer = readlineSync.question(`Question: ${randomGcd} \nYour answer:`);

      const trueAnsver = (num1, num2) => {
        let result1 = num1;
        let result2 = num2;
        while (result1 !== result2) {
          if (result1 > result2) {
            result1 -= result2;
          } else {
            result2 -= result1;
          }
        }
        return result1;
      };

      if (Number(trueAnsver(randomNamber1, randomNamber2)) === Number(answer)) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnsver(randomNamber1, randomNamber2)}'. Let's try again, ${name}!`);
        return;
      }
    }
    if (i === 3) { console.log(`Congratulations, ${name}!`); }
  };
  game();
};*/

import {brainGcd} from '/home/elena/frontend-project-44/src/games/brainGcd.js'

export default brainGcd