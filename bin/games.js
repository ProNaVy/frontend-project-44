import readlineSync from 'readline-sync';

const game = (question, trueAnswer, userName) => {
  let i = 0;
  for (i = 0; i < 3; i += 1) {
    const answer = readlineSync.question(`Question: ${question} \nYour answer:`);

    if (Number(trueAnswer) === Number(answer)) {
      console.log('Correct!');
          } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. Let's try again, ${userName}!`);
      return;
    }
  }
  if (i === 3) { console.log(`Congratulations, ${userName}!`); }
};

export default game();
