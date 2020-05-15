/*
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
*/

var encryptThis = function(text) {
    text = text.split(' ');

    let newStr = []

    for (let i = 0; i < text.length; i++) {

        text[i] = text[i].split('')

        let a = text[i][0].charCodeAt()
        let x = text[i][1]

        text[i][1] = text[i][text[i].length - 1];
        text[i][text[i].length - 1] = x

        text[i] = text[i].slice(1)


        let d = text[i].join('')

        let str = a + d
        newStr.push(str);

    }

    console.log(newStr.join(' '))
}

encryptThis("A wise old owl lived in an oak")
encryptThis("A")
encryptThis("The more he saw the less he spoke")
encryptThis("The less he spoke the more he heard")