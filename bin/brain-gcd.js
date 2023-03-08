import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);

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

      const trueAnsver = (a, b) => {
        while (a !== b) {
          if (a > b) {
            a -= b;
          } else {
            b -= a;
          }
        }
        return a;
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

