//In this kata you are required to, given a string, replace every letter with its position in the alphabet.

//If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
    var str = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
    ];
    var newText = text
        .replace(/\s+/g, "")
        .toLowerCase()
        .split("");
    var answer = [];

    for (var i = 0; i < newText.length - 1; i++) {
        for (j = 0; j < str.length - 1; j++) {
            if (newText[i] === str[j]) answer.push(j + 1);
        }
    }

    return answer.join(" ");
}
alphabetPosition("The sunset sets at twelve o' clock.");