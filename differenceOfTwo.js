/*he objective is to return all pairs of integers from a given 
collection of integers that have a difference of 2.

The result should be sorted in ascending order.

The input will consist of unique values. The order of the integers in 
the input collection should not matter. */


function twosDifference(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[i] - input[j] === 2) {
                arr.push([input[j], input[i]])
            }
        }

    }
    arr.sort(function(a, b) {
        return (a[0] - b[0]);
    });
    console.log(arr)
}
twosDifference([1, 2, 3, 4]);
twosDifference([4, 1, 2, 3]);
twosDifference([1, 23, 3, 4, 7]);
twosDifference([4, 3, 1, 5, 6]);
twosDifference([1, 3, 4, 6]);
twosDifference([1, 3, 10, 12, 14, 6, 8, 5]);