import "./task.css";

export default function Task5Content() {
  return (
    <div className="flex flex-col gap-20">
      <div className="description">
        <div className="question-container">
          <h2 className="text-2xl font-bold mb-1">Question:</h2>
          <p className="text-sm mb-4 text-gray-700">
            You are given an integer array nums and you have to return a new
            counts array where counts[i] is the number of smaller elements to
            the right of nums[i].
          </p>
        </div>
        <div className="answer-container">
          <h2 className="text-2xl font-bold mb-1">Solution:</h2>
          <p className="mb-3">
            You can also find the solution inside the util folder of the app
            directry of the project.
          </p>
          <pre className="code-block">
            <code className="text-sm">
              {`function countSmallerElements(arr) {
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
                `}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2"></div>
    </div>
  );
}
