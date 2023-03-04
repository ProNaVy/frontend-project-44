import readlineSync from 'readline-sync';

const userName = prompt('May I have your name?');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".')
for (i=0; i <= 3; i++) {
  
const randomNamber = Math.floor(Math.random()*100)
const num = console.log(`Question: ${randomNamber}`)
const answer = prompt("Your answer:")

    if (randomNamber%2 === 0 && answer === 'yes'|| randomNamber%2 === 1 && answer === 'no') {
        result = console.log('Correct!');
    i +=1}
   else {result = console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`)
    i===0}
}
        return result