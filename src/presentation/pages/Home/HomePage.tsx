import Header from "@/presentation/components/molecule/Header/Header";
import Mainbody from "@/presentation/components/organisms/mainbody/Mainbody";
import Sidebar from "@/presentation/components/organisms/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Mainbody>
        <Outlet />
      </Mainbody>
    </>
  );
};

export default HomePage;
