import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="justify-center items-center flex flex-col px-10 py-20  bg-blue-600 text-white max-w-[450px] gap-10 rounded-lg lg:m-10 md:m-5 m-2 hover:bg-gradient-to-t from-purple-500 to-blue-400">
      <div>
        <p className="text-4xl">Count is {count}</p>
      </div>
      <div className="flex flex-row gap-5">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-gradient-to-r from-blue-400 to-purple-600 px-5 py-3 rounded-full"
        >
          Decrement count
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className=" bg-gradient-to-r from-green-300 to-purple-600 px-5 py-3 rounded-full"
        >
          Increment count
        </button>
      </div>
    </div>
  );
}

export default App;
