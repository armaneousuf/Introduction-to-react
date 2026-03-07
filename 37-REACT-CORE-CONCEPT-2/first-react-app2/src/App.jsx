// import PageCounter from './components/PageCounter';
// import Count from './components/count'
// import ScoreInAnOver from "./components/ScoreInAnOver";
// import Users from "./components/Users";
import "./App.css";
import Posts from './components/Posts';
import { Suspense } from "react";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

function App() {
  const postPromise = fetchPosts();
  return (
    <div>
      <Suspense fallback={<h3>Posts are loading...</h3>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense>
    </div>
  )
}


// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users/")
// .then(res => res.json())

// function App() {
//   return (
//     <div>
//       <ScoreInAnOver></ScoreInAnOver>
//       <Suspense fallback={<h3>Loading...</h3>}>
//         <Users fetchUsers={fetchUsers}></Users>
//       </Suspense>
//     </div>
//   );
// }

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
