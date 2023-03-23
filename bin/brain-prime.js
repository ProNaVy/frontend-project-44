import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);

export const brainPrime = () => {
  console.log('Brain prime');
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const game = () => {
    let i = 0;
    for (i = 0; i < 3; i += 1) {
      // инициализация числа

      const question = Math.floor(Math.random() * 100);

      // проверка числа на удовлетворение условия
      const primeNumb = (num) => {
        if (num > 1) {
          for (let a = 2; a < num; a += 1) {
            if (num % a === 0) {
              return false;
            }
          }
          return true;
        }
        return null;
      };

      // правильный ответ

      const trueAnsver = (primeNumb(question) === true ? 'yes' : 'no');

      const answer = readlineSync.question(`Question: ${question} \nYour answer:`);

      // запуск игры

      if (trueAnsver === answer) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnsver}'. Let's try again, ${userName}!`);
        return;
      }
    }
    if (i === 3) { console.log(`Congratulations, ${userName}!`); }
  };
  game();
};
