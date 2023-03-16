import readlineSync from 'readline-sync';
import game from '.bin/brain-progression.js'
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);

export const brainProgression = () => {

console.log('Brain progression');
console.log('What number is missing in the progression?');

//инициализация массива с прогрессией

let arr = [];
const progres = Math.floor(Math.random() * 10);

const firstElement = Math.floor(Math.random() * 10);
let result = firstElement;
let i;
for (i = 0; i <= 10; i += 1) {
  result += progres;
  arr.push(result);
};
const ind = Math.floor(Math.random() * 10);
arr.splice(ind, 1, '..');

const question = arr

// получение правильного ответа

const trueAnsver1 = () => (ind === 0 ? firstElement + progres : arr[ind - 1] + progres);
const trueAnsver = trueAnsver1(arr)

game()
};

