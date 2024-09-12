import "./task.css";

export default function Task3Content() {
  return (
    <div className="flex flex-col gap-20">
      <div className="description">
        <div className="question-container">
          <h2 className="text-2xl font-bold mb-1">Question:</h2>
          <p className="text-sm mb-4 text-gray-700">
            Write a function that takes an array of positive integers and
            returns the length of the longest chain of consecutive numbers. A
            chain is defined as a sequence of numbers in the array where each
            number is exactly one more than the previous number in the sequence,
            and the sequence can be in any order in the array. Also explain the
            time complexity and space complexity.
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
              {`function longestConsecutiveChain(arr){
    if (arr.length === 0) return 0;

    let longestChain = 1; //setting initial value of longest chain
    let currentChain = 1; // setting initial value of current chain

    for (let i = 1; i < arr.length; i++) { //looping through the array from index 1 to the end
        if (arr[i] === arr[i - 1] + 1) { //checking if the current element is equal to the previous element + 1
            currentChain++; // increment of current chain
        } else if (arr[i] !== arr[i - 1]) {
            // setting longest chain to the maximum of the current chain and the longest chain
            longestChain = Math.max(longestChain, currentChain);
            currentChain = 1; // reseting the current chaain
        }
    }

    return Math.max(longestChain, currentChain); // returning the longest chain
}

const array = [3,4,2,5,4,5,6,7,6,7,8]
console.log(longestConsecutiveChain(array))
                `}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2"></div>
    </div>
  );
}
