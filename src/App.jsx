import { useEffect, useState } from 'react';
import './App.css';
import EmployeeCard from './components/EmployeeCard';

function App() {
  const [employee, setEmployee] = useState();

  const getEmployee = () => {
    // Send the request
    fetch("https://randomuser.me/api?nat=en")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.results[0]);
        console.log(data.results[0]);
      });
  };

  return (
    <div className='App'>
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  );
}

export default App
