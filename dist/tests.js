import {getArrFilled} from './index.js';
import {arraysMatch} from '@writetome51/arrays-match';

// Create new function to test getArrFilled():

// `increment` must be negative if you want the count to go down.
function getCount(start, end, increment) {
	if (increment === 0) throw new Error('incrementor cannot be 0');

	// So first iteration of callback will work.
	// Also needed to calculate `difference`.
	start += -(increment);
	let difference = (start <= end ? end - start : start - end);
	let length = Math.floor(difference / Math.abs(increment));

	return getArrFilled(length, () => start += increment);
}


if (
	arraysMatch(getCount(1, 6, 1), [1, 2, 3, 4, 5, 6])
) console.log('test 1 passed');
else console.log('test 1 FAILED');


if (
	arraysMatch(getCount(10, 5, -1), [10, 9, 8, 7, 6, 5])
) console.log('test 2 passed');
else console.log('test 2 FAILED');


if (
	arraysMatch(getCount(1, 10, 2), [1, 3, 5, 7, 9])
) console.log('test 3 passed');
else console.log('test 3 FAILED');


if (
	arraysMatch(getCount(10, 1, -2), [10, 8, 6, 4, 2])
) console.log('test 4 passed');
else console.log('test 4 FAILED');


let arr = getArrFilled(0);
if (arraysMatch(arr, [])) console.log('test 5 passed');
else console.log('test 5 FAILED');


arr = getArrFilled(6, (i, arr) => (i + 1) * 2);
if (arraysMatch(arr, [2, 4, 6, 8, 10, 12])) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Should error if negative num passed as first arg:
let errTriggered = false;
try {
	arr = getArrFilled(-1, (i) => i);
} catch (e) {
	errTriggered = true;
}
if (errTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');


// should error if float passed as first arg:
errTriggered = false;
try {
	arr = getArrFilled(1.1, (i) => i);
} catch (e) {
	errTriggered = true;
}
if (errTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');


// should error if no function passed as second arg:
errTriggered = false;
try {
	arr = getArrFilled(1); // no second arg passed.
} catch (e) {
	errTriggered = true;
}
if (errTriggered) console.log('test 9 passed');
else console.log('test 9 FAILED');

