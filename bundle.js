"use strict";

var arr = [1, 2, 3, 4, 5, 6, 8];
var newArr = arr.map(function (item, index) {
  return item * 2;
});
console.log(newArr);
