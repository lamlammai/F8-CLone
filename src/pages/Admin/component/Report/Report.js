import React, { useState, useEffect } from "react";
import { Table, Space, Popconfirm, message } from "antd";
import "../MamagerUser/ManagerUser.scss";
import { sendGet, sendPut } from "../../../../utils/api";
export default function Report() {
  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      width: "10%",
    },
    {
      title: "Bài viết",
      dataIndex: "post",
      key: "post",
      width: "30%",
      render: (_, value) => (
        <a href={`http://learnit-kma.me/blog/${value.link}`} target="_blank" rel="noreferrer">
          {value.post}
        </a>
      ),
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      key: "author",
      width: "18%",
    },
    {
      title: "Nội dung",
      dataIndex: "content",
      key: "content",
      width: "23%",
    },
    {
      title: "Người báo cáo",
      key: "user",
      dataIndex: "user",
      width: "17%",
    },
    {
      title: "Thời gian báo cáo",
      key: "time",
      dataIndex: "time",
      width: "17%",
      render: (time) => {
        return <>{new Date(time).toLocaleString()}</>;
      },
    },
    {
      title: "Action",
      key: "action",
      width: "25%",
      render: (_, record) => (
        <Space size="middle">
          <div className="action" style={{ backgroundColor: "#be4d25" }}>
            {data.length >= 1 ? (
              <Popconfirm
                title="Xóa bài viết?"
                onConfirm={() =>
                  handleDelete({ id: record.id, postId: record.postId })
                }
              >
                Xóa
              </Popconfirm>
            ) : null}
          </div>
          <div className="action" style={{ backgroundColor: "#1890ff" }}>
            {data.length >= 1 ? (
              <Popconfirm
                title="Khóa bài viết?"
                onConfirm={() =>
                  handleBlock({ id: record.id, postId: record.postId })
                }
              >
                Khóa
              </Popconfirm>
            ) : null}
          </div>
        </Space>
      ),
    },
  ];
  const [data, setData] = useState([]);
  const listReport = async () => {
    try {
      const res = await sendGet("/api/report");
      if (res.status === 200) {
        const result = [];
        for (let i = 0; i < res.data?.length; i++) {
          const test = {
            id: res.data[i]._id,
            postId: res.data[i]?.post?._id,
            key: i + 1,
            post: res.data[i]?.post?.title,
            link: res.data[i]?.post?._id,
            author: `${res.data[i]?.author?.name}-${res.data[i]?.author?.email}`,
            content: res.data[i]?.content,
            user: `${res.data[i]?.reported_by?.name}-${res.data[i]?.reported_by?.email}`,
            time: res.data[i]?.reported_at,
          };
          result.push(test);
        }
        setData(result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    listReport();
  }, []);

  const handleDelete = async ({ id, postId }) => {
    const res = await sendPut("/api/report", {
      reportId: id,
      postId: postId,
      command: "DELETE",
    });
    // console.log(res);
    if (res.status === 200) {
      message.success("Xử lí bài viết thành công");
      await listReport();
    } else {
      message.error("Xử lí bài viết thất bại !!!");
    }
  };
  const handleBlock = async ({ id, postId }) => {
    const res = await sendPut("/api/report", {
      reportId: id,
      postId: postId,
      command: "BLOCK",
    });
    if (res.status === 200) {
      message.success("Xử lí bài viết thành công");
      await listReport();
    } else {
      message.error("Xử lí bài viết thất bại !!!");
    }
  };
  return (
    <>
      <div className="ManagerUser-wrapper">
        <h1>Bài viết báo cáo</h1>
        <Table
          columns={columns}
          dataSource={data}
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
