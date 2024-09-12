function countSmallerElements(arr) {
    // creating a count array of length equal to arr with all values set to 0
    const counts = new Array(arr.length).fill(0);

    // looping through the array (arr)
    for (let i = 0; i < arr.length; i++) {

        /* looping through the array to get the next item from the index i and setting it to j
        and increasing the value of j by 1 if it is less to the length of the array(arr) */
        for (let j = i + 1; j < arr.length; j++) {
            //this ensures that the current item always constant and only the value of j changes
            // comparing the current item to the next item
            if (arr[j] < arr[i]) {
                counts[i]++; // increasing the value of the number in the i index of count array
            }
        }
    }

    return counts; // returning the count array
}

const array = [5, 2, 6, 1];
console.log(countSmallerElements(array));