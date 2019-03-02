//As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

//The input to the function will be an array of three distinct numbers (Haskell: a tuple).

//For example:gimme([2, 3, 1]) => 0

var gimme = function (inputArray) {
  var a = [];
  var babyArr = inputArray.concat(a);
  var sortedArr = babyArr.sort(function(a, b){
    return a - b;
  });
  var newArr = Number(sortedArr.splice(1, 1));
  var midArr = inputArray.indexOf(newArr);
  return midArr;
};

//Alternate solutions
var gimme = function (inputArray) {
  return inputArray.indexOf(inputArray.slice(0).sort(function(a,b) { return a-b; })[1]);
};

//Alternate Solution
var gimme = function (arr) {
  let originalArr = [...arr]
  let sortedArr = arr.sort((a,b) => a-b)
  return originalArr.indexOf(sortedArr[1])
};
