import { Card, List, ListItem } from "@material-tailwind/react";

import IconDashboard from "../../assets/icon-dashboard.png";
import IconCalendar from "../../assets/icon-calendar.png";
import IconCourse from "../../assets/icon-course.png";
import IconClass from "../../assets/icon-class.png";
import IconTutor from "../../assets/icon-teacher.png";
import IconStudent from "../../assets/icon-graduation.png";
import IconBill from "../../assets/icon-money.png";
import IconSetting from "../../assets/icon-setting.png";
import { Link, useLocation } from "react-router-dom";
const Sidebar = ({ showSidebar }) => {
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard/", icon: IconDashboard, label: "Dashboard" },
    { path: "/dashboard/calendar", icon: IconCalendar, label: "Calendar" },
    { path: "/dashboard/course", icon: IconCourse, label: "Course Management" },
    { path: "/dashboard/class", icon: IconClass, label: "Class Management" },
    { path: "/dashboard/tutor", icon: IconTutor, label: "Tutor Management" },
    {
      path: "/dashboard/student",
      icon: IconStudent,
      label: "Student Management",
    },
    { path: "/dashboard/bill", icon: IconBill, label: "Bill Management" },
    { path: "/dashboard/settings", icon: IconSetting, label: "Settings" },
  ];
  return (
    <>
      {
        <Card
          className={`h-screen w-full pt-[20px] shadow-[4px_0px_4px_0px_#00000040] shadow-black/25 rounded-none ${
            showSidebar ? "max-w-[248px] px-[14px]" : "max-w-[0] p-0"
          } overflow-hidden transition-all duration-200 ease-in-out`}
        >
          <List className={`min-w-full p-0 ${showSidebar ? "" : "hidden"}`}>
            {menuItems.map(({ path, icon, label }) => (
              <ListItem
                key={label}
                className={`group m-0 p-0 ${
                  location.pathname === path ? "bg-[#DFA128]" : ""
                }`}
              >
                <Link
                  to={path}
                  className="flex gap-[10px] w-full py-[14px] pl-[17px] items-center"
                >
                  <img src={icon} alt={label} className="w-5 h-5" />
                  <span
                    className={`text-[16px] font-normal leading-6 text-left ${
                      location.pathname === path
                        ? "text-white"
                        : "text-[#949CA9]"
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              </ListItem>
            ))}
          </List>
        </Card>
      }
    </>
  );
};
export default Sidebar;
