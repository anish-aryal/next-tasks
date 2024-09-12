"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./task.css";
import { getLoggedInUser } from "@/app/utils/auth";

type User = {
  id: number;
  username: string;
  name: string;
};

export default function Task4Content() {
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("password");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsUserLoggedIn(true);
    }

    const user = getLoggedInUser();
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const { token } = await res.json();
      localStorage.setItem("token", token);
      router.push("/dashboard");
    } else {
      alert("Login failed");
    }
  };

  if (isUserLoggedIn) {
    return (
      <div className="flex gap-24 flex-col h-full items-center mt-20">
        <img src="/vrit-tech-logo.jpg" alt="VritTech Logo" className="h-16" />
        <div className="content flex flex-col items-start justify-center">
          <p className="mb-3 text-l text-blue-600 italic">{loggedInUser? loggedInUser.name: "Guest"},</p>
          <h1 className="text-2xl font-semibold mb-4">
            You are already logged in
          </h1>
          <button
            className="loginbtn hover:scale-y-105 text-white w-full"
            onClick={() => router.push("/dashboard")}
          >
            Take me to my Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full items-center justify-center bg-white">
      <div className="logincard flex flex-col gap-14 max-w-md px-10 pt-14 pb-24 w-full border-1">
        <div className="flex justify-center ">
          <img src="/vrit-tech-logo.jpg" alt="VritTech Logo" className="h-16" />
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember_me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me ?
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full loginbtn hover:scale-y-105 text-white"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
