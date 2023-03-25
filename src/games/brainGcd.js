import readlineSync from 'readline-sync';
import {game} from '/home/elena/frontend-project-44/bin/games.js'


export const brainGcd = (name) => {  

  console.log('Brain gcd');
  console.log('Find the greatest common divisor of given numbers.');
  const round = () => {
      const randomNamber1 = Math.floor(Math.random() * 100);
      const randomNamber2 = Math.floor(Math.random() * 100);
      const question = (`${randomNamber1} ${randomNamber2}`);

        const trueAnsver1 = (num1, num2) => {
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
const trueAnsver = trueAnsver1(randomNamber1, randomNamber2)
return [question, trueAnsver]
    }
   
    game(round , name);
};

