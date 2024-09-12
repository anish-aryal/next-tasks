function longestConsecutiveChain(arr){
    if (arr.length === 0) return 0;

    let longestChain = 1; //setting initial value of longest chain
    let currentChain = 1; // setting initial value of current chain

    for (let i = 1; i < arr.length; i++) { //looping through the array from index 1 to the end
        if (arr[i] === arr[i - 1] + 1) { //checking if the current element is equal to the previous element + 1
            currentChain++; // increment of current chain
        } else if (arr[i] !== arr[i - 1]) {
            longestChain = Math.max(longestChain, currentChain); // setting longest chain to the maximum of the current chain and the longest chain
            currentChain = 1; // reseting the current chaain
        }
    }

    return Math.max(longestChain, currentChain); // returning the longest chain
}

const array = [3,4,2,5,4,5,6,7,6,7,8]
console.log(longestConsecutiveChain(array))