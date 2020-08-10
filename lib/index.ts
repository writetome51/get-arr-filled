// Faster, more efficient alternative to populating a new array using your own loop and
// adding to it with array.push()
// `getItemValue(index, arr)` returns the value to be assigned to `arr`[`index`]

export function getArrFilled(length, getItemValue: (index?, arr?) => any): any[] {
	let arr = new Array(length);
	let i = -1;

	// after creating array using `new Array(length)`, adding to array using `arr[i] = value`
	// instead of `arr.push(value)` is several milliseconds faster.

	while (++i < length) arr[i] = getItemValue(i, arr);
	return arr;
}
