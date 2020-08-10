// Faster, more efficient alternative to populating a new array using your own loop and
// adding to it with array.push()
// `callback(index, arr)` returns the value to be assigned to `arr`[`index`]
export function getArrFilled(length, callback) {
    let arr = new Array(length);
    let i = -1;
    // after creating array using `new Array(length)`, adding to array using `arr[i] = value`
    // instead off `arr.push(value)` is several milliseconds faster.
    while (++i < length)
        arr[i] = callback(i, arr);
    return arr;
}
