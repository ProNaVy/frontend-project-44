import readlineSync from 'readline-sync';
let userName = readlineSync.question('May I have your name?');

const brainCalc = () => {
  console.log('Brain calc');
  
  console.log('What is the result of the expression?');
  const game = () => {
    let result;
    let i = 0;
    for (i = 0; i < 3; i += 1) {
      const arr = ["+", "-", "*"]
      const randomArr = Math.floor(Math.random(arr) * arr.length);
      const randomNamber1 = Math.floor(Math.random() * 100);
      const randomNamber2 = Math.floor(Math.random() * 100);
      const randomCalc = (`${randomNamber1}${arr[randomArr]}${randomNamber2}`)
     
      const answer = readlineSync.question(`Question: ${randomCalc} \nYour answer:`);

      const trueAnsver = (randomCalc) => {
        let result
        if (arr[randomArr]=== '+') {
          result = randomNamber1 + randomNamber2
        }else if  (arr[randomArr]=== '-') {
          result = randomNamber1 - randomNamber2
        } else {
          result = randomNamber1 * randomNamber2
        }
        return result
        };

      if (trueAnsver === answer) {
        result = console.log('Correct!');
      } else {
        result = console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnsver()}'. Let's try again, ${userName}!`);
        break;
      }
      }
      if (i === 3){console.log(`Congratulations, ${userName}!`);}
    return result;
    
    };
  game();
  
 };

export default brainCalc;