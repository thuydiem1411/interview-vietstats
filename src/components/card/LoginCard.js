import React from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import GirlwithLaptop from "../../assets/girl-with-laptop.png";
import MenuLanguages from "../languages/MenuLanguages";
import { Link } from "react-router-dom";
const LoginCard = () => {
  return (
    <div className="relative max-w-[880px] h-[486px] bg-white z-10 rounded-3xl flex w-full shadow-lg overflow-hidden max-lg:mx-10 ">
      <div className="flex-1 bg-white max-lg:mx-7">
        <div className="flex justify-end pt-[40px] max-md:pr-2">
          <MenuLanguages />
        </div>
        <div className="flex flex-wrap justify-center pt-[10px] max-md:flex max-md:flex-col max-md:items-center">
          <span className="text-3xl font-bold text-center tex-[#3D3D3D]">
            Sign In
          </span>
          <form className="mt-8 mb-2 max-w-[384px] h-[228px] w-full">
            <div className="mb-1 flex flex-col gap-5">
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-6 text-base text-[#3D3D3D]"
              >
                User ID
              </Typography>
              <Input
                placeholder="Enter your ID"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 max-w-[384px] w-full h-[40px] rounded mt-1"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-6 text-base text-[#3D3D3D]"
              >
                Password
              </Typography>
              <Input
                type="password"
                placeholder="Enter your password"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 max-w-[384px] w-full h-[40px] rounded mt-1"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Link to="/dashboard/" className="flex justify-center">
              <Button
                className="mt-[40px] tracking-[3px] bg-[#DFA128] rounded-[20px] shadow-[0px_4px_4px_0px_#00000040_inset] h-[40px]"
                fullWidth
              >
                SIGN IN
              </Button>
            </Link>
          </form>
        </div>
      </div>

      <div
        className="flex-1 bg-[#DFA128] relative -ml-12 max-md:hidden  "
        style={{
          clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="absolute bottom-0 right-0 p-8">
          <img
            src={GirlwithLaptop}
            alt="Illustration"
            className="h-[228px] max-w-[291px] mb-[63px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
