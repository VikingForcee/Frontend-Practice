import { useState } from "react"

function NavBar(){

  const [activeSection, setActiveSection] = useState("home");

  const navigateSection = (item) => {
    setActiveSection(item);
    const element = document.getElementById(item);
    if(element){
      element.scrollIntoView({behavior : 'smooth'});
    }
  }


  const navItems = [
    {id:"home", label:"Home"},
    {id:"price", label:"Pricing"},
    {id:"about", label:"About"},
    {id:"contact", label:"Contact"}
  ]

  return(
    <>
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="m-4">
              <h1 className="text-gray-100 text-3xl font-semibold">YAYA</h1>
            </div>

            {/* The Pallete (When on > MD Screens) */}
            <div className="hidden md:block">
              <div className="flex mr-4 space-x-5 items-baseline text-white">
                {/* Mapping navitems*/}
                {navItems.map((item) =>(
                  <button key={item.id} onClick={() => navigateSection(item.id)}
                        className={`transition-colors p-2 rounded-md duration-200
                              ${
                                activeSection === item.id 
                                ? 'text-teal-400 hover:text-teal-300 	border-gray-700 bg-gray-800 hover:bg-gray-700' 
                                : 'bg-neutral-900 border border-gray-800 text-gray-300 hover:text-gray-100 hover:bg-gray-800'
                              }
                        `}>
                          {item.label}
                        </button>
                ))} 
              </div>
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}
export default NavBar