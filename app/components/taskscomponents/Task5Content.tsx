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
            <code>
              {`function countSmallerElements(arr) {
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
                `}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2"></div>
    </div>
  );
}
