function reverseArray(array) {
    let result = [];
    for (let value of array) result.unshift(value); 
    return result;
}

function reverseArrayInPlace(array) {
    lengthOf = array.length;
    for (let i=0; i<Math.floor(lengthOf/2); i++) {
	old = array[i];
	array[i] = array[lengthOf-1-i];
	array[lengthOf-1-i] = old;
    }
    return array;
}



console.log(reverseArray([1, 5, 8, 7]));
console.log(reverseArrayInPlace([1, 5, 3, 8, 7]));
