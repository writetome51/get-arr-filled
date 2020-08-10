import {getArrFilled} from './index.js';


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


console.log(getCountdown(20, 1.5));
