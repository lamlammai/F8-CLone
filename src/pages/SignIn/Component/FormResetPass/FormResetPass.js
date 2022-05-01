import React from "react";
import { Form, Input, Button, message } from "antd";

import { sendPut } from "../../../../utils/api/index";
import { useHistory } from "react-router-dom";
import "../../SignIn.scss";
import "../FormSignin/FormSignin.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import logo from "../../../../utils/logo.png";
function SignUp() {
  const history = useHistory();
  const params = useParams();
  console.log(params);
  document.title = "Đổi mật khẩu";
  const onFinish = async (values) => {
    const res = await sendPut(`/api/auth/forgot/${params.token}`, values);
    if (res.status === 200) {
      history.push("/Signin");
      message.success("Đổi mật khẩu thành công");
    } else {
      message.error("Không thể truy cập");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="SignIn-wrapper">
        <div className="Modal-SignIn">
          <div className="Modal-title">
            <img alt="logo" src={logo} />
            <h3>Đặt lại mật khẩu</h3>
          </div>
          <div className="Form-wrapper">
            <Form
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="password"
                label="Mật khẩu mới"
                rules={[
                  {
                    required: true,
                    message: "Nhập mật khẩu",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="passwordConfirmation"
                label="Nhập lại mật khẩu"
                dependencies={["passwordConfirmation"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Nhật mật khẩu",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("Mật khẩu không khớp"));
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Button htmlType="submit">Đổi mật khẩu</Button>
            </Form>
          </div>
          <div className="Modal-info">
            Bạn đã có tài khoản? <Link to="/signin"> Đăng nhập</Link>
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

export default SignUp;
