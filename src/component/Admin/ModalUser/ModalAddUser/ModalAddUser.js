import React, { useState } from "react";
import { Modal, Form, Input, Select } from "antd";

import { PlusOutlined } from "@ant-design/icons";
import "./ModalAddUser.scss";
function ModalAddUser() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const { Option } = Select;

  return (
    <>
      <div className="ModalAddUser-wrapper">
        <button onClick={showModal}>
          <PlusOutlined />
          Thêm mới
        </button>
        <Modal
          title="Thêm mới nhân viên"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          maskClosable={false}
        >
          <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item
              label="Họ tên"
              name="name"
              rules={[
                { required: true, message: "Họ tên không được để trống!" },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "E-mail không hợp lệ!",
                },
                {
                  required: true,
                  message: "E-mail không được để trống!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="func"
              label="Chức vụ"
              rules={[{ required: true, message: "Hãy nhập quyền của bạn" }]}
              hasFeedback
            >
              <Select placeholder="select your gender">
                <Option value="male">Admin</Option>
                <Option value="female">Mod</Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default ModalAddUser;
