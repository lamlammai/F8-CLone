import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sendGet, sendPost } from "../../utils/api";
import { getItem } from "../../utils/storage";

import "./interact.scss";
function Comment(props) {
  const params = useParams();
  const [avt, setAvatar] = useState({});
  const [show, setShow] = useState(true);
  const [content, setContent] = useState("");
  const user = getItem("user");
  const refreshToken = getItem("refreshToken");
  const handleSubmit = async (values) => {
    if (user === "" || refreshToken === "") {
      message.error("Hãy đăng nhập để bình luận nhé");
    } else {
      const data = {
        content: content,
      };
      await sendPost(`/api/comment/${params.link}`, data);
      const res = await sendGet(`/api/comment/${params.link}`);
      if (res.status === 200) {
        props.listComment();
      } else {
        message.error("Không thể đăng bình luận");
      }
    }
    setContent("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  async function getProfile() {
    const res = await sendGet("/api/user/profile");
    setAvatar(res.data);
  }
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <>
      <div className="comment-user">
        <div className="comment-text">
          <img alt="ảnh avt" src={avt.avatar} />
          <input
            onClick={() => setShow(false)}
            placeholder={props.text}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className={show ? "comment-btn" : "comment-btn show"}>
          <i class="fas fa-code">
            <span>Chèn code</span>
          </i>
          <div>
            <button className="cancel" onClick={() => setShow(true)}>
              Hủy
            </button>
            <button className="submit" onClick={handleSubmit}>
              Bình luận
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
