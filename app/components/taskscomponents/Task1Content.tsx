// app/components/taskcomponent/Task1Content.tsx

"use client"; // Ensures this is a client-side component
import { useState } from "react";
import './task.css'

export default function Task1Content() {
  const [input, setInput] = useState("");
  const items = [
    { name: "Apple", category: "Fruit" },
    { name: "Banana", category: "Fruit" },
    { name: "Cherry", category: "Fruit" },
    { name: "Date", category: "Fruit" },
    { name: "Elderberry", category: "Berry" },
    { name: "Fig", category: "Fruit" },
    { name: "Grape", category: "Berry" },
  ];
  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(input.toLowerCase()) ||
      item.category.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <div className="flex flex-col gap-10">
      <div className="description">
      <h2 className="text-2xl font-bold mb-1">Search Filter Component</h2>
        <ul className=" list-disc list-outside text-sm text-gray-500 text-justify">
          <li>
            Search Input: Add a text input for users to enter their search
            query.
          </li>
          <li>
            Filter List: Display a list of items that match the search query.
          </li>
          <li>Case Insensitive: Ensure the search is case insensitive.</li>
        </ul>
      </div>

      <div className="flex flex-col items-end gap-2">
        <input
          type="text"
          className="searchbutton"
          placeholder="Search by Name or Category"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Update query state on input change
        />
        <table className=" w-full border-collapse border border-slate-300">
          <thead>
            <tr className="border text-left tableheading">
              <th className="p-3">S.N.</th>
              <th className="">State</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, index) => (
              <tr key={index}>
                <td className="p-3">{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
