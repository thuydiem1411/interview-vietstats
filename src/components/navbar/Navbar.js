import React from "react";
import {
  Avatar,
  Button,
  IconButton,
  Navbar as MaterialNavbar,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  PowerIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import IconHiddenSidebar from "../../assets/icon-hidden-sidebar.png";
import AvatarImage from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import MenuLanguages from "../languages/MenuLanguages";

const Navbar = ({ showSidebar, setShowSidebar }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const profileMenuItems = [
    { path: "/login", icon: UserCircleIcon, label: "My Profile" },
    { path: "/login", icon: PowerIcon, label: "Sign Out" },
  ];
  return (
    <MaterialNavbar
      fullWidth
      shadow={false}
      className="mx-0 max-w-screen py-0 px-[30px] h-20 border-b-2 border-b-[#DFA128] flex items-center justify-between bg-opacity-0"
    >
      <div>
        <img
          src={IconHiddenSidebar}
          alt="IconHiddenSidebar"
          className="w-6 h-5 cursor-pointer"
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
        />
      </div>
      <div className="flex justify-center items-center gap-4">
        <MenuLanguages />
        <IconButton variant="text" color="white" className="w-11 h-11">
          <BellIcon className="h-7 w-7 text-[#DFA128]" />
        </IconButton>
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <MenuHandler>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
            >
              <Avatar
                variant="circular"
                alt="tania andrew"
                className="border border-[#DFA128] w-10 h-10"
                src={AvatarImage}
              />
              <div className="size-[14px] leading-[17.5px] w-full normal-case">
                User ID
              </div>
              <ChevronDownIcon
                className={`h-8 w-8 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                } text-[#DFA128]`}
              />
            </Button>
          </MenuHandler>
          <MenuList className="p-1">
            {profileMenuItems.map(({ path, label, icon }, key) => {
              const isLastItem = key === profileMenuItems.length - 1;
              return (
                <Link to={path}>
                  <MenuItem
                    key={label}
                    onClick={closeMenu}
                    className={`flex items-center gap-2 rounded ${
                      isLastItem
                        ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                        : ""
                    }`}
                  >
                    {React.createElement(icon, {
                      className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                      strokeWidth: 2,
                    })}
                    <Typography
                      as="span"
                      variant="small"
                      className="font-normal"
                      color={isLastItem ? "red" : "inherit"}
                    >
                      {label}
                    </Typography>
                  </MenuItem>
                </Link>
              );
            })}
          </MenuList>
        </Menu>
      </div>
    </MaterialNavbar>
  );
};

export default Navbar;
