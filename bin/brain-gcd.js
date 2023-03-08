import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name?');

const brainGcd = () => {
  console.log('brain-gcd');

  console.log('Find the greatest common divisor of given numbers.');
  const game = () => {
    let i = 0;
    for (i = 0; i < 3; i += 1) {
      const randomNamber1 = Math.floor(Math.random() * 100);
      const randomNamber2 = Math.floor(Math.random() * 100);
      const randomGcd = (`${randomNamber1} ${randomNamber2}`);

      const answer = readlineSync.question(`Question: ${randomGcd} \nYour answer:`);

      const trueAnsver = (num1, num2) => {
        while (num1 !== num2) {
          if (num1 > num2) {
            num1 -= num2;
          } else {
            num2 -= num1;
          }
        }
        return num1;
      };

      if (Number(trueAnsver(randomNamber1, randomNamber2)) === Number(answer)) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnsver(randomNamber1, randomNamber2)}'. Let's try again, ${userName}!`);
        return;
      }
    }
    if (i === 3) { console.log(`Congratulations, ${userName}!`); }
  };
  game();
};

export default brainGcd;

