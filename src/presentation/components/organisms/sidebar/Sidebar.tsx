import React from "react";
import logoCompany from "@/assets/logoMain.png";
import Menu from "../../molecule/Menu/Menu";
import TableChartIcon from "@mui/icons-material/TableChart";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="w-[280px] bg-[#fcfcfc] h-[100vh] fixed">
        <div className="flex items-center pl-[40px] pr-[50px]">
          <img
            src={logoCompany}
            alt="company logo"
            className="w-[80px] bg-[#91a0b5]"
          />
          <h2 className="text-2xl font-bold text-blue-700 w-10">ProTasks</h2>
        </div>
        <div className="h-[1.5px] m-4 w-[90%] bg-[#dee6f0]"></div>
        <div className="px-6">
          <h1 className="font-medium text-slate-500 text-sm">MENU</h1>
          <div className="mt-7">
            <Menu label="DashBoard">
              <TableChartIcon className="ml-2" />
            </Menu>
            <Menu label="Tasks">
              <TableChartIcon className="ml-2" />
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
