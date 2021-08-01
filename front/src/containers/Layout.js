import React from "react";
import { Content, Sidebar, Header } from "./index";

const Layout = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="wrapper">
        <Header />
        <div className="c-body">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Layout;
