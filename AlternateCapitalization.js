// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']


function capitalize(s) {

    var eveUpper = "";
    var oddUpper = "";

    for (var i = 0; i < s.length; i++) {

        if (i % 2 === 0) {
            eveUpper += s[i].toUpperCase();
            oddUpper += s[i];
        } else {
            eveUpper += s[i];
            oddUpper += s[i].toUpperCase();
        }
    } //end of for loop

    console.log([eveUpper, oddUpper]); //return in an array
}

capitalize("abcdef");