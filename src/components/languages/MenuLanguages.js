import React, { useState } from "react";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import English from "../../assets/Language.png";
import VietNam from "../../assets/vietnam.png";
import Korean from "../../assets/south-korea.png";
const MenuLanguages = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const closeMenu = () => setIsMenuOpen(false);
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    closeMenu();
  };
  const getLanguageImage = () => {
    switch (selectedLanguage) {
      case "EN":
        return English;
      case "VN":
        return VietNam;
      case "KR":
        return Korean;
      default:
        return English;
    }
  };

  return (
    <div>
      <Menu
        placement="bottom-end"
        className="flex justify-end"
        open={isMenuOpen}
        handler={setIsMenuOpen}
      >
        <MenuHandler>
          <Button className="flex gap-[8.5px] max-w-[78px] h-[25px] w-full items-center justify-between p-0 shadow-none bg-transparent">
            <img
              src={getLanguageImage()}
              alt="languages"
              className="max-w-[25px] w-full h-[25px]"
            />
            <div className="text-black">{selectedLanguage}</div>{" "}
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-[12px] w-[16.5px] transition-transform text-black ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="max-w-[113px] min-w-0 w-full rounded-lg">
          <MenuItem
            onClick={() => handleLanguageChange("EN")}
            className={`max-w-[99px] h-[30px] p-0 text-center ${
              selectedLanguage === "EN"
                ? "bg-[#DFA128] text-white"
                : "text-[#3D3D3D]"
            }`}
          >
            English
          </MenuItem>
          <MenuItem
            onClick={() => handleLanguageChange("KR")}
            className={`max-w-[99px] h-[30px] p-0 text-center ${
              selectedLanguage === "KR"
                ? "bg-[#DFA128] text-white"
                : "text-[#3D3D3D]"
            }`}
          >
            한국어
          </MenuItem>
          <MenuItem
            onClick={() => handleLanguageChange("VN")}
            className={`max-w-[99px] h-[30px] p-0 text-center ${
              selectedLanguage === "VN"
                ? "bg-[#DFA128] text-white"
                : "text-[#3D3D3D]"
            }`}
          >
            Tiếng Việt
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default MenuLanguages;
