// by amit
import { useEffect, useState } from "react";
import User from "./User";

function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=10&seed=abc')
    .then(response => response.json())
    .then(data => setUser(data.results))
  }
  ,[])

  const getDob = (dob) => {
    const dateOfBirth = new Date(dob);
    const year = dateOfBirth.getFullYear();
    const month = dateOfBirth.getMonth() + 1; // Month is zero-based
    const day = dateOfBirth.getDate();
    const dobString = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
    return dobString;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 min-h-[100vh] bg-gray-200 ">
      {
        user?.map((user, index) => (
          <div key={index} className="max-w-[600px] mt-5">
          <User  user={user} getDob={getDob} />
          </div>
        ))
      }
    </div>
  );
}

export default App;
