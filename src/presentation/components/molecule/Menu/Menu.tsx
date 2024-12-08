import React from "react";

type MenuProps = {
  label: string;
  color?: string;
  children?: React.ReactNode;
};

const Menu: React.FC<MenuProps> = ({ label , children }) => {
  return (
    <>
      <div className="bg-[#3772ff] px-[10px] py-[13px] text-white font-medium rounded-xl my-1">
        {children}
        <button className="ml-4">{label}</button>
      </div>
    </>
  );
};

export default Menu;
