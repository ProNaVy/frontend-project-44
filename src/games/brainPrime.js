import game from '../../bin/games.js';

const brainPrime = (name) => {
  console.log('Brain prime');
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const round = () => {
    const question = Math.floor(Math.random() * 100);

    const primeNumb = (num) => {
      if (num > 1) {
        for (let a = 2; a < num; a += 1) {
          if (num % a === 0) {
            return false;
          }
        }
        return true;
      }
      return null;
    };

    const trueAnsver = (primeNumb(question) === true ? 'yes' : 'no');

    return [question, trueAnsver];
  };

  game(round, name);
};
export default brainPrime;
