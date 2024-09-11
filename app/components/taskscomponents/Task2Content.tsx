import React, { useEffect, useState } from "react";
import axios from "axios";
import './task.css'

type User = {
  id: number;
  name: string;
  email: string;
};

const UserList = () => {
  const [users, setUsers] = useState([]); // Initial value as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response.data)
        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col  gap-10">
      <div className="description">
        <h2 className="text-2xl font-bold mb-1">Search Filter Component</h2>
        <ul className="list-disc list-outside text-sm text-gray-500 text-justify">
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
        <table className="w-full border-collapse border border-slate-300">
          <thead>
            <tr className="border text-left tableheading">
              <th className="p-3">S.N.</th>
              <th className="">Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User, index) => (
              <tr key={user.id}>
                <td className="p-3">{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
