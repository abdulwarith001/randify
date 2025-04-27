import React from "react";
import Button from "./Button";
const Header = () => {
  return (
    <header className="flex items-center justify-between shadow pb-4">
      <h1 className="text-black-500 text-xxl ml-6 mt-4 text-3xl font-semibold">
        Randify
      </h1>

      <Button buttonText="Login with spotify" />
    </header>
  );
};

export default Header;
