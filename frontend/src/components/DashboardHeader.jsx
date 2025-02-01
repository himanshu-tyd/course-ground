import React from "react";
import { Bell } from "lucide-react";
import { getContextData } from "../context/AuthContexProvider";

const DashboardHeader = () => {
  const { role, user } = getContextData();


  return (
    <header className="flex items-center  ">
      <div className="flex items-center justify-between w-full ">
        <h2 className="text-lg font-semibold w-full text-center md:text-left ">
          {!role === "admin" ? "Admin" : `${user?.firstName}`} Dashboard
        </h2>



        <div className="flex items-center justify-end gap-4  w-full ">
          <Bell className="text-xl text-gray" />
          <img
            src={`https://randomuser.me/api/portraits/men/1.jpg`}
            width={40}
            height={40}
            className="rounded-full hover:cursor-pointer "
          />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
