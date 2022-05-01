import React, { useEffect, useState } from "react";
import { Table, Space, Popconfirm, message, Tag } from "antd";
import "../MamagerUser/ManagerUser.scss";
import { sendDelete, sendGet, sendPut } from "../../../../utils/api";
import { Link } from "react-router-dom";
function UnprocessedPost() {
  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      width: "7%",
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
      width: "30%",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      key: "author",
      width: "20%",
    },
    {
      title: "Chủ đề",
      dataIndex: "topic",
      key: "topic",
      width: "30%",
      render: (tags) => (
        <>
          {Array.isArray(tags) &&
            tags.map((tag) => {
              let color;
              if (tag === "Frontend") {
                color = "red";
              } else if (tag === "Backend") {
                color = "green";
              } else if (tag === "FullStack") {
                color = "blue";
              } else if (tag === "UIUX") {
                color = "yellow";
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
      title: "Action",
      key: "action",
      width: "25%",
      render: (_, record) => (
        <Space size="middle">
          <div className="action" style={{ backgroundColor: "#1890ff" }}>
            {data.length >= 1 ? (
              <Popconfirm
                title="Xóa bài viết?"
                onConfirm={() => handleDelete(record._id)}
              >
                Xóa
              </Popconfirm>
            ) : null}
          </div>
          <div className="action" style={{ backgroundColor: "#1890ff" }}>
            <>
              <Link
                to={`/admin/unprocessedPost/${record._id}`}
                style={{ color: "#fff" }}
              >
                Xem
              </Link>
            </>
          </div>
          <div className="action" style={{ backgroundColor: "#1890ff" }}>
            <p onClick={() => handlePost(record._id, record)}>Đăng</p>
          </div>
        </Space>
      ),
    },
  ];
  const [data, setData] = useState([]);
  const handleDelete = async (key) => {
    // eslint-disable-next-line no-unused-vars
    const del = await sendDelete(`/api/blog/${key}`);
    if (del.status === 200) {
      await listCourse();
    }
  };
  const handlePost = async (key, value) => {
    // eslint-disable-next-line no-unused-vars
    const post = await sendPut(`/api/blog/queue/${key}`, value);
    const res = await sendGet("/api/blog/queue/manage");
    if (res.status === 200) {
      setData(res.data);
    } else {
      message.error("Lỗi kĩ thuật");
    }
  };
  const listCourse = async () => {
    const res = await sendGet("/api/blog/queue/manage");
    if (res.status === 200) {
      setData(res.data);
    } else {
      message.error("Lỗi kĩ thuật");
    }
  };
  useEffect(() => {
    listCourse();
    // user();
  }, []);
  const res = [];
  for (let i = 0; i < data.length; i++) {
    res.push({
      key: i + 1,
      title: data[i].title,
      topic: data[i].topic.split("-"),
      author: data[i].author?.name,
      _id: data[i]._id,
    });
  }
  return (
    <>
      <div className="ManagerUser-wrapper">
        <h1>Bài viết chưa xử lý</h1>
        <Table
          columns={columns}
          dataSource={res}
          scroll={{ y: 340 }}
          pagination={{
            defaultPageSize: 4,
            showSizeChanger: false,
          }}
        />
      </div>
    </>
  );
}
export default UnprocessedPost;
