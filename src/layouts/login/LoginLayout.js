import React from "react";
import LoginCard from "../../components/card/LoginCard";
const LoginLayout = () => {
  const backgroundLogin = require("../../assets/background-login.png");
  return (
    <div>
      <div
        className="h-screen w-screen object-cover fixed -z-50 flex justify-center items-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${backgroundLogin})` }}
      >
        <LoginCard />
      </div>
    </div>
  );
};
export default LoginLayout;
