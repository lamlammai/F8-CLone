import React, { useState, useEffect } from "react";
import { message, Popconfirm, Skeleton } from "antd";
import { sendDelete, sendGet, sendPut } from "../../../../utils/api";
import { useParams, useHistory } from "react-router-dom";
import "./Detail.scss";
function Detail() {
  const [data, setData] = useState([]);
  const params = useParams();
  const history = useHistory();
  const handleDelete = async (key) => {
    // eslint-disable-next-line no-unused-vars
    const del = await sendDelete(`/api/blog/${key}`);
    const res = await sendGet("/api/blog/queue/manage");
    if (res.status === 200) {
      setData(res.data);
    } else {
      message.error("Lỗi kĩ thuật");
    }
    history.push("/admin/unprocessedPost");
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
    history.push("/admin/unprocessedPost");
  };
  useEffect(() => {
    const handleView = async () => {
      const view = await sendGet(`/api/blog/queue/manage/${params.id}`);
      if (view.status === 200) {
        setData(view.data);
      } else {
        message.error("Lỗi kĩ thuật");
      }
    };
    handleView();
  }, [params.id]);
  if (!Object.keys(data).length)
    return (
      <>
        <Skeleton />
      </>
    );
  return (
    <>
      <div className="Detail-UnProcessBlog-wrapper">
        <div className="title">
          <h1>Kiểm duyệt bài viết</h1>
          <div className="action">
            <button>
              <Popconfirm
                title="Xóa bài viết?"
                onConfirm={() => handleDelete(data._id)}
              >
                Xóa
              </Popconfirm>
            </button>
            <button onClick={() => history.goBack()}>Trở về</button>
            <button onClick={() => handlePost(data._id, data)}>Duyệt</button>
          </div>
        </div>
        <h2>
          <strong>Tiêu đề: </strong> {data?.title}
        </h2>
        <h3>
          <strong>Tác giả: </strong> {data?.author?.name}
        </h3>
        {data?.img ? <img src={data?.img} alt="ảnh mô tả" /> : null}

        <div className="content">
          <p dangerouslySetInnerHTML={{ __html: data?.content }} />
        </div>
      </div>
    </>
  );
}

export default Detail;
