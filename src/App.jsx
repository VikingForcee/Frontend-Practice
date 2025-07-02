import NavBar from "./Components/NavBar"
import Corousel from "./Components/Corousel"
import NavBarTailwind from "./Components/NavBarTailwind"

function App(){
  return (
    <>
        <main id="home" className="bg-blue-100 w-full min-h-screen">
          <NavBar />
          {/* <NavBarTailwind /> */}
          {/* <Corousel /> */}
        </main> 
    </>
  )
}
export default App