import Count from './components/count'
import './App.css'

function App() {
  function handleBTN1() {
    alert("Clicked btn 1");
  }

  function handleBTN2(n) {
    alert(`The total is: ${n+5}`);
  }

  return (
    <div>
      <Count>0</Count>
     <button onClick={handleBTN1}>Click me</button>
      <button onClick={() => handleBTN2(5)}>Click me</button>
       
    </div>
  )
}

export default App
