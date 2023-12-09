// Create a custom hook
import { useEffect, useRef, useState } from "react";
// import useConsoleLog from "./components/useConsoleLog";

// Lab - Fetch data
// import { useEffect } from "react";

export default function App () {

  // Lab - Create your own custom hook, usePrevious
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }

  /*
  // Create a custom hook
  const [count, setCount] = useState(0);
  useConsoleLog(count);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }
  */

  /*
  // Lab - Fetch data
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?result=1")
      .then ((response) => response.json())
      .then ((data) => setUser(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  */

  return (

    // Lab - Create your own custom hook, usePrevious
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>

    /*
    // Create a custom hook
    <div>    
      <h1>Count: {count}</h1>,
      <button onClick={increment}>Plus 1</button>,
    </div>
    */
  );

  /*
  // Lab -Fetch data
  return Object.keys(user).length > 0 ? (
    <div style={{padding: "40px"}}>
      <h1>Customer Data</h1>
      <h2>Name: {user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt="" />
    </div>        
    ) : (
      <h1>Data pending...</h1>  
    );
  */
}

// export default App;

// Lab - Create your own custom hook, usePrevious
function usePrevious(val) {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref.current;
}