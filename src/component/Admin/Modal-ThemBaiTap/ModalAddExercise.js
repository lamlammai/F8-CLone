import React, { useState } from "react";
import { Modal, Form, Input, message, Button } from "antd";
import "../ModalUser/ModalAddUser/ModalAddUser.scss";
import TextArea from "antd/lib/input/TextArea";
import { sendGet, sendPost } from "../../../utils/api";
import { useParams } from "react-router-dom";

export default function ModalAddExercise(props) {
  const params = useParams();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = async (values) => {
    const test = {
      question: values.question,
      description: values.description,
      cases: [
        { input: values.input1, output: values.output1 },
        { input: values.input2, output: values.output2 },
        { input: values.input3, output: values.output3 },
      ],
    };
    setIsModalVisible(false);
    const add = await sendPost(
      `/api/excercise/${params.id}/${props.dataFromParent}`,
      test
    );
    if (add.status === 201) {
      const res = await sendGet(`/api/course/${params.id}`);
      if (res.status === 200) {
        props.getListLesson();
        message.success("Thêm bài tập thành công");
      }
    } else {
      message.error("Thêm bài tập thất bại");
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
        <div onClick={showModal}>Thêm bài tập</div>
        <Modal
          title="Thêm bài tập"
          visible={isModalVisible}
          footer={null}
          onCancel={handleCancel}
          maskClosable={false}
          width={800}
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
              label="Đề bài"
              name="question"
              rules={[
                { required: true, message: "Đề bài không được để trống!" },
              ]}
              hasFeedback
              style={{ width: "70%" }}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Mô tả" name="description">
              <Input />
            </Form.Item>
            <Form.Item label="Test Case 1" name="cases1">
              <div
                className="group"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Form.Item label="Input" name="input1">
                  <TextArea />
                </Form.Item>
                <Form.Item label="Output" name="output1">
                  <TextArea />
                </Form.Item>
              </div>
            </Form.Item>
            <Form.Item label="Test Case 2" name="cases2">
              <div
                className="group"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Form.Item label="Input" name="input2">
                  <TextArea />
                </Form.Item>
                <Form.Item label="Output" name="output2">
                  <TextArea />
                </Form.Item>
              </div>
            </Form.Item>
            <Form.Item label="Test Case 3" name="cases3">
              <div
                className="group"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Form.Item label="Input" name="input3">
                  <TextArea />
                </Form.Item>
                <Form.Item label="Output" name="output3">
                  <TextArea />
                </Form.Item>
              </div>
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
