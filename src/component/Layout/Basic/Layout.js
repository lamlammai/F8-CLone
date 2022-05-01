import React from "react";
import Footer from "../Footer/Footer";
import HeaderLayout from "../Header/HeaderLayout";
import Sidelbar from "../Sidebar/Sidebar";
import "./Layout.scss";
function Layout({ children, navClassList, navhidden }) {
  return (
    <>
      <div className="Layout">
        <HeaderLayout navClassList={navClassList} />
        <div className="container-wrapper">
          <div className="content-left">
            <Sidelbar navhidden={navhidden} />
          </div>
          <div className="content-right">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Layout;
