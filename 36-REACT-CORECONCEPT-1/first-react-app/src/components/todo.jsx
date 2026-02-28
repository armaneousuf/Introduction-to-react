// Using ternary operator
function Todo({ task, isDone }) {
  return (
    <div className="global">
        <li
          style={{
            textDecoration: isDone ? "line-through" : "none",
            color: isDone ? "green" : "black",
          }}
        >
          {isDone ? "✅" : "⏳"} {task}
        </li>
    </div>
  );
}

export default Todo;
