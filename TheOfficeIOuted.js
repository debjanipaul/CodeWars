/* 
	Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

*/



function outed(meet, boss){
  
  var arr = (Object.keys(meet));
  var noOfPpl = arr.length;
  var sum = 0;

  for(var val in meet){
    
    if(val === boss){
      meet[boss] = 2 * meet[boss];
    }
    
    if(meet.hasOwnProperty(val)){
      sum += meet[val];
    }
  }
 
  var happiness = sum/noOfPpl;
  
  if(happiness <= 5){
    return 'Get Out Now!';
  }else{
    return 'Nice Work Champ!';
  }
}

outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 
       'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura');