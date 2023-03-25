import readlineSync from 'readline-sync';

export const brainCalc = (name) => {
  console.log('Brain calc');

  console.log('What is the result of the expression?');
  const game = () => {
    let i = 0;
    for (i = 0; i < 3; i += 1) {
      const arr = ['+', '-', '*'];
      const randomArr = Math.floor(Math.random(arr) * arr.length);
      const randomNamber1 = Math.floor(Math.random() * 100);
      const randomNamber2 = Math.floor(Math.random() * 100);
      const randomCalc = (`${randomNamber1}${arr[randomArr]}${randomNamber2}`);

      const answer = readlineSync.question(`Question: ${randomCalc} \nYour answer:`);

      const trueAnsver = () => {
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

      if (trueAnsver() === Number(answer)) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnsver()}'. Let's try again, ${name}!`);
        return;
      }
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  };
  game();
};
