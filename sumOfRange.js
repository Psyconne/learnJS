function range(start, end, step=1) {
    //return [start, start+step, ..,end-step, end]
    let result = [];
    for (let i=start; i<=end; i=i+step) {
	result.push(i);
    }
    return result;
}

function sum(arrayOfNum) {
    let result = 0;
    for (let i=0; i<arrayOfNum.length; i++) {
	result += arrayOfNum[i];
    }
    return result;
}

console.log(sum(range(1, 10, 2)));
