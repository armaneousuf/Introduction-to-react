import { useState } from "react"

export default function Count() {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    } 


    const counterStyle = {
        border: '2px solid yellow',
        padding: '25px'
    }
    return (
        <div style={counterStyle}>
            <h1>Counter: {count}</h1>
            <button onClick={handleCount}>Add</button>
        </div>
    )
}