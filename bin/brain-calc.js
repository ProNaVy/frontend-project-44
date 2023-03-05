import readlineSync from 'readline-sync';
let userName = readlineSync.question('May I have your name?');

const brainCalc = () => {
  console.log('Brain even');
  
  console.log('What is the result of the expression?');
  const game = () => {
    let result;
    let i = 0;
    for (i = 0; i < 3; i += 1) {
      const randomNamber = Math.floor(Math.random() * 100);
     
      const answer = readlineSync.question(`Question: ${randomNamber} \nYour answer:`);

      const anotherAnswer = () => {
        let anAns;
        if (answer === 'yes') { anAns = 'no'; 
      } else { anAns = 'yes'; }
        return anAns;
      };

      if ((randomNamber % 2 === 0 && answer === 'yes') || (randomNamber % 2 === 1 && answer === 'no')) {
        result = console.log('Correct!');
      } else {
        result = console.log(`'${answer}' is wrong answer ;(. Correct answer was '${anotherAnswer()}'. Let's try again, ${userName}!`);
        break;
      }
      }
      if (i === 3){console.log(`Congratulations, ${userName}!`);}
    return result;
    
    };
  game();
  
 };

export default brainEven;