const arr = [1, 2, 3, 4, 5, 6, 8];

const newArr = arr.map((item, index) => {
  return item * 2;
});

console.log(newArr);

const sum = arr.reduce((total, next) => {
  return total + next;
});

console.log(sum);
