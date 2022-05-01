import { Form, Input, Button, message } from "antd";
import "../FormSignin/FormSignin.scss";
import { sendPost } from "../../../../utils/api/index";

export default function FormSignIn() {
  const onFinish = async (values) => {

    const res = await sendPost("/api/auth/forgot", values);
    if (res.status === 200) {
      // history.push("/api/auth/forgot/:token");
      message.success("Mã xác nhận đã được gửi đến Email của bạn");
    } else {
      message.error("Không thể truy cập");
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
            label="Nhập email xác thực mật khẩu"
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
          <Button htmlType="submit">Nhận mã</Button>
        </Form>
      </div>
    </>
  );
}
