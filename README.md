# getArrFilled(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;length: number,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getItemValue: (index?, array?) => any<br>): any[]

Fast, efficient function for populating a new array.  
`getItemValue(index, array)` returns the value to be assigned to `array[index]`


## Examples
```js

// `increment` must be negative if you want the count to go down.

function getCount(start, end, increment) {
	if (increment === 0) throw new Error('incrementor cannot be 0');
	start += -(increment); // so first iteration of callback will work.

	let difference = (start <= end ? end - start : start - end);
	return getArrFilled(
		Math.floor(difference / Math.abs(increment)),
		() => start += increment
	);
}


function getCountup(start, end, increment = 1) {
	if (increment < 0) increment = -(increment);
	return getCount(start, end, increment);
}


function getCountdown(start, end, increment = -1) {
	if (increment > 0) increment = -(increment);
	return getCount(start, end, increment);
}

console.log(getCountdown(1, 10));
// [1,2,3,4,5,6,7,8,9,10]

console.log(getCountdown(10, 1));
// [10,9,8,7,6,5,4,3,2,1]
```

## Installation
```bash
npm i  @writetome51/....
```

## Loading
```js
import {  } from '@writetome51/....';
```
