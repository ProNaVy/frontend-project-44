import readlineSync from 'readline-sync';



export const brainProgression = (name) => {
  console.log('Brain progression');
  console.log('What number is missing in the progression?');
  const game = () => {
    let i = 0;
    for (i = 0; i < 3; i += 1) {
      // инициализация массива с прогрессией

      const arr = [];
      const progres = Math.floor(Math.random() * 10);

      const firstElement = Math.floor(Math.random() * 10);
      let result = firstElement;
      for (let a = 0; a <= 10; a += 1) {
        result += progres;
        arr.push(result);
      }
      const ind = Math.floor(Math.random() * 10);
      arr.splice(ind, 1, '..');

      const question = arr;
      // правильный ответ

      const trueAnsver = (ind === 0 ? firstElement + progres : arr[ind - 1] + progres);

      const answer = readlineSync.question(`Question: ${question} \nYour answer:`);
      // запуск игры

      if (Number(trueAnsver) === Number(answer)) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnsver}'. Let's try again, ${name}!`);
        return;
      }
    }
    if (i === 3) { console.log(`Congratulations, ${name}!`); }
  };
  game();
};
