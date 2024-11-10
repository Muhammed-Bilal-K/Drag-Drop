import Sidebar from "@/presentation/components/organisms/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Sidebar />
      <>
        <Outlet />
      </>
    </>
  );
};

export default HomePage;
