# getArrFilled\<T\>(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;length: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getItemValue: (index?, array?: T[]) => T<br>): T[]

Fast, efficient function for populating a new array.  
Set the `length` of the new array, and the function executes  
`array[index] = getItemValue(index, array)`  
for each `index` in `array`.


## Examples
```js
// Creates array of 5 numbers where each number is 1 higher than 
// its index:
let numbers = getArrFilled(5, (i) => i + 1);
console.log(numbers);
// [1,2,3,4,5]


// Create function that retrieves elements from array by their indexes:
export function getByIndexes(indexes, array) {
    return getArrFilled(indexes.length, (i) => array[indexes[i]]);
}

console.log(getByIndexes([1,3,5], ['a','b','c','d','e','f']));
// ['b','d','f']


// Use getArrFilled() to build the fibonacci sequence and retrieve one of 
// its numbers:
function getFibonacci(n) {
    let sequence = getArrFilled(
        n,
        // first 2 numbers in sequence will be 1
        (i, arr) => i > 1 ? arr[i-2] + arr[i-1] : 1 
    ); 
    // return the requested number:
    return sequence[n - 1];
}

console.log(getFibonacci(3));
// 2
console.log(getFibonacci(6));
// 8
```

## Installation
```bash
npm i  @writetome51/get-arr-filled
```

## Loading
```js
import { getArrFilled } from '@writetome51/get-arr-filled';
```
