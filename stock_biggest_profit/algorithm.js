/* 
Initial:
    1. pick the first two numbers
    2. min = the smallest and max = biggest
always:
    1. for each number if it is lower than min then new min's value will be equal to that nummber
    2.  
*/

// let arr = [1000, 2000, 50, 15, 1, 24, 12, 3000];
let arr = [1000, 2000, 50, 15, 1, 2, 3, 24, 12, 3000];
let bottoms = [];
let tops = [];
let profits = [];

// defining the bottoms
for (i = 0; i < arr.length; i++) {
    if (i === 0 && arr[i] < arr[i+1]) {
        bottoms.push({ value: arr[0], time: 0 });
    } else if (i === arr.length-1 && arr[i] < arr[i-1]) { // no of use in our case because we don't care if the price gone down after biggest profit made
        bottoms.push({ value: arr[i], time: i });
    } 
    if (arr[i] < arr[i+1] && arr[i] < arr[i-1]) {
        bottoms.push({value: arr[i], time: i});
    }
}

// defining the tops
for (j = 0; j < arr.length; j++) {
    if (i === 0 && arr[j] > arr[j+1]) { // no of use in our case because we cannot go back in time
        tops.push({ value: arr[0], time: 0 });
    } else if (j === arr.length-1 && arr[j] > arr[j-1]) { // no of use in our case because we don't care if the price gone down after biggest profit made
        tops.push({ value: arr[j], time: j });
    } 
    if (arr[j] > arr[j+1] && arr[j] > arr[j-1]) {
        tops.push({value: arr[j], time: j});
    }
}

// defining the profits
for (b = 0; b < bottoms.length; b++) {
    for (t = 0; t < tops.length; t++) {
        if (bottoms[b].time < tops[t].time && (tops[t].value - bottoms[b].value) > 0) {
            profits.push(tops[t].value - bottoms[b].value);
        }
    }
}

profits.sort((a, b) => { return b - a; });

console.log(bottoms);
console.log(tops);
console.log(profits);
console.log(profits[0]);



// bots
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i+1]) {
//         bottoms.push({value: arr[i], time: i});
//     }
// }


// tops
// for (j = 0; j < bottoms.length; j++) {
//     if (bottoms[j].time === 0) {
//         tops.push({value: arr[bottoms[j].time + 1], time: bottoms[j].time + 1});
//     } else if (bottoms[j].time === (arr.lenght - 1)) {
//         tops.push({value: arr[bottoms[j].time - 1], time: bottoms[j].time - 1});
//     } else {
//         tops.push({value: arr[bottoms[j].time + 1], time: bottoms[j].time + 1});
//         tops.push({value: arr[bottoms[j].time - 1], time: bottoms[j].time - 1});
//     }
// }