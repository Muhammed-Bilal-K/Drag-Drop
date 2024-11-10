import React from "react";
import logoCompany from "@/assets/logoMain.png";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="w-[280px] bg-[#fcfcfc] h-[100vh]">
        <div className="flex items-center pl-[40px] pr-[50px] pt-2">
          <img src={logoCompany} alt="company logo" className="w-[80px] bg-[#fcfcfc]" />
          <h2 className="text-2xl font-bold text-blue-700 w-10">ProTasks</h2>
        </div>
        <div className="h-[1.5px] m-4 w-[90%] bg-[#dee6f0]"></div>
        <div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;
