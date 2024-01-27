import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="justify-center items-center flex flex-col">
      <div>
        <p>Count is {count}</p>
      </div>
      <div className="flex flex-row gap-10">
        <button onClick={() => setCount(count - 1)}>Decrement count</button>
        <button onClick={() => setCount(count + 1)}>Increment count</button>
      </div>
    </div>
  );
}

export default App;
