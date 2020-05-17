/* 
Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?

If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".
*/

function balance(left, right) {
    let nLeft = 0
    let nRight = 0
    l = left.split('');
    r = right.split('')

    for (let i = 0; i < l.length; i++) {
        if (l[i] === '!') {
            nLeft = nLeft + 2
        } else if (l[i] === '?') {
            nLeft = nLeft + 3
        }
    }


    for (let i = 0; i < r.length; i++) {
        if (r[i] === '!') {
            nRight = nRight + 2
        } else if (r[i] === '?') {
            nRight = nRight + 3
        }
    }

    if (nLeft > nRight) {
        return ("Left")
    } else if (nLeft < nRight) {
        return ("Right")
    } else {
        return 'Balance'
    }

}
balance("!!", "??");