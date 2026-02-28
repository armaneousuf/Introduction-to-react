import Student from './components/students'
import Language from './components/language'
import Players from './components/players'
import Todo from './components/todo'
import Practice from './components/practice'
import Practice2 from './components/practice2';
import './App.css'

function App() {
  return (
    <div className='flex'>
      <Practice />
      <Practice2/>
    </div>
  )
}






export default App;


// function App() {

//   // const todos = [
//   //   { id: 1, task: 'Learn React', isDone: true },
//   //   { id: 2, task: 'Revise JS', isDone: false },
//   //   { id: 3, task: 'Code for 2+ hours', isDone: true },
//   //   { id: 4, task: 'Push-ups', isDone: false },
//   //   { id: 5, task: 'Eat Healthy', isDone: true },
//   // ];

//   // return (
//   //   <div>
//   //     <h2>My ToDo lists</h2>
//   //     <ul>
//   //       {todos.map((t) => 
//   //       <Todo key={t.id} task={t.task} isDone={t.isDone}/>
//   //       )}
//   //     </ul>
//   //   </div>
//   // )



//     // <div style={{display:'flex', gap:'10px', flexWrap: 'wrap'}}>
//     //  <Student name='John' dept='Finance' hobby='Swimming'></Student>
//     //  <Student name='Idris' dept='Accounting' hobby='Reading'></Student>
//     //   <Student name='Lan' dept='CSE' hobby='Farming'></Student>
//     //   <Language level='Medium'></Language>
//     //   <Language level='Hard'></Language>
//     //   <Language level='Hard'></Language>
//     //   <Players name='Max Verstappen' team='Red Bull Racing' country='Netherlands' age={27} wins={54}></Players>
//     //   <Players name='Lewis Hamilton' team='Mercedes' country='United Kingdom' age={39} wins={103}></Players>
//     //   <Players name='Charles Leclerc' team='Ferrari' country='Monaco' age={26} wins={5}></Players>
//     //   <Players name='Lando Norris' team='McLaren' country='United Kingdom' age={24} wins={1}></Players>
//     //   <Players name='Fernando Alonso' team='Aston Martin' country='Spain' age={42} wins={32}></Players>
//     // </div>
  
// }

