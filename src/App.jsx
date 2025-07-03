import NavBar from "./Components/NavBar"
import Corousel from "./Components/Corousel"
import Pricing from "./Components/Pricing"

function App(){
  return (
    <>
        <main id="home" className="bg-blue-100 w-full min-h-screen">
          <NavBar />
          <Corousel />
          <div id="price"><Pricing /></div>
        </main> 
    </>
  )
}
export default App