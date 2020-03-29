/* Reverse every other word in a given string, then return the string. 
Throw away any leading or trailing whitespace, while ensuring there is 
exactly one space between each word. Punctuation marks should be treated 
as if they are apart of the word in this kata. */

function reverse(str) {
    let a = str.split(' ')

    for (let i = 0; i < a.length; i++) {
        if (i % 2 !== 0) {
            let b = a[i].split('').reverse().join('');
            str = str.replace(a[i], b);
        }

    }
    return (str.trim())
}

reverse("Did it work?");
reverse("I really hope it works this time...");
reverse("Reverse this string, please!");