import React, {useState} from "react"

function App() {
  const  [result, setResult] = useState("1234");

  return (
    <div className="min-h-screen w-screen flex flex-col items-center gap-10 px-3 py-10">
      <h1 className="text-4xl text-pink-800 font-bold">Calculator</h1>
      <div >
        <input className="bg-slate-900/80 rounded-md p-4 w-full 
        text-2xl font-semibold text-white text-right 
        tracking-wider border-2 border-pink-200 shadow-inner 
        shadow-current" type="text" value={result} disabled />
      </div>
    </div>
  )
}

export default App
