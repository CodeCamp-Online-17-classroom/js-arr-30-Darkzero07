const array = ["apple", "banana", "orange"];
const array2 = array.map((arr) => {
  return arr.toUpperCase();
});
console.log(array2);
// result: ["APPLE", "BANANA", "ORANGE"]

const array = [1, 3, 4, 5, 6, 7, 8];
const array2 = array.map((item) => {
  if (item % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
});
console.log(array2)
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]

const array = [1, -3, 2, 8, -4, 5];
const array2 = array.map((item) => {
    if (item < 0) {
        return item * -1
    }else {
        return item
    }
})
console.log(array2)
// result: [1, 3, 2, 8, 4, 5]
