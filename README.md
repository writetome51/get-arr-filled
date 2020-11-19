# getArrFilled(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;length: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getItemValue: (index?, array?) => any<br>): any[]

Fast, efficient function for populating a new array.  
`getItemValue(index, array)` returns the value to be assigned to each `array[index]`.


## Examples
```js
export function getByIndexes(indexes, array) {
    return getArrFilled(indexes.length, (i) => array[indexes[i]]);
}

console.log(getByIndexes([1,3,5], ['a','b','c','d','e','f']));
// ['b','d','f']


function getFibonacci(n) {
    // Use getArrFilled() to build the fibonacci sequence:
    let sequence = getArrFilled(
        n, 
        (i, arr) => i > 1 ? arr[i-2] + arr[i-1] : 1
    ); 
    // return the requested number:
    return sequence[n - 1];
}

console.log(getFibonacci(3));
// 2
console.log(getFibonacci(6));
// 8

//  Here we use getArrFilled() to create a count of numbers going up or down:

function getCount(start, end, increment) {
    // `increment` must be negative if you want the count to go down.
    
    // So first iteration of callback will work.  Also needed to calculate `difference`.
    start += -(increment);
    let difference = (start <= end ? end - start : start - end);
    let length = Math.floor(difference / Math.abs(increment));
    
    return getArrFilled(length, () => start += increment);
}

console.log(getCount(1, 10, 1));
// [1,2,3,4,5,6,7,8,9,10]

console.log(getCount(20, 10, -2));
// [20,18,16,14,12,10]
```

## Installation
```bash
npm i  @writetome51/get-arr-filled
```

## Loading
```js
import { getArrFilled } from '@writetome51/get-arr-filled';
```
