import React, { useState } from "react";
import { Modal, Form, Input, Select, message, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "../ModalUser/ModalAddUser/ModalAddUser.scss";
import { sendGet, sendPost } from "../../../utils/api";
import { useParams } from "react-router-dom";
export default function ModalAddLesson(props) {
  const params = useParams();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const { Option } = Select;
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  const onFinish = async (values) => {
    setIsModalVisible(false);
    const add = await sendPost(`/api/lesson/${params.id}`, values);
    if (add.status === 201) {
      const res = await sendGet(`/api/lesson/${params.id}`);
      if (res.status === 200) {
        await props.getListLesson();
        message.success("Thêm bài học thành công");
      }
    } else {
      message.error("Cập nhật bài học thất bại");
    }
  };
  const onFinishFailed = (errorInfo) => {
    setIsModalVisible(false);
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div
        className="ModalAddUser-wrapper"
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button onClick={showModal}>
          <PlusOutlined />
          Thêm bài học
        </button>
        <Modal
          title="Thêm bài mới"
          visible={isModalVisible}
          footer={null}
          maskClosable={false}
          onCancel={handleCancel}
          centered
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
              label="Tên bài mới"
              name="name"
              rules={[
                { required: true, message: "Tên bài không được để trống!" },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Link video"
              name="link"
              rules={[{ required: true, message: "Thiếu đường dẫn video!" }]}
              hasFeedback
            >
              <Input />
            </Form.Item>
            <Form.Item label="Trạng thái" name="status">
              <Select
                placeholder="Trạng thái..."
                defaultValue="Có hiệu lực"
                disabled
              >
                <Option value="Có hiệu lực">Có hiệu lực</Option>
                <Option value="Hết hiệu lực">Hết hiệu lực</Option>
              </Select>
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
