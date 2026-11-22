import { useState } from "react";
export default function CharCounter() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        className="border-red-400 border-2"
        type="text"
        value={text}
        maxLength={25}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Character Count: {text.length}/25</p>
      <button className="border-red-400 border-2" onClick={() => setText("")}>
        Clear
      </button>
      {text.length > 20 && <p className="text-red-500">Texts too long!</p>}
    </div>
  );
}
