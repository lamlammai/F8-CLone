import React, { useState } from "react";
import haha from "../../utils/icon/haha.png";
import like from "../../utils/icon/like.png";
import ReactCmt from "../../component/interact/react";
import { useParams } from "react-router-dom";
import { sendGet } from "../../utils/api/index";
import "./interact.scss";
import { message } from "antd";
import { useEffect } from "react";
function Reply() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [data, setData] = useState();
  const handleClick = () => {
    setShow(!show);
  };
  const ReactCMT = (childData) => {
    setCount(childData);
  };
  const params = useParams();

  useEffect(() => {
    const listComment = async () => {
      const res = await sendGet(`/api/comment/${params.link}`);
      if (res.status === 200) {
        setData(res.data);
      } else {
        message.error("Không thể đăng bình luận");
      }
    };
    listComment();
  }, [params.link]);
  return (
    <>
      {data?.map((item) => (
        <div className="comment-item comment-text">
          <img alt="ảnh avt" src={item?.authorAvatar} />
          <div className="comment-main">
            <div className="comment-content">
              <h3 className="name">{item?.authorName}</h3>
              <span>{item?.content}</span>
              <div>
                <img src={like} alt="react" />
                <img src={haha} alt="react" />
                <span>
                  {count}
                  {/* activeIndex === i ? count : null */}
                </span>
              </div>
            </div>
            <div className="comment-react">
              <ReactCmt parentCallback={ReactCMT} />
              <span onClick={handleClick}>Bình luận</span>
              <span className="time">20 giờ trước</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Reply;
