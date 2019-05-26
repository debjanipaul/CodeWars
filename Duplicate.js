/*
  Given an array of integers, find if the array contains any duplicate elements. The function should
  return true if any value appears at least twice in the array, and false if every element
  is distinct.
*/


function existsDuplicate(numbers){
    var counter=0;
    for(var i = 0; i < numbers.length; i++){

      if(numbers[i]===numbers[i + 1]){
        counter++;
      }
    }
    if(counter > 0){
      return true;
    }else{
      return false;
    }
}

existsDuplicate([4,6,7,7,1]);
existsDuplicate([4]);
existsDuplicate([]);
existsDuplicate([4,3,6,1,3,6,1,3,4,5,6,1,2,3,5,1,1]);
existsDuplicate([0])
