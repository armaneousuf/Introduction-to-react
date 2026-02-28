import { useState } from "react"

export default function PageCounter() {
    const [pages, setPages] = useState(0);
    const handlePages = () => {
        const newPages = pages + 1;
        setPages(newPages);
    }

    return (
        <div>
            <h3>Book</h3>
            <h2>Pages: {pages}</h2>
            <button onClick={handlePages}>Add Pages</button>
        </div>
    )
}