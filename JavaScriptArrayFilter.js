
/* 
	JavaScript Arrays support a filter function (starting in JavaScript 1.6).
	 Use the filter functionality to complete the function given.
	 getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

function getEvenNumbers(numbersArray){
  
  var newArr = numbersArray.filter(function(arr) {
    return arr % 2 === 0;
  })

  return newArr;
}
getEvenNumbers([2,4,5,6]);