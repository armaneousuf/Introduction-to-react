// import PageCounter from './components/PageCounter';
// import Count from './components/count'
import ScoreInAnOver from "./components/ScoreInAnOver";
import Users from "./components/Users";
import "./App.css";
import { Suspense } from "react";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users/")
.then(res => res.json())

function App() {
  return (
    <div>
      <ScoreInAnOver></ScoreInAnOver>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
    </div>
  );
}

export default App;

/* function App() {
  function handleBTN1() {
    alert("Clicked btn 1");
  }

  function handleBTN2(n) {
    alert(`The total is: ${n+5}`);
  }

  return (
    <div>
      <PageCounter></PageCounter>
      <Count>0</Count>
     <button onClick={handleBTN1}>Click me</button>
      <button onClick={() => handleBTN2(5)}>Click me</button>
       
    </div>
  )
} */
