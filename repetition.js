//Abstraction and higher functions: functions that takes functions as arguments or return them

function repeat(n, action) {
	for (let i=0; i<n; i++) action(i);
}

function greaterThan(n) {
    return m => m>n;
    }
// function that provide new type of control flow

function unless(test, then) {
    if (!test) then();
}

let labels = [];
repeat(3, i => labels.push(`Unit ${i+1}`));

//console.log(labels);
console.log(greaterThan(10)(11));

repeat(3, n => { unless(n%2 == 1, () => console.log(n, 'is even')); });
