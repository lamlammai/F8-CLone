import React, { useEffect, useState } from "react";
import { message, Tabs } from "antd";
import Header from "../../component/Layout/Header/HeaderLayout";
import "./PostSaves.scss";
import { sendDelete, sendGet, sendPut } from "../../utils/api";
import { getItem } from "../../utils/storage";
import { Link } from "react-router-dom";

const { TabPane } = Tabs;
function PostSaves() {
  const [save, setSave] = useState([]);
  const [mypost, setMyPost] = useState([]);
  const user = getItem("user") ? JSON.parse(getItem("user")) : {};
  const Savepost = async () => {
    const res = await sendGet(`/api/user/store`);
    if (res.status === 200) {
      setSave(res.data);
    } else {
      message.error("Vui lòng thử lại sau");
    }
  };
  const formatterDate = new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const MyPost = async () => {
    const res = await sendGet(`/api/blog`);
    if (res.status === 200) {
      setMyPost(res.data);
    } else {
      message.error("Vui lòng thử lại sau");
    }
  };
  const post = [];
  for (let i = 0; i <= mypost.length; i++) {
    if (mypost[i]?.author?._id === user.id) {
      post.push({
        title: mypost[i].title,
        time: formatterDate.format(Date.parse(mypost[i].created_at)),
        id: mypost[i]._id,
        name: mypost[i].author?.name,
      });
    }
  }
  const handleDelete = async (key) => {
    const res = await sendPut(`/api/user/store/remove/`, { postId: key });
    if (res.status === 200) {
      await Savepost();
      message.success("Xóa thành công!");
    } else {
      message.error("Vui lòng thử lại sau!");
    }
  };
  const handleDeleteMyPosst = async (key) => {
    const res = await sendDelete(`/api/blog/${key}`);
    if (res.status === 200) {
      await MyPost();
      message.success("Xóa thành công!");
    } else {
      message.error("Vui lòng thử lại sau!");
    }
  };
  const result = [];
  for (let i = 0; i < save.length; i++) {
    result.push({
      id: save[i]?._id,
      title: save[i]?.title,
      created_at: formatterDate.format(Date.parse(save[i]?.created_at)),
      name: save[i].author?.name,
    });
  }
  useEffect(() => {
    Savepost();
  }, []);
  useEffect(() => {
    MyPost();
  }, []);
  return (
    <>
      <div className="Post-wrapper">
        <Header />
        <div className="Post-container">
          <h1>Bài viết của tôi</h1>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Đã xuất bản" key="1">
              {post?.length === 0 ? (
                <>
                  <p>Chưa có xuất bản nào.</p>
                  <p>
                    Bạn có thể <Link to="/new-post">viết bài mới</Link> hoặc{" "}
                    <Link to="/blog">đọc bài viết</Link> khác trên LEARN IT nhé.
                  </p>
                </>
              ) : (
                <ul>
                  {post?.map((item) => (
                    <>
                      <li>
                        <Link to={`/blog/${item.id}`}>
                          <h3>{item.title}</h3>
                        </Link>

                        <p>
                          <span>{item.time}</span> <strong>.</strong>Tác giả:
                          <span className="author-name">{item.name}</span>
                          <i class="fas fa-ellipsis-h">
                            <ul>
                              <li onClick={() => handleDeleteMyPosst(item.id)}>
                                Xóa
                              </li>
                              <li>
                                <Link to={`/edit-post/${item.id}`}> Sửa</Link>
                              </li>
                            </ul>
                          </i>
                        </p>
                      </li>
                    </>
                  ))}
                </ul>
              )}
            </TabPane>
            <TabPane tab="Đã lưu" key="2">
              {result?.length === 0 ? (
                <>
                  <p>Bạn chưa lưu bài viết nào</p>
                  <p>
                    Ghé <Link to="/blog">Blog</Link> để đọc thêm nhiều bài viết
                    hữu ích nhé.
                  </p>
                </>
              ) : (
                <ul>
                  {result?.map((item) => (
                    <>
                      <li>
                        <Link to={`/blog/${item.id}`}>
                          <h3>{item.title}</h3>
                        </Link>
                        <p>
                          <span>{item.created_at}</span> <strong>.</strong>Tác
                          giả:
                          <span className="author-name">{item.name}</span>
                          <i class="fas fa-ellipsis-h">
                            <ul>
                              <li onClick={() => handleDelete(item.id)}>Xóa</li>
                            </ul>
                          </i>
                        </p>
                      </li>
                    </>
                  ))}
                </ul>
              )}
            </TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default PostSaves;
