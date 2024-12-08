import React from "react";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <div className="fixed ml-[280px] h-[90px] border-b-2" style={{ width: "calc(100% - 280px)" }}>
        <div className="flex justify-between">
          <div>
            <h1>Tasks</h1>
          </div>
          <div className="flex">
            <button>+ create</button>
            <h3>Message</h3>
            <h3>Notification</h3>
            <h1>Settings</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
