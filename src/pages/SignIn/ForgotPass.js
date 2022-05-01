import React from "react";
import "./SignIn.scss";
import { Link } from "react-router-dom";
import ForgotPass from "./Component/FormForgotPass/Forgotpass";
import logo from "../../utils/logo.png";
function Forgot() {
  document.title = "Quên mật khẩu";

  return (
    <>
      <div className="SignIn-wrapper">
        <div className="Modal-SignIn">
          <div className="Modal-title">
            <img alt="logo" src={logo} />
            <h3>Quên mật khẩu</h3>
          </div>
          <ForgotPass />
          <div className="Modal-info">
            Bạn chưa có tài khoản? <Link to="/register"> Đăng ký</Link>
          </div>
          <div className="Login-about">
            <span>Giới thiệu về LI</span>
            <span>LI trên Facebook</span>
            <span>LI trên Youtube</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgot;
