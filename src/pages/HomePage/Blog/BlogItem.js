/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, useRouteMatch } from "react-router-dom";
import { sendGet, sendPut } from "../../../utils/api/index";
import { message, Skeleton } from "antd";
import { getItem } from "../../../utils/storage";
import logo from "../../../utils/logo.png";
import Report from "./Report";
function BlogItem() {
  let match = useRouteMatch();
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(2);
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const [, setCopied] = useState(false);
  const user = getItem("user") ? JSON.parse(getItem("user")) : {};
  const formatterDate = new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const formatterTime = new Intl.DateTimeFormat("vi-VN", {
    hour: "2-digit",
    minute: "numeric",
  });
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
  const listBlog = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const res = await sendGet(`/api/blog?limit=${limit}`);
      if (res.status === 200) {
        setData(res.data);
        setLoading(false);
        setLimit(limit + 1);
      } else {
        setLoading(false);
        message.error("Cập nhật khóa học thất bại");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    // setLimit(limit + 1);
    listBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const Savepost = async (values) => {
    if (!user) {
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
  if (!Object.keys(data).length)
    return (
      <>
        <p>Hiện chưa có bài viết</p>
      </>
    );
  return (
    <>
      <InfiniteScroll
        style={{ overflowX: "hidden" }}
        dataLength={data.length}
        next={listBlog}
        hasMore={true}
        loader={<Skeleton active />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! Bạn đang ở cuối trang!</b>
          </p>
        }
      >
        {data?.map((item, index) => (
          <div className="Blog-item" key={index}>
            <div className="Blog-header">
              <div className="Blog-author">
                <img
                  alt="blog"
                  src={item.author?.avatar ? item.author?.avatar : logo}
                />
                <span>
                  {item.author?.name ? item.author?.name : <p>Unkhown</p>}
                </span>
              </div>
              <div className="Blog-action">
                <i className="fas fa-ellipsis-h">
                  <ul>
                    <li onClick={() => Savepost(item?._id)}>
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
                <Link to={`${match.url}/${item._id}`}>
                  <h3>{item.title}</h3>
                </Link>
                <p
                  className="sub-title"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
                <div className="Blog-time">
                  <span>
                    <i class="far fa-calendar-alt"></i>
                    {formatterDate.format(Date.parse(item.created_at))}
                  </span>
                  <span>
                    <i class="fas fa-hourglass-half"></i>
                    {formatterTime.format(Date.parse(item.created_at))}
                  </span>
                </div>
              </div>
              <Link to={`${match.url}/${item._id}`}>
                <div
                  className="Blog-img"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
              </Link>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
}

export default BlogItem;
