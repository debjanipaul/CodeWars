/* 
    Your job is to build a method called "mirror" which will decrypt the messages. Resulting messages
    will be in lowercase. To add more secrecy, you are to accept a second optional parameter, 
    telling you which letters or characters are to be reversed; if it is not given, consider the 
    whole alphabet as a default.To make it a bit more clear: e.g. in case of "abcdefgh" as the second 
    optional parameter, you replace "a" with "h", "b" with "g" etc. .

*/

function mirror(inpString, decodeKey = "abcdefghijklmnopqrstuvwxyz") {
    var outString = "";
    var inpStringArr = inpString.toLowerCase().split("");
    var decodeKeyArr = decodeKey.toLowerCase().split("");
    var decodeKeyArrLth = decodeKeyArr.length;

    for (var i = 0; i < inpStringArr.length; i++) {
        arrIndx = decodeKeyArr.indexOf(inpStringArr[i]);
        replChar = inpStringArr[i];

        if (arrIndx > -1) {
            replChar = decodeKeyArr[decodeKeyArrLth - (arrIndx + 1)];
        }
        outString = outString.concat(replChar.toString());
    }
    return outString;
}

mirror("Welcome home");
mirror("hello", "abcdefgh");