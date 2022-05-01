import Layout from "../../component/Layout/Basic/Layout";
import React, { useState, useEffect } from "react";
import useScrollListener from "../../component/Scroll/ScrollX";
import Report from "../../pages/HomePage/Blog/Report";
import { message } from "antd";
import { Link, useParams } from "react-router-dom";
import "../../pages/HomePage/Blog/Blog.scss";
import "./DetailBlog.scss";
import DrawerComment from "../../component/DrawerComment/DrawerComment";
import { sendGet, sendPut } from "../../utils/api";
import { getItem } from "../../utils/storage";
import logo from "../../utils/logo.png";
const topic = [
  { name: "Front-end / Mobile Apps", link: "Frontend" },
  { name: "Back-end / DevOps", link: "Backend" },
  { name: "FullStack", link: "FullStack" },
  { name: "UI / UX / Design", link: "UIUX" },
  { name: "Others", link: "Others" },
];
function DetailBlog() {
  document.title = "Blog";
  const params = useParams();
  const [data, setData] = useState([]);
  const [, setActive] = useState(false);
  const [far, setReact] = useState(false);
  const [count, setCount] = useState(0);
  const [, setCopied] = useState(false);
  const user = getItem("user");
  const refreshToken = getItem("refreshToken");
  const reactHeart = () => {
    setReact(!far);
    // eslint-disable-next-line no-lone-blocks
    {
      far ? setCount(count - 1) : setCount(count + 1);
    }
  };
  const [cmt, setcmt] = useState(0);

  const callbackFunction = (childData) => {
    setcmt(childData);
  };
  const [navClassList, setNavClassList] = useState([]);
  const [navhidden, setNavhidden] = useState("SlideHidden");
  const scroll = useScrollListener();
  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    message.success("Bạn đã copy link bài viết!");
  }
  const Blog = async () => {
    const res = await sendGet(`/api/blog/${params.link}`);
    if (res.status === 200) {
      setData(res.data);
    } else {
      message.error("Cập nhật khóa học thất bại");
    }
  };
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
  useEffect(() => {
    Blog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const _classList = [];
    if (scroll.y > 60 && scroll.y - scroll.lastY > 0)
      _classList.push("hidden-header");
    setNavClassList(_classList);
    setNavhidden("SlideHidden");
  }, [scroll.y, scroll.lastY, navhidden]);

  return (
    <>
      <Layout navClassList={navClassList} navhidden={navhidden}>
        <div className="Detail-blog-wrapper Blog-wrapper">
          <div className="Detail-sub">
            <div>
              <h3>{data.author?.name ? data.author?.name : <p>Unknown</p>}</h3>
              <div>
                <span>
                  <i
                    className={far ? "fas fa-heart" : "far fa-heart"}
                    onClick={reactHeart}
                  ></i>
                  {count}
                </span>
                <span>
                  <DrawerComment parentCallback={callbackFunction} /> {cmt}
                </span>
              </div>
            </div>
          </div>
          <div className="Detail-blog-main Blog-item">
            <h1 className="title">{data.title}</h1>
            <div className="author Blog-header">
              <img
                alt="Ảnh đại diện"
                src={data.author?.avatar ? data.author?.avatar : logo}
              />
              <div className="info">
                <h3>
                  {data.author?.name ? data.author?.name : <p>Unknown</p>}
                </h3>
                <div className="time">
                  <span>{new Date(data?.created_at).toLocaleString()}</span>{" "}
                </div>
              </div>
              <div className="Blog-action">
                <i className="fas fa-ellipsis-h">
                  <ul>
                    <li onClick={() => Savepost(data?._id)}>
                      <i class="fas fa-bookmark"></i>Lưu bài viết
                    </li>
                    <li>
                      <a
                        style={{ color: "#323333" }}
                        href="https://www.facebook.com/sharer/sharer.php?u=http://learnit-kma.me/learn/reactjs4"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="fab fa-facebook-f"></i>Chia sẻ lên FaceBook
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ color: "#323333" }}
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
                    <Report data={data._id} />
                  </ul>
                </i>
              </div>
            </div>
            <div className="main-content">
              <p dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
            <div className="other-post">
              <h3>Một số bài viết khác</h3>
              <ul>
                <li>
                  <Link to="/document">
                    Tổng hợp tài liệu học lập trình cơ bản cho người mới
                  </Link>
                </li>
                <li>
                  <Link to="/blog/san-pham-cua-hoc-vien">
                    Tổng hợp sản phẩm của học viên
                  </Link>
                </li>
                <li>
                  <Link to="/blog/620b78142080146c4360dd56">
                    Bốn nguyên tắc khi học code
                  </Link>
                </li>
              </ul>
            </div>
            <div className="Blog-topic">
              <h3>Các chủ đề được đề xuất</h3>
              <div className="Topic-list">
                {topic.map((item) => (
                  <div className="Topic-item">
                    <Link to={`/topic/${item.link}`}>{item.name}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default DetailBlog;
