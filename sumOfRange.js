function range(start, end, step=1) {
    //return [start, start+step, ..,end-step, end]
    let result = [];
    if (start < end) {
	for (let i=start; i<=end; i=i+step) result.push(i);	
   } else { 
       	for (let i=end; i<=start; i=i-step) result.unshift(i);
    }
	return result;
}

function sum(array) {
    let result = 0;
    for (let value of array) {
	result += value;
    }
    return result;
}

console.log(sum(range(5, 10, 1)));
