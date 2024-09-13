import React from "react";
import { FiUser } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineReportProblem } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";






function Dashboard() {
  return (
    <div className=" w-[20vw] bg-gray-300  mx-8 justify-between flex flex-col">
        <div>

      <div className=" flex items-center py-4 justify-center font-bold border-b-4">
        <FiUser className=" text-3xl mr-3" />
        <p>OM KUTE</p>
      </div>
      {/* Items */}
      <div className=" flex items-center py-4 justify-start pl-5 hover:bg-slate-400 font-bold border-b-2 ">
        <MdSpaceDashboard className=" text-3xl mr-3 text-blue-500" />
        <p className="text-blue-800">Dashboard</p>
      </div>
      <div className=" flex items-center py-4 justify-start pl-5 hover:bg-slate-400 font-bold border-b-2 ">
        <GrStatusGood className=" text-3xl mr-3" />
        <p>Status</p>
      </div>
      <div className=" flex items-center py-4 justify-start pl-5 hover:bg-slate-400 font-bold border-b-2 ">
        <MdOutlineReportProblem className=" text-3xl mr-3" />
        <p>Griverence</p>
      </div>
      <div className=" flex items-center py-4 justify-start pl-5 hover:bg-slate-400 font-bold border-b-2 ">
        <IoIosNotificationsOutline className=" text-3xl mr-3" />
        <p>Notification</p>
      </div>
        </div>
        <div className=" flex items-center py-4 justify-start pl-5 hover:bg-slate-400 font-bold border-t-2 ">
        <CiLogout className=" text-3xl mr-3" />
        <p>Logout</p>
      </div>
     
    </div>
  );
}

export default Dashboard;