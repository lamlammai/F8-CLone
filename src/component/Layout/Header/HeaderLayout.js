import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import { Badge, Input, message } from "antd";
import { useTranslation } from "react-i18next";
import "./Header.scss";
import { clearToken, clearRefreshToken } from "../../../utils/storage/index";
import avt from "../../../utils/avt.jpg";
import logo from "../../../utils/logo.png";
import vn from "../../../utils/vn.png";
import en from "../../../utils/en.png";
import { sendGet } from "../../../utils/api";

function HeaderLayout(navClassList) {
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const Token = localStorage.getItem("accessToken");
  const value = localStorage.getItem("i18nextLng");
  const [Language, setLanguage] = useState(value || "vn");
  const [profile, setProfile] = useState({});
  const [keyword, setKeyword] = useState("");
  const [course, setCourse] = useState([]);
  const [blog, setBlog] = useState([]);
  const [video, setVideo] = useState([]);
  const { Search } = Input;
  function handleClick(lang) {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  }
  const SignOut = () => {
    clearToken();
    clearRefreshToken();
    localStorage.setItem("user", null);
    localStorage.setItem("courses", null);
    history.replace("/Signin");
  };
  async function getProfile() {
    const res = await sendGet("/api/user/profile");
    setProfile(res.data);
  }
  useEffect(() => {
    getProfile();
  }, []);
  function handleInputChange(e) {
    setKeyword(e.target.value);
  }
  async function handleSearch() {
    const res = await sendGet(`/api/search?key=${keyword}`);
    if (res.status === 201) {
      setCourse(res.data?.courses);
      setBlog(res.data?.blogs);
      setVideo(res.data?.videos);
    } else message.error("Vui lòng load lại trang");
  }

  return (
    <>
      <div
        className={`header-wrapper ${navClassList.navClassList}`}
        id="header-wrapper"
      >
        <div className="navbar-mb">
          <label for="navbar-check">
            <i className="fas fa-bars"></i>
          </label>
        </div>
        <input
          type="checkbox"
          hidden
          id="navbar-check"
          className="navbar-check"
        />
        <label for="navbar-check" className="navbar-overlay"></label>

        <div className="navbar-mobile">
          <label for="navbar-check" className="navbar-mobile-exit">
            <i class="fas fa-times"></i>
          </label>
          <ul className="nav-bar-mobile-list">
            <li className="user">
              <img src={profile?.avatar} alt="avt" />
            </li>
            <li>
              <Link to="/">
                {/* aria-curent="page"  */}
                <i className="fas fa-home"></i>
                <span>{t("Trang chủ")}</span>
              </Link>
            </li>
            <li>
              <Link to="/studyRoute">
                <i class="fas fa-walking"></i>
                <span>{t("Lộ trình")}</span>
              </Link>
            </li>
            <li>
              <Link to="/learning">
                <i class="fas fa-lightbulb"></i>
                <span>{t("Học")}</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <i class="fas fa-clipboard-list"></i>
                <span>{t("Blog")}</span>
              </Link>
            </li>
            <li>
              <Link to="/me/bookmark/posts">
                <i class="fas fa-bookmark"></i>
                <span>{t("Bài viết đã lưu")}</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <i class="fas fa-info-circle"></i>
                <span>{t("Giới thiệu")}</span>
              </Link>
            </li>
            <li>
              <Link to="/job">
                <i class="fas fa-users"></i>
                <span>{t("Cơ hội việc làm")}</span>
              </Link>
            </li>
            <li>
              <div onClick={SignOut}>
                <i class="fas fa-sign-out-alt"></i>
                <span>{t("Đăng xuất")}</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <h4 class="navbar-heading">{t("Học lập trình để đi làm")}</h4>
        </div>
        {/* khi ở trang viết blog thì ẩn thanh search */}
        <div className="navbar-search">
          <Search
            value={keyword}
            className="navbar-center"
            placeholder={t("Tìm kiếm khóa học, bài viết, video...")}
            allowClear
            onChange={handleInputChange}
            onSearch={handleSearch}
          // enterButton
          />
          <div className="search-box" hidden={keyword === "" ? true : false}>
            {blog.length === 0 && course.length === 0 && video.length === 0 ? (
              <p>
                <SearchOutlined /> Không có kết quả cho "{keyword}"
              </p>
            ) : (
              <>
                <SearchOutlined /> Kết quả tìm kiếm cho "{keyword}"
                {course.length !== 0 ? (
                  <div className="search-result">
                    <div className="search-result-title">
                      <p className="title">KHÓA HỌC</p>
                      <Link to={`/search/${keyword}`}>
                        {" "}
                        <p className="btn-search">Xem thêm</p>{" "}
                      </Link>
                    </div>
                    {course?.slice(0, 3)?.map((i) => (
                      <div className="search-result-main">
                        <img alt="course" src={i.img} />
                        <p>
                          <Link to={`/course/${i._id}`}>{i.name}</Link>
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
                {blog.length !== 0 ? (
                  <div className="search-result">
                    <div className="search-result-title">
                      <p className="title">BÀI VIẾT</p>
                      <Link to={`/search/${keyword}`}>
                        {" "}
                        <p className="btn-search">Xem thêm</p>{" "}
                      </Link>
                    </div>
                    {blog?.slice(0, 3)?.map((i) => (
                      <div className="search-result-main">
                        <img alt="course" src={i.img} />
                        <p>
                          <Link to={`/blog/${i._id}`}>{i.title}</Link>
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
                {video.length !== 0 ? (
                  <div className="search-result">
                    <div className="search-result-title">
                      <p className="title">VIDEOS</p>
                      <Link to={`/search/${keyword}`}>
                        <p className="btn-search">Xem thêm</p>
                      </Link>
                    </div>
                    {video?.slice(0, 3)?.map((i) => (
                      <div className="search-result-main">
                        <img alt="course" src={i?.course?.img} />
                        <p>
                          <a href={i.link} target="_blank" rel="noreferrer">
                            {i.name}
                          </a>
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </>
            )}
          </div>
        </div>

        <div className="navbar-action">
          {/* trang viêt blog thì ẩn ngôn ngữ */}
          <div className="language">
            <i class="fas fa-globe"></i>
            <span>{Language === "vn" ? "Việt Nam" : "English"}</span>
            <i className="fas fa-sort-down arrow">
              <ul>
                <div class="lang-1">
                  <li onClick={() => handleClick("vn")}>
                    <img alt="lang" src={vn} />
                    Tiếng Việt
                  </li>
                </div>
                <div class="lang-1">
                  <li onClick={() => handleClick("en")}>
                    <img alt="lang" src={en} />
                    English
                  </li>
                </div>
              </ul>
            </i>
          </div>
          {Token ? (
            <>
              <Badge dot={2}>
                <BellOutlined />
                <div className="noti">
                  <div className="title">
                    <h3>{t("Thông báo")}</h3>
                    <i class="fas fa-ellipsis-h"></i>
                  </div>
                  <div className="content">
                    <img
                      alt="logo"
                      src={logo}

                    />
                    <p>
                      {t(
                        "Chào mừng bạn đã gia nhập LI. Hãy luôn đam mê, kiên trì và theo đuổi mục tiêu tới cùng bạn nhé ❤️"
                      )}
                    </p>
                  </div>
                </div>
              </Badge>
              <div className="header-user">
                <img
                  src={profile?.avatar ? profile?.avatar : avt}
                  alt="avt"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = { avt };
                  }}
                />
                <ul className="list-info">
                  <li>
                    <div class="box-list-info">
                      {" "}
                      <i class="fas fa-user"></i>
                      <Link to="/account">{t("Tài khoản")}</Link>
                    </div>
                  </li>
                  <li>
                    <div class="box-list-info">
                      <i class="fas fa-newspaper"></i>
                      <Link to="/me/bookmark/posts">
                        {t("Bài viết của tôi")}
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class="box-list-info" onClick={SignOut}>
                      {" "}
                      <i class="fas fa-sign-out-alt"></i>
                      <Link to="#">{t("Đăng xuất")}</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="navbar-login">
              <Link to="/signin">{t("Đăng nhập")}</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default HeaderLayout;
