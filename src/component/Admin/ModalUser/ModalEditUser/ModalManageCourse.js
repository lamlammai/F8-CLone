import React, { useEffect, useState } from "react";
import { Modal, Form, Select, message, Button } from "antd";
import "../ModalAddUser/ModalAddUser.scss";
import { sendGet, sendPut } from "../../../../utils/api";
export default function ModalManageCourse(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [course, setCourse] = useState([]);
  const { Option } = Select;
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  async function getOneUser() {
    setIsModalVisible(true);
    const res = await sendGet(`/api/user/manage/${props.dataFromParent._id}`);
    if (res.status === 200) {
      const tmp = [];
      for (let i = 0; i < data?.length; i++) {
        for (let j = 0; j < res.data.manage?.length; j++) {
          if (data[i]?._id === res.data.manage[j]) {
            tmp.push({
              name: data[i]?.name,
            });
          }
        }
      }
      setCourse(tmp);
    } else {
      message.error("Bạn không thể chỉnh sửa quyển quản lí khóa học!");
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  async function getInfoCourse() {
    const res = await sendGet(`/api/course`);
    if (res.status === 200) {
      setData(res.data);
    } else {
      console.log("Vui lòng load lại trang.");
    }
  }
  useEffect(() => {
    getInfoCourse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onFinish = async (values) => {
    setIsModalVisible(false);
    const res = await sendPut(
      `/api/user/mod/${props.dataFromParent._id}`,
      values
    );
    if (res.status === 200) {
      message.success("Cập nhật quyền quản lý thành công");
      await props.listUser();
    } else {
      message.error("Mod đã quản lí khóa học này");
    }
  };
  return (
    <>
      <div className="ModalAddUser-wrapper">
        <div onClick={getOneUser}>Quản lý</div>
        <Modal
          title="Chỉnh sửa quyền quản lý khóa học"
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
            <Form.Item name="course" label="Chức vụ">
              <Select
                placeholder="Chọn khóa học muốn set quyền"
                optionLabelProp="label"
              >
                {data?.map((i) => (
                  <Option value={i?._id} label={i?.name}>
                    {i.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <p>
              Khóa học Mod đang quản lý:
              {course?.map((i) => (
                <>
                  <p>{i?.name}</p>
                </>
              ))}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "10px",
              }}
            >
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Lưu
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
