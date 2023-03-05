import readlineSync from 'readline-sync';

export const userName = readlineSync.question('May I have your name?');

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  console.log(userName);
  console.log(`Hello, ${userName}!`);
};
