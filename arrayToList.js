function arrayToList (array) {
    let list = null;
    for (let i=array.length-1; i>=0; i--) {
	list = {
	    value : array[i],
	    rest : list
	};
    }
    return list;
}

function listToArray (list) {
    let array = [];
    for (node=list; node; node=node.rest){
	array.push(node.value);}
    return array;
} 

function prepend (element, list) {
    return {element, rest: list};
}

function nth (list, n) {
    if (!list) return undefined;
    else if (n==0) return list.value;
    else return nth(list.rest, n-1);
}

let list1 = {value: 0, rest: {value:1, rest: {value:2, rest : null}}};
console.log(arrayToList([1, 2, 3]));
console.log(listToArray(list1));
console.log(prepend(5, list1));
console.log(nth(list1), 2);
