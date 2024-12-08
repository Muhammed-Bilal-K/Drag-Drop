import React from 'react';

type MainbodyProps = {
  children?: React.ReactNode;
};

const Mainbody: React.FC<MainbodyProps> = ({ children }) => {
  return (
    <div className="ml-[280px] h-full pt-24" style={{ width: "calc(100% - 280px)" }}>
      {children}
    </div>
  );
};

export default Mainbody;
