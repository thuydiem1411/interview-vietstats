import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";

const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="flex justify-center bg-gradient-to-b from-[#FFF6E9] to-[#FFFFFF]">
      <div className="max-w-[2113px] w-full">
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className="flex">
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <div className="w-full h-full px-6 py-7">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
