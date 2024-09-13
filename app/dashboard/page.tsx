"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from "react";
import { getLoggedInUser } from '../utils/auth';

type User = {
    id: number;
    username: string;
    name: string;
};

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
    const router = useRouter();


    useEffect(() => {
      const token = localStorage.getItem('token');
      const user = getLoggedInUser();
        if (user){
            setLoggedInUser(user);
        }
      if (!token) {
        router.push('/login');
      } else {
        setIsLoading(false);
      }


    }, [router]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <nav className="bg-white shadow-lg p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
        <img src="/vrit-tech-logo.jpg" alt="VritTech Logo" onClick={() => router.push('/')} className="h-12 cursor-pointer" />
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, {loggedInUser? loggedInUser.name: "Guest"}</span>
            <button className="bg-red-500 text-white px-4 py-2 rounded"onClick={() => {
        localStorage.removeItem('token');
        router.push('/');
      }}>Logout</button>
          </div>
        </div>
      </nav>

          <div className="flex-grow flex flex-wrap gap-5 px-20 py-12"  >
            <div className="bg-white py-4 ps-16 pe-24 rounded-lg shadow-md h-32">
              <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
              <p className="text-3xl font-semibold ">1,200</p>
            </div>

            <div className="bg-white py-4 ps-16 pe-24 rounded-lg shadow-md h-32">
              <h2 className="text-lg font-semibold text-gray-700">Active Projects</h2>
              <p className="text-3xl font-bold ">18</p>
            </div>

            <div className="bg-white py-4 ps-16 pe-24 rounded-lg shadow-md h-32">
              <h2 className="text-lg font-semibold text-gray-700">Pending Tasks</h2>
              <p className="text-3xl font-bold ">5</p>
            </div>
      </div>
      <footer className="bg-white bottm p-4 text-center shadow-lg h-18">
        <span className="text-gray-500">&copy; 2024 Dashboard App</span>
      </footer>
    </div>
  );
}
