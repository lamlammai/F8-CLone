import React, { useEffect, useState } from "react";
import { Modal, Form, Input, message, Button } from "antd";
import "../ModalUser/ModalAddUser/ModalAddUser.scss";
import TextArea from "antd/lib/input/TextArea";
import { sendDelete, sendGet, sendPut } from "../../../utils/api";
import { useParams } from "react-router-dom";

export default function ModalEditExercise(props) {
  const params = useParams();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = async (values) => {
    console.log(props.dataFromParent1);
    // return;
    setIsModalVisible(false);
    await sendPut(
      `/api/excercise/${params.id}/${props.dataFromParent1.lesson}/${props.dataFromParent1._id}`,
      {
        ...values,
        cases: [
          {
            input: values.input1,
            output: values.output1,
          },
          {
            input: values.input2,
            output: values.output2,
          },
          {
            input: values.input3,
            output: values.output3,
          },
        ],
      }
    );
    const res = await sendGet(`/api/excercise/${props.dataFromParent1._id}`);
    if (res.status === 200) {
      props.getListLesson();
      message.success("Cập thật thành công");
    } else {
      message.error("cập nhật bài tập thất bại");
    }
  };
  const onFinishFailed = (errorInfo) => {
    setIsModalVisible(false);
    console.log("Failed:", errorInfo);
  };
  const handleDelete = async (key) => {
    setIsModalVisible(false);
    const del = await sendDelete(`/api/excercise/${props.dataFromParent1._id}`);
    if (del.status === 200) {
      props.getListLesson();
      message.success("Xóa bài tập thành công!");
    } else {
      message.error("Xóa bài tập thất bại!");
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <div
        className="ModalAddUser-wrapper"
        // style={{
        //   display: "flex",
        //   justifyContent: "flex-end",
        // }}
      >
        <div onClick={showModal}>Bài {props.dataFromParent}</div>
        <Modal
          title="Chỉnh sửa bài tập"
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
            className="modal-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Đề bài"
              name="question"
              initialValue={props.dataFromParent1?.question}
              rules={[
                { required: true, message: "Đề bài không được để trống!" },
              ]}
              hasFeedback
              style={{ width: "70%" }}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mô tả"
              name="description"
              initialValue={props.dataFromParent1?.description}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Test Case 1" name="cases1">
              <div
                className="group"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Form.Item
                  label="Input"
                  name="input1"
                  initialValue={props.dataFromParent1?.cases[0].input}
                >
                  <TextArea />
                </Form.Item>
                <Form.Item
                  label="Output"
                  name="output1"
                  initialValue={props.dataFromParent1?.cases[0].output}
                >
                  <TextArea />
                </Form.Item>
              </div>
            </Form.Item>
            <Form.Item label="Test Case 2" name="cases2">
              <div
                className="group"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Form.Item
                  label="Input"
                  name="input2"
                  initialValue={props.dataFromParent1?.cases[1].input}
                >
                  <TextArea />
                </Form.Item>
                <Form.Item
                  label="Output"
                  name="output2"
                  initialValue={props.dataFromParent1?.cases[1].output}
                >
                  <TextArea />
                </Form.Item>
              </div>
            </Form.Item>
            <Form.Item label="Test Case 3" name="cases3">
              <div
                className="group"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Form.Item
                  label="Input"
                  name="input3"
                  initialValue={props.dataFromParent1?.cases[2].input}
                >
                  <TextArea />
                </Form.Item>
                <Form.Item
                  label="Output"
                  name="output3"
                  initialValue={props.dataFromParent1?.cases[2].output}
                >
                  <TextArea />
                </Form.Item>
              </div>
            </Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "10px",
                //: "100px",
              }}
            >
              <Form.Item>
                <Button type="primary" onClick={handleDelete}>
                  Xóa bài tập
                </Button>
                <Button type="primary" htmlType="submit">
                  cập nhật
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
