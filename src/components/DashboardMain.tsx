import React from "react";
import InputFeilds from "./InputFeilds";

function DashboardMain() {
  return (
    <div className=" w-[62vw] bg-slate-300 items-center justify-center flex flex-col">
      <div className=" border-2 border-black p-20 rounded-lg">
        <form className=" " >
            <InputFeilds 
            inputLabel="rjho"
            /> 
            <InputFeilds 
            inputLabel="rjho"
            />
            <button>Fetch Details</button>
        </form>
        
      </div>
    </div>
  );
}

export default DashboardMain;
