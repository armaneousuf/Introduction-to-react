export default function UserCard(props) {
    const { name, age, city } = props.user;
    return (
      <div className="card">
        {/* <h2>Hello, {props.name}</h2>
            <p>Your age is, {props.age}</p> */}
        <h1>My name is: {name}</h1>
        <p>I am: {age}</p>
        <p>And I live in: {city}</p>
      </div>
    );
}