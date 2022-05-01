import React from "react";
import { notification } from 'antd';
function Modal(props) {
  const sendData = () => {
    props.parentCallback(true);
  };
  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'LEARN IT',
      description:
        'Tính năng đang được phát triển!!',
    });
  };
  return (
    <>
      <div className="Modal-main">
        <div onClick={sendData}>
          <img
            alt="icon"
            src="https://accounts.fullstack.edu.vn/assets/images/signin/personal-18px.svg"
          ></img>
          <span>Sử dụng Email/ Số điện thoại</span>
        </div>
        <div onClick={() => openNotificationWithIcon('warning')}>
          <img
            alt="icon"
            src="https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg"
          ></img>
          <span>Tiếp tục với Google</span>
        </div>
        <div onClick={() => openNotificationWithIcon('warning')}>
          <img
            alt="icon"
            src="https://accounts.fullstack.edu.vn/assets/images/signin/facebook-18px.svg"
          ></img>
          <span>Tiếp tục với Facebook</span>
        </div>
        <div onClick={() => openNotificationWithIcon('warning')}>
          <img
            alt="icon"
            src="https://accounts.fullstack.edu.vn/assets/images/signin/github-18px.svg"
          ></img>
          <span>Tiếp tục với Github</span>
        </div>
      </div>
    </>
  );
}

export default Modal;
