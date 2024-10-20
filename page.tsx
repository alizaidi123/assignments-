import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>  
      <nav className=" flex flex-row w-full bg-slate-600 h-9 mt-4 items-center"> 
        <div className="bg-orange-500 w-10 h-7 ml-2"></div>
        <div className="flex ml-80 mr-12 w-2/3 justify-end">
          <div className="bg-red-400 w-11 h-7 float-left" ></div>
          <div className="bg-blue-400 w-11 h-7 float-left ml-2" ></div>
          <div className="bg-lime-400 w-11 h-7 float-left ml-2" ></div>
        </div>
      </nav>
    </header>

    <div className="flex w-1/4 bg-teal-300 border-solid border-black flex-row mt-40 mb-40 border-2 h-80 float-left ml-16 mr-28">
   </div>

   <div className="flex w-1/4 bg-violet-500 border-solid border-black flex-row ml-2 mt-40 mb-40 border-2 h-80 float-left mr-28"></div>
   <div className="flex w-1/4 bg-fuchsia-500 border-solid border-black flex-row ml-2 mb-40 mt-40 border-2 h-80 float-left mr-8"></div>

   <footer>  
      <nav className=" flex flex-row w-full h-9 bg-slate-600 items-center"> 
        <div className="bg-orange-500 w-10 h-7 ml-2"></div>
        <div className="flex ml-80 mr-12 w-2/3 justify-end">
          <div className="bg-red-400 w-11 h-7 float-left" ></div>
          <div className="bg-blue-400 w-11 h-7 float-left ml-2" ></div>
          <div className="bg-lime-400 w-11 h-7 float-left ml-2" ></div>
        </div>
      </nav>
    </footer>
    </div>
  );
}
