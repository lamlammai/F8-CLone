import React, { useState } from "react";
import { Modal, Form, Select, Switch, message, Button } from "antd";
import "../ModalAddUser/ModalAddUser.scss";
import { sendPut } from "../../../../utils/api";
export default function ModalEditUser(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({
    status: props.dataFromParent.status,
    role: props.dataFromParent.roles,
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = async (values) => {
    if (!values.roles) {
      message.error("Vui lòng nhập đủ thông tin");
      return;
    }

    setIsModalVisible(false);
    const res = await sendPut(`/api/user/set/${props.dataFromParent._id}`, {
      role: values.roles,
      status: values.status ? "active" : "disabled",
    });
    if (res.status === 200) {
      await props.listUser();
      message.success("Cập nhật User thành công");
    } else {
      message.error("Bạn không có quyền sửa");
    }
  };
  const { Option } = Select;
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="ModalAddUser-wrapper">
        <div onClick={showModal}>Sửa quyền</div>
        <Modal
          title="Chỉnh sửa thông tin"
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
            <Form.Item name="roles" label="Chức vụ" initialValue={data?.roles}>
              <Select
                placeholder="Chọn chức vụ của bạn!"
                defaultValue={data?.roles}
              >
                <Option value="MOD">Mod</Option>
                <Option value="USER">User</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="status"
              label="Trạng thái tài khoản"
              initialValue={true}
            >
              <Switch
                checkedChildren="Hoạt động"
                unCheckedChildren="Khóa"
                defaultChecked
              />
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
