// Landing.jsx - Handles the overall page structure
import { GlobeComponent } from "./Globe"

export const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-20 h-screen bg-black w-full relative">
   
        
        <h1 className="text-8xl relative z-20 md:text-5xl lg:text-8xl font-bold text-center text-black dark:text-white font-sans tracking-tight mt-10">
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          </div>
        </h1>
        <GlobeComponent />
      
    </div>
  )
}