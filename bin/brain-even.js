import readlineSync from 'readline-sync';

export const brainEven = (name) => {
  console.log('Brain even');

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const game = () => {
    let result;
    let i = 0;
    for (i = 0; i < 3; i += 1) {
      const randomNamber = Math.floor(Math.random() * 100);

      const answer = readlineSync.question(`Question: ${randomNamber} \nYour answer:`);

      const anotherAnswer = () => {
        let anAns;
        if (answer === 'yes') {
          anAns = 'no';
        } else { anAns = 'yes'; }
        return anAns;
      };

      if ((randomNamber % 2 === 0 && answer === 'yes') || (randomNamber % 2 === 1 && answer === 'no')) {
        result = console.log('Correct!');
      } else {
        result = console.log(`'${answer}' is wrong answer ;(. Correct answer was '${anotherAnswer()}'. Let's try again, ${name}!`);
        break;
      }
    }
    if (i === 3) { console.log(`Congratulations, ${name}!`); }
    return result;
  };
  game();
};
