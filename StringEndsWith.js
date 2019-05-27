//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
    var newStr = str.slice(str.length - ending.length, str.length);

    return newStr === ending ? true : false;
}

solution("abc", "bc");