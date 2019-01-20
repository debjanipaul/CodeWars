function decode(code, n) {

    var letterCode1 = 'abcdefghijklmnopqrstuvwxyz';
    var newKey = n.toString().split('');
    var newArr = [];
    var counter = 0;
    var newWord = ''

    for (var i = 0; i <= code.length - 1; i++) {

        newArr.push(code[i] - newKey[counter]);

        counter++;

        if (counter === newKey.length) {
            counter = 0;
        }

        newWord += letterCode1.charAt(newArr[i] - 1);

    }

    return newWord;

}