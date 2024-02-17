function range(start, end, step=start > end ? -1:1) {
    //return [start, start+step, ..,end-step, end]
    let result = [];
    if (step > 0) {
	for (let i=start; i<=end; i+=step) result.push(i);	
   } else { 
       	for (let i=start; i>=end; i+=step) result.push(i);
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

console.log(sum(range(5, 2, -1)));
