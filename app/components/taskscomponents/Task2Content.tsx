import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import "./task.css";

//typescript schema for the user object
type User = {
  id: number;
  name: string;
  email: string;
};

const UserList = () => {
  const [users, setUsers] = useState([]); // Initial value as an empty array
  const [loading, setLoading] = useState(true); //creating loading state
  const [error, setError] = useState(""); //creating error state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(   //axios request to the api to fetch the data of users
          "https://jsonplaceholder.typicode.com/users"
        ); //making api call and getting response
        console.log("response", response.data);
        setUsers(response.data); //setting the response data in the users state
      } catch (err) {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (error) return <div>{error}</div>; //checking if there is an error

  if (loading) return <div>Loading...</div>; // checking if the data is loading

  return (
    <div className="flex flex-col  gap-10">
      <div className="description">
        <h2 className="text-2xl font-bold mb-1">Data Fetch API integration</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {users.map((user: User) => (
          <div
            key={user.id}
            className="flex items-center p-4 userCard border rounded-lg shadow-md"
          >
            <div className="flex-1">
              <h2 className="text-l font-bold">{user.name}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <div className="ml-4">
              <Image
                src={`https://randomuser.me/api/portraits/women/${user.id}.jpg`}
                alt={user.name}
                width={56} // corresponding to w-14
                height={56} // corresponding to h-14
                className="rounded-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
