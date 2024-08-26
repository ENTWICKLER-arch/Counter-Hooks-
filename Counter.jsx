import React from "react";
export default function Counter(){
  const [count,fn] =  React.useState(0);
  function inc(){
    fn (count+1);
  }
  function dec(){
    fn (count-1);
  }
    
    return(
        <div className=" flex items-center justify-center h-screen w-screen bg-gradient-to-br from-indigo-500 to bg-pink-500">
        <div className="bg-white text-center rounded-3xl p-7" >
            <h2 className="font-bold text-3xl text-pink-600 mt-10">Count :{count} </h2>
            <div className="flex gap-8 justify-center text-blue-700 font-bold text-3xl mt-10">
                <button onClick={dec} className="bg-pink-400 rounded-lg p-5 hover:bg-red-400 tracking-[8px]">--</button>
                <button onClick={inc} className="bg-pink-400 rounded-lg p-5 hover:bg-red-400">++</button>
            </div>
        </div>
        </div>
    );
};