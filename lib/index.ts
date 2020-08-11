// Fast, efficient function for populating a new array.
// `getItemValue(index, array)` returns the value to be assigned to `array[index]`

export function getArrFilled(length, getItemValue: (index?, array?) => any): any[] {
	let arr = new Array(length);
	let i = -1;

	// after creating array using `new Array(length)`, adding to array using `arr[i] = value`
	// instead of `arr.push(value)` is milliseconds faster.

	while (++i < length) arr[i] = getItemValue(i, arr);
	return arr;
}
