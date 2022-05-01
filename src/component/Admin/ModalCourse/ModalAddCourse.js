import React, { useEffect, useState } from "react";
import axios from "axios";
import { sendGet, sendPost } from "../../../utils/api";
import { Modal, Form, Input, Select, Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "../ModalUser/ModalAddUser/ModalAddUser.scss";
import logo from "../../../utils/logo.png";

export default function ModalAddCourse(props) {
  const { TextArea } = Input;
  const { Option } = Select;
  const [isModalVisible, setIsModalVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = async (values) => {
    values.img = imageUrl;
    setIsModalVisible(false);
    const add = await sendPost("/api/course", values);
    if (add.status === 201) {
      await props.getListCourse();
      message.success("Thêm khóa học thành công");
    } else if (add.status === 401) {
      message.error("Bạn không có quyền thêm khóa học");
    } else {
      message.error("Cập nhật khóa học thất bại");
    }
  };

  const onFinishFailed = (errorInfo) => {
    setIsModalVisible(false);
    console.log("Failed:", errorInfo);
  };

  const [imageUrl, setImageUrl] = useState(logo);
  const handleChangeImage = async () => {
    const { files } = document.querySelector(".img-input");
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "descriptionCourse");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/learnit2022/image/upload",
        formData
      )
      .then((response) => setImageUrl(response.data.secure_url))
      .catch((err) => console.error(err));
    return imageUrl;
  };
  useEffect(() => {
    const listCourse = async () => {
      const res = await sendGet("/api/course/");
      if (res.status === 200) {
        setData(res.data);
      } else {
        message.error("Cập nhật khóa học thất bại");
      }
    };
    listCourse();
  }, []);
  return (
    <>
      <div className="ModalAddUser-wrapper">
        <button onClick={showModal}>
          <PlusOutlined />
          Thêm mới
        </button>
        <Modal
          centered
          width={1000}
          title="Thêm khóa học"
          visible={isModalVisible}
          onCancel={handleCancel}
          maskClosable={true}
          footer={null}
          destroyOnClose={true}
        >
          <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="modal-form"
          >
            <Form.Item
              label="Tên"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Tên khóa học không được để trống!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
            <Form.Item label="Mô tả" name="description">
              <TextArea />
            </Form.Item>
            <Form.Item label="Mục tiêu" name="goal">
              <TextArea />
            </Form.Item>
            <div style={{ display: "flex" }}>
              <Form.Item
                initialValue={imageUrl}
                getValueFromEvent={handleChangeImage}
                valuePropName="imageUrl"
                label="Ảnh mô tả"
                name="img"
                style={{ width: "60%" }}
              >
                <input
                  hidden
                  className="img-input"
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  onChange={handleChangeImage}
                />
                <label for="img">
                  <img
                    src={imageUrl}
                    alt="img"
                    style={{
                      width: "300px",
                      height: "200px",
                      objectFit: "contain",
                    }}
                  />
                </label>
              </Form.Item>
              <Form.Item
                name="path"
                label="Lộ trình"
                rules={[{ required: true, message: "Lộ trình!" }]}
                hasFeedback
              >
                <Select placeholder="Chọn lộ trình phù hợp...">
                  <Option value="Frontend">Front-end</Option>
                  <Option value="Backend">Back-end</Option>
                  <Option value="FullStack">FullStack</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="language"
                label="Ngôn ngữ"
                rules={[{ required: true, message: "Ngôn ngữ!" }]}
                hasFeedback
              >
                <Select placeholder="Ngôn ngữ khóa học">
                  <Option value="c">C</Option>
                  <Option value="nodejs">Javascript</Option>
                </Select>
              </Form.Item>
            </div>
            <Form.Item label="Yêu cầu" name="requirement">
              <TextArea />
            </Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "10px",
              }}
            >
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Tạo
                </Button>
                <Button
                  htmlType="reset"
                  onClick={() => setIsModalVisible(false)}
                >
                  Hủy
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </div>
    </>
  );
}
