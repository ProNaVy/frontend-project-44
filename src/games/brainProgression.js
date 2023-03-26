import game from '../../bin/games.js';

const brainProgression = (name) => {
  console.log('Brain progression');
  console.log('What number is missing in the progression?');

  const round = () => {
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

    const question = arr.join(' ');
    // правильный ответ

    const trueAnsver = (ind === 0 ? firstElement + progres : arr[ind - 1] + progres);

    return [question, trueAnsver];
  };

  game(round, name);
};
export default brainProgression;
