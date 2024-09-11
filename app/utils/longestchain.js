function longestConsecutiveChain(arr){
    if (arr.length === 0) return 0;

    let longestChain = 1;
    let currentChain = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] + 1) {
            currentChain++;
        } else if (arr[i] !== arr[i - 1]) {
            longestChain = Math.max(longestChain, currentChain);
            currentChain = 1;
        }
    }

    return Math.max(longestChain, currentChain);
}

const array = [3,4,2,5,4,5,6,7,6,7,8]
console.log(longestConsecutiveChain(array))