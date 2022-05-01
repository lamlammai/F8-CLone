import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import "../ModalUser/ModalAddUser/ModalAddUser.scss";
import { useParams } from "react-router-dom";
import { sendGet, sendPut } from "../../../utils/api";
export default function ModalEditLesson(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const params = useParams();
  const showModal = () => {
    setIsModalVisible(true);
    // console.log(props.dataFromParent);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [lesson, setLesson] = useState({});
  const onFinish = async (values) => {
    setIsModalVisible(false);
    await sendPut(`/api/lesson/${params.id}/${props.dataFromParent}`, values);
    const res = await sendGet(`/api/lesson/${params.id}`);
    if (res === 200) {
      message.error("Cập nhật khóa học thất bại");
    } else {
      message.success("Update bài học thành công");
      await props.getListLesson();
    }
  };
  async function getOneLesson() {
    const res = await sendGet(
      `/api/course/${params.id}/${props.dataFromParent}`
    );
    if (res.status === 200) {
      setLesson(res.data);
    } else {
      message.error("Cập nhật khóa học thất bại");
    }
  }
  useEffect(() => {
    getOneLesson();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onFinishFailed = (errorInfo) => {
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
        <div onClick={showModal}>Sửa</div>
        <Modal
          title="Sửa nội dung bài học"
          visible={isModalVisible}
          footer={null}
          onCancel={handleCancel}
          maskClosable={false}
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
              initialValue={lesson?.name}
              label="Tên bài"
              name="name"
              rules={[
                { required: true, message: "Tên bài không được để trống!" },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
            <Form.Item
              initialValue={lesson?.link}
              label="Link video"
              name="link"
              rules={[{ required: true, message: "Thiếu đường dẫn video!" }]}
              hasFeedback
            >
              <Input />
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
