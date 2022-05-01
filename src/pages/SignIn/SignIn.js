import React, { useState } from "react";
import "./SignIn.scss";
import { Link } from "react-router-dom";
import Modal from "./Component/Modal/Modal";
import FormSignIn from "./Component/FormSignin/FormSignin";
import logo from "../../utils/logo.png";
function SignIn() {
  document.title = "Đăng nhập";
  const [isShow, setIsShow] = useState(true);
  const callbackFunction = (childData) => {
    setIsShow(!childData);
  };
  function handleClick() {
    setIsShow(!isShow);
  }
  return (
    <>
      <div className="SignIn-wrapper">
        <div className="Modal-SignIn">
          <div className="Modal-title">
            <img alt="logo" src={logo} />
            <h3>Đăng nhập vào LI </h3>
          </div>
          {isShow ? (
            <Modal parentCallback={callbackFunction} />
          ) : (
            <FormSignIn />
          )}

          <div className="Modal-info">
            Bạn chưa có tài khoản? <Link to="/register"> Đăng ký</Link>
          </div>
          <div className="Login-about">
          <span><Link to ="/about"style={{color: "#fff"}}> Giới thiệu về LI</Link></span>
            <span>LI trên Facebook</span>
            <span>LI trên Youtube</span>
          </div>
          {isShow ? null : (
            <div className="exitLogin" onClick={handleClick}>
              <i class="fas fa-chevron-left"></i>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SignIn;
