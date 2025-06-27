import { useState } from "react"

function App(){
  const [counter, setCounter] = useState(0);
  
  const increment = () =>{
    setCounter(counter + 1);
  }
  return (
    <>
      <header className="w-full h-20 bg-blue-800 text-2xl text-white">
        <span className="flex pl-5 pt-5 pb-5 h-full font-extrabold">
          <h2 className="border-4 border-green-400 rounded-xl">
            <a href="#footer" className="scroll-smooth p-3"> 1.a Yo </a>
          </h2> 
          <h2 className="border-4 border-green-400 ml-6 rounded-xl">
            <a href="#main1" className="scroll-smooth p-3">1.b Yo </a>
          </h2>
          <h2 className="border-4 border-green-400 ml-6 rounded-xl">
            <a href="#main2" className="p-3">2.c Yo </a>
          </h2>
        </span>
      </header>

      <main className="w-full h-250">
         <segment id="main1" className="grid grid-cols-2 h-1/2 w-full bg-amber-100 border-2 border-amber-700">
              <div className="flex bg-amber-100 justify-center items-center">
                <h2 className="">Yo</h2>
              </div>
              <div className="flex bg-amber-200 justify-center items-center">
                <h2 className="">Mo</h2>
              </div>
              <div className="flex bg-amber-300 justify-center items-center">
                <h2 className="">Lo</h2>
              </div>
              <div className="flex bg-amber-400 justify-center items-center">
                <h2 className="">To</h2>
              </div>
         </segment>
      </main>

      <footer className="w-full h-200 bg-red-300">
        <div id ="footer" className="flex">
          <button onClick={increment} className="p-5 rounded-xl bg-black text-white">
            Counter : {counter}
          </button>
        </div>
      </footer>
    </>
  )
}
export default App