import React, { useEffect, useState } from "react";
import { Table, Tag, Space, Popconfirm } from "antd";
import "./ManagerUser.scss";
import ModalEditUser from "../../../../component/Admin/ModalUser/ModalEditUser/ModalEditUser";
import { message } from "antd";
import { sendDelete, sendGet } from "../../../../utils/api";
import ModalManageCourse from "../../../../component/Admin/ModalUser/ModalEditUser/ModalManageCourse";
function ManagerUser() {
  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      width: "7%",
    },
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "name",
      width: "23%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "25%",
    },
    {
      title: "Chức vụ",
      key: "roles",
      dataIndex: "roles",
      width: "10%",
      render: (tags) => (
        <>
          {Array.isArray(tags) &&
            tags.map((tag) => {
              let color;
              if (tag === "ADMIN") {
                color = "red";
              } else if (tag === "MOD") {
                color = "green";
              } else if (tag === "USER") {
                color = "blue";
              } else {
                color = "pink";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          {typeof tags === "string" && (
            <Tag color="pink" key={tags}>
              {tags.toUpperCase()}
            </Tag>
          )}
        </>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: "10%",
      render: (status) => {
        return (
          <Tag color={status === "active" ? "green" : "red"}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      width: "25%",
      render: (_, record) => (
        <Space size="middle">
          <div className="action" style={{ backgroundColor: "#1890ff" }}>
            {data.length >= 1 ? (
              <Popconfirm
                title="Xóa người dùng?"
                onConfirm={() => handleDelete(record._id)}
              >
                Xóa
              </Popconfirm>
            ) : null}
          </div>
          <div className="action" style={{ backgroundColor: "rgb(255 79 32)" }}>
            <ModalEditUser dataFromParent={record} listUser={listUser} />
          </div>
          {record?.roles === "MOD" ? (
            <div
              className="action"
              style={{ backgroundColor: "rgb(203 196 65)" }}
            >
              <ModalManageCourse dataFromParent={record} listUser={listUser} />
            </div>
          ) : null}
        </Space>
      ),
    },
  ];
  const [data, setData] = useState([]);
  const handleDelete = async (key) => {
    // eslint-disable-next-line no-unused-vars
    const del = await sendDelete(`api/user/${key}`);
    if (del.status === 200) {
      setData(del.data);
      message.error("Đã xóa User");
    } else if (del.status === 401) {
      message.error("Bạn không có quyền xóa");
    } else {
      message.error("Xoá user thất bại");
    }
  };
  const listUser = async () => {
    const res = await sendGet("api/user/manage/");
    if (res.status === 200) {
      setData(res.data);
    } else {
      message.error("Cập nhật User thất bại");
    }
  };
  useEffect(() => {
    // console.log(1);
    listUser();
  }, []);
  const res = [];
  for (let i = 0; i < data.length; i++) {
    res.push({
      key: i + 1,
      name: data[i].name,
      email: data[i].email,
      roles: data[i].roles,
      _id: data[i]._id,
      status: data[i].status,
    });
  }
  return (
    <>
      <div className="ManagerUser-wrapper">
        <h1>Quản lý User</h1>
        <Table
          columns={columns}
          dataSource={res}
          scroll={{ y: 400 }}
          pagination={{
            defaultPageSize: 6,
            showSizeChanger: false,
          }}
        />
      </div>
    </>
  );
}

export default ManagerUser;
