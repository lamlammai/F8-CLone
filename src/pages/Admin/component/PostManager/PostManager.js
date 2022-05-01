import React, { useEffect, useState } from "react";
import { Table, Tag, Space, Popconfirm, message } from "antd";
import "../MamagerUser/ManagerUser.scss";
import { sendDelete, sendGet } from "../../../../utils/api";

function PostManager() {
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
      width: "25%",
      render: (_, value) => (
        <a
          href={`http://learnit-kma.me/blog/${value._id}`}
          target="_blank"
          rel="noreferrer"
        >
          <p onClick={() => handleView(value._id)}>{value.title}</p>
        </a>
      ),
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      key: "author",
      width: "30%",
    },
    {
      title: "Chủ đề",
      dataIndex: "topic",
      key: "topic",
      width: "23%",
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
            {res.length >= 1 ? (
              <Popconfirm
                title="Xóa bài viết?"
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
  const [data, setData] = useState({});
  const handleDelete = async (key) => {
    // eslint-disable-next-line no-unused-vars
    const del = await sendDelete(`/api/blog/${key}`);
    const res = await sendGet("/api/blog");
    if (res.status === 200) {
      setData(res.data);
    } else {
      message.error("Lỗi kĩ thuật");
    }
  };
  const handleView = async (key) => {
    // eslint-disable-next-line no-unused-vars
    const view = await sendGet(`/api/blog/${key}`);
    if (view.status === 200) {
      await listTopic();
    } else {
      message.error("Lỗi kĩ thuật");
    }
  };
  const listTopic = async () => {
    const res = await sendGet("/api/blog");
    if (res.status === 200) {
      setData(res.data);
    } else {
      message.error("Lỗi kĩ thuật");
    }
  };
  useEffect(() => {
    listTopic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const res = [];
  for (let i = 0; i < data.length; i++) {
    res.push({
      _id: data[i]._id,
      key: i + 1,
      title: data[i].title,
      author: data[i].author === null ? <p>Unknown</p> : data[i].author?.name,
      topic: data[i].topic.split("-"),
    });
  }
  return (
    <>
      <div className="ManagerUser-wrapper">
        <h1>Tất cả bài viết</h1>
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

export default PostManager;
