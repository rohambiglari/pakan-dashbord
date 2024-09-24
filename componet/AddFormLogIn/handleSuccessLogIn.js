import React, { useState } from "react";
import NavarDashbor from "./navbarhandlelogin/navbarhandlelogin";
import Header from "./header/header";
import { ItemProvider } from "../usecontext/usecontext";

const HandleSuccessLogIn = () => {
  return (
    <ItemProvider>
      <NavarDashbor />
      <Header />
    </ItemProvider>
  );
};

export default HandleSuccessLogIn;
