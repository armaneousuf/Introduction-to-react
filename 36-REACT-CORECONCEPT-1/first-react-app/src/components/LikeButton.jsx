import { useState } from "react";
export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  function increase() {
    setLikes((prev) => prev + 1);
  }

  function decrease() {
    if(likes <= 0) return
    setLikes((prev) => prev - 1);
  }

  function reset() {
    setLikes(0);
  }

  return(
    <div>
        <h1>{likes}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        {likes > 0 && <button onClick={reset}>reset</button>}
    </div>
  )
}
