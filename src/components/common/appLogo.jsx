import React from "react";

const AppLogo = () => {
  return (
    <img
      src={process.env.PUBLIC_URL + "todoLogo.svg"}
      className="w-24 mb-12 mx-auto"
      alt="App logo"
    />
  );
};

export default AppLogo;
