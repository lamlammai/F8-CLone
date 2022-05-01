import React, { useState, useEffect } from "react";
import { Tag, Badge, Space, Popconfirm, Table, message } from "antd";
import { Link } from "react-router-dom";
import ModalAddCourse from "../../../../component/Admin/ModalCourse/ModalAddCourse";
import { sendDelete, sendGet } from "../../../../utils/api";

function CourseManagement() {
  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      width: "7%",
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      width: "35%",
    },

    {
      title: "Lộ trình",
      dataIndex: "path",
      key: "path",
      width: "15%",
      render: (tags) => (
        <>
          {Array.isArray(tags) &&
            tags.map((tag) => {
              let color;
              if (tag === "Front-end") {
                color = "red";
              }
              if (tag === "Back-end") {
                color = "green";
              }
              if (tag === "FullStack") {
                color = "violet";
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
      key: "status",
      dataIndex: "status",
      width: "15%",
      render: () => (
        <>
          <Badge status="success" text="Có hiệu lực" dot={3} />
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: "20%",
      render: (_, record) => (
        <Space size="middle">
          <div className="action" style={{ backgroundColor: "rgb(255 79 32)" }}>
            <Link to={`/admin/course/${record._id}`} style={{ color: "#fff" }}>
              Xem
            </Link>
          </div>
          <div className="action" style={{ backgroundColor: "#1890ff" }}>
            {data.length >= 1 ? (
              <Popconfirm
                title="Xóa Khóa học?"
                onConfirm={() => handleDelete(record._id)}
              >
                Xóa
              </Popconfirm>
            ) : null}
          </div>
        </Space>
      ),
    },
  ];
  const [data, setData] = useState([]);
  const handleDelete = async (key) => {
    // eslint-disable-next-line no-unused-vars
    const del = await sendDelete(`api/course/${key}`);
    if (del.status === 200) {
      const res = await sendGet("/api/course/");
      if (res.status === 200) {
        setData(res.data);
        message.success("Đã xóa khóa học");
      } else {
        message.error("Cập nhật khóa học thất bại");
      }
    } else if (del.status === 401) {
      message.error("Bạn không có quyền xóa khóa học");
    } else {
      message.error("Cập nhật khóa học thất bại");
    }
  };
  const listCourse = async () => {
    const res = await sendGet("/api/course/");
    if (res.status === 200) {
      setData(res.data);
    } else {
      message.error("Cập nhật khóa học thất bại");
    }
  };
  useEffect(() => {
    listCourse();
  }, []);
  const res = [];
  for (let i = 0; i < data.length; i++) {
    res.push({
      key: i + 1,
      name: data[i].name,
      path: data[i].path,
      _id: data[i]._id,
    });
  }
  return (
    <>
      <div className="CourseManagement-wrapper ManagerUser-wrapper">
        <h1>Quản lý khóa học</h1>
        <div className="btn">
          <ModalAddCourse getListCourse={listCourse} />
        </div>
        <Table
          columns={columns}
          dataSource={res}
          scroll={{ y: 390 }}
          pagination={{
            defaultPageSize: 6,
            showSizeChanger: false,
          }}
        />
      </div>
    </>
  );
}

export default CourseManagement;
