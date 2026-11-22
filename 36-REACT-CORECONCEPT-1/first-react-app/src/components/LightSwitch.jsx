import { useState } from "react";
export default function LightSwitch() {
  const [isOn, setIsOn] = useState(false);

  function toggleBtn() {
    setIsOn((prev) => !prev);
  }

  return (
    <div className={isOn ? "bg-yellow-300 text-black" : "bg-gray-800 text-white"}>
      {isOn ? <h1>The light is On</h1> : <h1>The light is Off</h1>}
      <button
        onClick={toggleBtn}
        className={`p-3 ${isOn ? "bg-red-800" : "bg-green-800"}`}
      >
        {isOn ? "turn Off" : "turn On"}
      </button>
    </div>
  );
}
