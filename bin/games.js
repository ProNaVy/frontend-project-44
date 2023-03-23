import readlineSync from 'readline-sync';

export const game = (question, trueAnswer, userName) => {
  const answer = readlineSync.question(`Question: ${question} \nYour answer:`);

  if (Number(trueAnswer) === Number(answer)) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. Let's try again, ${userName}!`);
  }
};
