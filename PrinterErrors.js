// //In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
//
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
//
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
//
// You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
//
// The string has a length greater or equal to one and contains only letters from ato z.
// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"
//
// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"

function printerError(s) {

  var arr = s.split('');

  var newArr = [];

  for(var i = 0; i < arr.length; i++) {

    if(arr[i].charAt(arr[i]) === "n"|| arr[i].charAt(arr[i]) === "o" ||
        arr[i].charAt(arr[i]) === "p" || arr[i].charAt(arr[i]) === "q" ||
        arr[i].charAt(arr[i]) === "r" || arr[i].charAt(arr[i]) === "s" ||
        arr[i].charAt(arr[i]) === "t" || arr[i].charAt(arr[i]) === "u" ||
        arr[i].charAt(arr[i]) === "v" || arr[i].charAt(arr[i]) === "w" ||
        arr[i].charAt(arr[i]) === "x" || arr[i].charAt(arr[i]) === "y"||
        arr[i].charAt(arr[i]) === "z"){

        newArr.push(arr[i]);
    }
  }

  return (newArr.length + '/' + arr.length);

}
printerError("aaabbbbmmxyz");


//Alternate solutions - 1

function printerError(s) {
  var m = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() > 109 || s[i].charCodeAt() < 97) {
      m++;
    }
  }
  return m + '/' + s.length;
}

//Alternate solutions - 2
function printerError(s) {
    return (s.match(/[n-z]/g)||[]).length + '/' + s.length;
}
