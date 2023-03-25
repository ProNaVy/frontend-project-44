import { game } from '../../bin/games.js';

export const brainEven = (name) => {
  console.log('Brain even');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const round = () => {
    const question = Math.floor(Math.random() * 100);

    const trueAnsver = ((question % 2 === 0) ? 'yes' : 'no');

    return [question, trueAnsver];
  };

  game(round, name);
};
