import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { sendGet, sendPut } from "../../../utils/api/index";
import { message } from "antd";
import Report from "./Report";
import { getItem } from "../../../utils/storage";
import logo from "../../../utils/icon.png";
function BlogItemTopic() {
  const [data, setData] = useState([]);
  const [, setActive] = useState(false);
  const user = getItem("user");
  const refreshToken = getItem("refreshToken");
  const [, setCopied] = useState(false);
  const params = useParams();
  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    message.success("Bạn đã copy link bài học!");
  }
  const formatterDate = new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const formatterTime = new Intl.DateTimeFormat("vi-VN", {
    hour: "2-digit",
    minute: "numeric",
  });
  useEffect(() => {
    const listBlog = async (key) => {
      const res = await sendGet(`/api/blog/topic/${params.id}`);
      if (res.status === 200) {
        setData(res.data);
      } else {
        message.error("Lỗi kĩ thuật!");
      }
    };
    listBlog();
  }, [params.id]);
  const Savepost = async (values) => {
    if (user === "" || refreshToken === "") {
      message.error("Vui lòng đăng nhập để lưu bài viết !!!");
      return;
    }
    const res = await sendPut(`api/user/store`, { postId: values });
    if (res.status === 200) {
      setActive(true);
      message.success("Lưu thành công!");
    } else {
      message.error("Bạn đã lưu bài viết");
    }
  };
  return (
    <>
      {data?.length !== 0 ? (
        <>
          {data?.map((item, index) => (
            <div className="Blog-item" key={index}>
              <div className="Blog-header">
                <div className="Blog-author">
                  <img
                    alt="avt"
                    src={item.author === null ? logo : item.author?.avatar}
                  />
                  <span>
                    {item.author === null ? <p>Unknown</p> : item.author?.name}
                  </span>
                </div>
                <div className="Blog-action">
                  <i className="fas fa-ellipsis-h">
                    <ul>
                      <li onClick={() => Savepost(item._id)}>
                        <i class="fas fa-bookmark"></i>Lưu bài viết
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/sharer/sharer.php?u=http://learnit-kma.me/learn/reactjs4"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="fab fa-facebook-f"></i>Chia sẻ lên FaceBook
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to&su=Tiêu đề &body=http://learnit-kma.me/learn/reactjs4"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="fas fa-envelope"></i>Chia sẻ tới Email
                        </a>
                      </li>
                      <li onClick={copy}>
                        <i class="fas fa-link"></i>Sao chép liên kết
                      </li>
                      <Report data={item._id} />
                    </ul>
                  </i>
                </div>
              </div>
              <div className="Blog-content">
                <div className="Blog-info">
                  <Link to={`/blog/${item._id}`}>
                    <h3>{item.title}</h3>
                  </Link>
                  <p
                    className="sub-title"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                  <div className="Blog-time">
                    <span>
                      <i class="far fa-calendar-alt"></i>
                      {formatterDate.format(Date.parse(item?.created_at))}
                    </span>
                    <span>
                      <i class="fas fa-hourglass-half"></i>
                      {formatterTime.format(Date.parse(item?.created_at))}
                    </span>
                  </div>
                </div>
                <Link to={`/blog/${item._id}`}>
                  <div
                    className="Blog-img"
                    style={{
                      backgroundImage: `url(${item.img ? item.img : logo})`,
                    }}
                  ></div>
                </Link>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>Chưa có bài viết thuộc chủ đề này</p>
      )}
    </>
  );
}

export default BlogItemTopic;
