import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Stats from "./components/Stats";
import Revenue from "./components/Revenue";
import Activity from "./components/Activity";
import Traffic from "./components/Traffic";
import Growth from "./components/Growth";


export default function App(){
  const [sidebarOpen, setSidebarOpen] = useState(false); //closed by default

  return(
    <div className="flex min-h-screen bg-[#0f0f13] text-white">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <main className="p-4 lg:p-8">
          {/* Dashboard content */}
          <Stats />

        </main>
       
<div className="grid lg:grid-cols-2 md:flex gap-2 md:justify-center lg:justify-center" >
        <div className=" md:w-115 lg:w-240">
        <Revenue/>
        <Activity />
        </div>

        <div className="md:w-90">
        <Traffic />
        <Growth />
        </div>
</div> 
      </div>
      
    </div>
  )
}