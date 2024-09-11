function countSmallerElements(arr) {
    const counts = new Array(arr.length).fill(0);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                counts[i]++;
            }
        }
    }

    return counts;
}

const array = [5, 2, 6, 1];
console.log(countSmallerElements(array));