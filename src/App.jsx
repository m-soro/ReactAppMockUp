import { useState } from "react";
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";
import "./App.css";

function App() {
  //state
  const [currentEmployee, setCurrentEmployee] = useState({
    name: "James King",
    title: "President and CEO",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
  });

  // 1. Define the main function
  // function as prop
  function handleUserClick(employeeObject) {
    setCurrentEmployee(employeeObject);
  }

  //2.
  return (
    <div className="App">
      <HomePage handleUserClick={handleUserClick} />
      <EmployeePage employee={currentEmployee} />
    </div>
  );
}

export default App;
