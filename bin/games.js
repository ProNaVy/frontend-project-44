import readlineSync from 'readline-sync';

export const game = (round, name) => {
  let i = 0;
  for (i = 0; i < 3; i += 1) {
  const [question, trueAnsver] = round()
  const answer = readlineSync.question(`Question: ${question} \nYour answer:`);
  
  if (Number(trueAnsver) !== Number(answer)) {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnsver}'. Let's try again, ${name}!`)
  return
  } 
  console.log('Correct!');
  }
if (i === 3) { console.log(`Congratulations, ${name}!`); }
};
