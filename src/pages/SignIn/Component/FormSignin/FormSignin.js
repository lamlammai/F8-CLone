import { Form, Input, Button, message } from "antd";
import "./FormSignin.scss";
import { sendPost } from "../../../../utils/api/index";
import { setToken, setRefreshToken, setItem } from "../../../../utils/storage";
import { useHistory, Link } from "react-router-dom";

export default function FormSignIn() {
  const history = useHistory();
  const onFinish = async (values) => {
    const res = await sendPost("/api/auth/sign-in", values);
    if (res.status === 200) {
      setToken(res.accessToken);
      setRefreshToken(res.refreshToken);
      setItem("user", JSON.stringify(res.userData));
      localStorage.setItem("courses", JSON.stringify(res.courses));
      if (res.userData.roles === "USER") {
        return history.push("/");
      }
      if (res.userData.roles === "ADMIN" || res.userData.roles === "MOD") {
        return history.push("/admin");
      }
    }
    if (res.status === 400) {
      message.error("Tài khoản/Mật khẩu không đúng!");
    }
    if (res.status === 401) {
      message.error("Tài khoản không tồn tại");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="Form-wrapper">
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            label="E-mail"
            hasFeedback
            rules={[
              {
                validateStatus: "error",
                type: "email",
                message: "Email không hợp lệ!",
              },
              {
                validateStatus: "error",
                required: true,
                message: "Email không được để trống!",
              },
            ]}
          >
            <Input placeholder="Nhập email của bạn" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            hasFeedback
            rules={[{
                validateStatus: "error",
                required: true,
                message: "Mật khẩu không được để trống!",
              },
              { min: 6,required: true, message: 'Mật khẩu tối thiểu 6 kí tự' },
              
            ]}
          >
            <Input.Password placeholder="Nhập mật khẩu của bạn" />
          </Form.Item>
          <Form.Item>
            <div className="forgot">
              <Link to="/forgotPassword">Quên mật khẩu?</Link>
            </div>
          </Form.Item>
          <Button htmlType="submit">Đăng nhập</Button>
        </Form>
      </div>
    </>
  );
}
