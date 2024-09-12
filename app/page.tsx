"use client";
import { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import Task1Content from "./components/taskscomponents/Task1Content";
import Task2Content from "./components/taskscomponents/Task2Content";
import Task4Content from "./components/taskscomponents/Task4Content";
import "./home.css";
import Task3Content from "./components/taskscomponents/Task3Content";
import Task5Content from "./components/taskscomponents/Task5Content";

export default function Home() {
  const [activeTask, setActiveTask] = useState("Task 1"); // Default to 'Task 1'

  const renderContent = () => {
    switch (activeTask) {
      case "Task 1":
        return <Task1Content />;
      case "Task 2":
        return <Task2Content />;
      case "Task 3":
        return <Task3Content />;
      case "Task 4":
        return <Task4Content />;
      case "Task 5":
        return <Task5Content />;
      default:
        return null;
    }
  };

  return (
    <div className="container overflow-y-scroll  item-center mx-auto my-14">
      <div className="box flex overflow-hidden w-full">
        {/* Sidebar */}
        <Sidebar setActiveTask={setActiveTask} activeTask={activeTask} />

        {/* Main Content */}
        <div className="  container m-10 bg-white">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
