import React, { useState, useEffect } from "react";
import { Form, Button, Input, Skeleton, message } from "antd";
import axios from "axios";
import "./InfoUser.scss";
import Header from "../../component/Layout/Header/HeaderLayout";
import Footer from "../../component/Layout/Footer/Footer";
import { sendGet, sendPost, sendPut } from "../../utils/api";
import { getItem } from "../../utils/storage";
function Account() {
  const [profile, setProfile] = useState({});
  const [imageUrl, setImageUrl] = useState(profile?.avatar);
  const [show, setShow] = useState(true);
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    values.avatar = imageUrl;
    await sendPut("/api/user/", {
      ...values,
      social: {
        facebook: values.facebook,
        youtube: values.youtube,
        linkedin: values.linkedin,
        instagram: values.instagram,
        twitter: values.twitter,
      },
    });
    message.success("Cập nhật thông tin thành công");
    window.location.reload();
  };

  async function getProfile() {
    const res = await sendGet("/api/user/profile");
    setProfile(res.data);
    setImageUrl(res.data?.avatar);
  }
  useEffect(() => {
    getProfile();
  }, []);
  // eslint-disable-next-line no-unused-vars
  const user = getItem("user") ? JSON.parse(getItem("user")) : {};
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleChangeImage = async () => {
    const { files } = document.querySelector(".img-input");
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "avatar");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/learnit2022/image/upload",
        formData
      )
      .then((response) => setImageUrl(response.data.secure_url))
      .catch((err) => console.error(err));
    return imageUrl;
  };
  const onChangePass = async (values) => {
    const res = await sendPost("/api/user/password", values);
    if (res.status === 200) {
      message.success("Đổi mật khẩu thành công");
      form.resetFields();
    } else {
      message.error("Không thể đổi mật khẩu");
    }
  };
  const onCancelChangePass = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  if (!Object.keys(profile).length)
    return (
      <>
        <Skeleton />
      </>
    );
  return (
    <>
      <Header />
      <div className="InfoUser-wwrapper">
        <h1>Cài đặt</h1>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          
        >
          <Form.Item>
            <div className="btn-active">
              <Button className="active" htmlType="submit">
                Lưu
              </Button>
              <button>Hủy</button>
            </div>
          </Form.Item>

          <h2>Thông tin cá nhân</h2>
          <div className="info">
            <h3>Họ tên</h3>
            <Form.Item name="name" initialValue={profile?.name}>
              <Input />
            </Form.Item>
            <p>
              Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận
              của bạn.
            </p>
          </div>
          <div className="info">
            <h3>Bio</h3>
            <Form.Item name="bio" initialValue={profile?.bio}>
              <Input placeholder="Thêm giới thiệu" />
            </Form.Item>
            <p>
              Bio hiển thị trên trang cá nhân và trong các bài viết (blog) của
              bạn.
            </p>
          </div>

          <div className="info">
            <h3>Avatar</h3>
            <p>
              Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG hoặc GIF.
              <Form.Item initialValue={profile?.avatar}>
                <div class="avtUpload">
                  <div class="avtUploadImg">
                    <img src={imageUrl} alt="Mai Lam" />
                  </div>
                  <label for="img">
                    <div class="photoupload" onChange={handleChangeImage}>
                      <img
                        src="https://fullstack.edu.vn/assets/icon/camera.png"
                        class="photoupload-img"
                        alt="camera"
                      />
                    </div>
                    <div class="PhotoPic" hidden={true}>
                      <input
                        className="img-input"
                        type="file"
                        id="img"
                        name="img"
                        accept="image/*"
                        onChange={handleChangeImage}
                      />
                    </div>
                  </label>
                </div>
              </Form.Item>
            </p>
          </div>

          <div className="info">
            <h3>Email</h3>
            <Form.Item name="email" initialValue={profile?.email}>
              <Input placeholder={"learnit@gmail.com"} readOnly />
            </Form.Item>
          </div>
          <h2>Mạng xã hội</h2>
          <div className="social">
            <div className="info">
              <h3>Facebook</h3>
              <Form.Item
                name="facebook"
                initialValue={profile?.social?.facebook}
              >
                <Input placeholder="Eg. https://facebook/learnit" />
              </Form.Item>
            </div>

            <div className="info">
              <h3>Youtube</h3>
              <Form.Item name="youtube" initialValue={profile?.social?.youtube}>
                <Input placeholder="Eg. https://learnit/social" />
              </Form.Item>
            </div>

            <div className="info">
              <h3>Linkedin</h3>
              <Form.Item
                name="linkedin"
                initialValue={profile?.social?.linkedin}
              >
                <Input placeholder="Eg. https://learnit/social" />
              </Form.Item>
            </div>

            <div className="info">
              <h3>Instagram</h3>
              <Form.Item
                name="instagram"
                initialValue={profile?.social?.instagram}
              >
                <Input placeholder="Eg. https://learnit/social" />
              </Form.Item>
            </div>

            <div className="info">
              <h3>Twitter</h3>
              <Form.Item name="twitter" initialValue={profile?.social?.twitter}>
                <Input placeholder="Eg. https://learnit/social" />
              </Form.Item>
            </div>
          </div>
        </Form>
        <div className="ChangPassword">
          <div className="changeinfo">
            <div className="title">
              <i className="fas fa-key"></i>
              <div style={{ marginLeft: "13px" }}>
                <p style={{ color: "#181717" }}>Đổi mật khẩu</p>
                <p style={{ color: "#383838" }}>
                  Bạn nên sử dụng mật khẩu mạnh mà mình chưa sử dụng ở đâu khác
                </p>
              </div>
            </div>
            <button onClick={() => setShow(!show)}>Thay đổi</button>
          </div>
          <Form
         form={form}
            hidden={show}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onChangePass}
            onFinishFailed={onCancelChangePass}
            autoComplete="off"
          >
            <Form.Item
              name="oldPassword"
              label="Mật khẩu cũ"
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
              name="confirm"
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
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Lưu thay đổi
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Account;
