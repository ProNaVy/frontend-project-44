const arr = [];
const progres = Math.floor(Math.random() * 10);
console.log(progres);

const firstElement = Math.floor(Math.random() * 20);
let result = firstElement;
let i;
for (i = 0; i <= 10; i += 1) {
  result += progres;
  arr.push(result);
}
console.log(arr);

const ind = Math.floor(Math.random() * 10);
arr.splice(ind, 1, '..');
console.log(arr);
