import React, { useEffect, useState } from "react";
import { Drawer, message } from "antd";
import "../interact/interact.scss";
import Comment from "../../component/interact/Comment";
import ReactCmt from "../../component/interact/react";
import "./DrawerComment.scss";
import { sendDelete, sendGet, sendPut } from "../../utils/api";
import { useParams } from "react-router-dom";
import haha from "../../utils/icon/haha.png";
import like from "../../utils/icon/like.png";
import { getItem } from "../../utils/storage";
const DrawerComment = (props) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState();
  const [active, setActive] = useState(null);
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [count, setCount] = useState(0);
  const [content, setContent] = useState();
  const params = useParams();
  const user = getItem("user") ? JSON.parse(getItem("user")) : {};
  const formatterDate = new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const handleClick = () => {
    setShow(!show);
  };
  const ReactCMT = () => {
    setCount();
  };
  const listComment = async () => {
    const res = await sendGet(`/api/comment/${params.link}`);
    if (res.status === 200) {
      setData(res.data);
      props.parentCallback(res.data.length);
    } else {
      message.error("Không thể đăng bình luận");
    }
  };
  const handleDelete = async (key) => {
    const res = await sendDelete(`/api/comment/${key}`);
    if (res.status === 200) {
      await listComment();
    }
    if (res.status === 400) {
      message.error("Bạn không thể xóa bình luận này");
    }
  };
  const showEditCmt = (key, value, content) => {
    if (user.id === value) {
      setActive(key);
      setHidden(false);
      setContent(content);
    } else {
      message.error("Bạn không thể sửa comment này!");
    }
  };
  const handleEdit = async (key, value) => {
    const res = await sendPut(`/api/comment/${key}`, { content: value });
    if (res.status === 200) {
      await listComment();
      setHidden(!hidden);
    }
    if (res.status === 400) {
      message.error("Bạn không thể chỉnh sửa bình luận này");
    }
  };
  useEffect(() => {
    listComment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <i class="far fa-comment" onClick={showDrawer} />
      <Drawer
        width="720px"
        placement="right"
        onClose={onClose}
        visible={visible}
        closeIcon={<i class="fas fa-times"></i>}
      >
        <h3>{data?.length} bình luận</h3>
        <Comment text="Viết bình luận..." listComment={listComment} />
        {data?.map((item) => (
          <div className="comment">
            <div className="comment-item comment-text">
              <img alt="ảnh avt" src={item?.authorAvatar} />
              <div className="comment-main">
                <div className="comment-content">
                  <h3 className="name">{item?.authorName}</h3>
                  <span>{item?.content}</span>
                  {active === item?.id ? (
                    <div className="editCmt" hidden={hidden}>
                      <input
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      ></input>
                      <button onClick={() => handleEdit(item?.id, content)}>
                        Gửi
                      </button>
                    </div>
                  ) : null}
                  <div>
                    <img src={like} alt="react" />
                    <img src={haha} alt="react" />
                    <span>{count}</span>
                  </div>
                </div>
                <div className="comment-react">
                  <ReactCmt parentCallback={ReactCMT} />
                  <span onClick={handleClick}>Bình luận</span>
                  <span className="time">
                    {formatterDate.format(Date.parse(item?.created_at))}
                  </span>
                </div>
              </div>
              <div className="active">
                <i className="fas fa-ellipsis-h">
                  <ul>
                    <li onClick={() => handleDelete(item?.id)}>Xóa</li>
                    <li
                      onClick={() =>
                        showEditCmt(item?.id, item?.authorId, item?.content)
                      }
                      key={item?.id}
                    >
                      Sửa
                    </li>
                  </ul>
                </i>
              </div>
            </div>
          </div>
        ))}
      </Drawer>
    </>
  );
};
export default DrawerComment;
