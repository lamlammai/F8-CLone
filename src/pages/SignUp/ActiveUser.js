import { message } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { sendGet } from "../../utils/api";
import logo from "../../utils/icon.png";
import tick from "../../utils/tick.png";
import PageError from "../NotFround/PageError";
function ActiveUser() {
  const params = useParams();
  const [active, setActive] = useState(false);
  const Active = async () => {
    const res = await sendGet(`/api/auth/active/${params.token}`);
    if (res.status === 200) {
      setActive(true);
    } else message.error("Đường dẫn không tồn tại");
  };
  useEffect(() => {
    Active();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {active ? (
        <div className="Active-wrapper">
          <div
            className="logo"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "10px",
            }}
          >
            <img
              alt="logo"
              src={logo}
              style={{
                width: "195px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "10px",
              }}
            />
            <p
              style={{
                fontSize: "19px",
                fontWeight: "500",
                letterSpacing: "4px",
              }}
            >
              Học lập trình để đi làm
            </p>
          </div>
          <div
            className="active"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "123px",
            }}
          >
            <img alt="active" src={tick} style={{ width: "85px" }} />
            <h3 style={{ fontWeight: "600", fontSize: "23px" }}>
              Tài khoản của bạn đã được kích hoạt thành công
            </h3>
            <h4 style={{ fontSize: "17px" }}>
              Quay về trang{" "}
              <Link
                to="/Signin"
                style={{ color: " #ef2424", fontWeight: "700" }}
              >
                Đăng nhập
              </Link>{" "}
            </h4>
          </div>
        </div>
      ) : (
        <>
          <PageError />
        </>
      )}
    </>
  );
}

export default ActiveUser;
