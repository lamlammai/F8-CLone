import React, { useState, useEffect } from "react";
import { Layout, Menu, Dropdown, Badge, Breadcrumb, message } from "antd";
import { Link, Switch, Route, useHistory, useLocation } from "react-router-dom";
import classNames from "classnames";
import { SearchOutlined } from "@ant-design/icons";
import "./LayoutAdmin.scss";
import logo from "../../../../utils/icon.png";
import avt from "../../../../utils/logo.png";
import {
  BellOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  PieChartOutlined,
  FolderOpenOutlined,
  UserSwitchOutlined,
  FileSyncOutlined,
} from "@ant-design/icons";
import CourseManagement from "../CourseManagement/CourseManagement";
import ManagerUser from "../MamagerUser/ManagerUser";
import Statistics from "../Statistics/Statistics";
import CourseDetail from "../CourseDetail/CourseDetail";
import PostManager from "../PostManager/PostManager";
import Report from "../Report/Report";
import UnprocessedPost from "../UnprocessedPost/UnprocessedPost";
import Detail from "../UnprocessedPost/Detail";
import {
  clearRefreshToken,
  clearToken,
  setItem,
} from "../../../../utils/storage";
import { sendGet } from "../../../../utils/api";

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

export default function LayoutAdmin() {
  const history = useHistory();
  const local = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [course, setCourse] = useState([]);
  const [blog, setBlog] = useState([]);
  const [video, setVideo] = useState([]);
  const [profile, setProfile] = useState({});
  // useEffect(() => {
  const handleCancel = () => {
    setActive(false);
  };
  // }, [active]);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const SignOut = () => {
    clearToken();
    clearRefreshToken();
    setItem("user", "");
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
    setActive(true);
    const res = await sendGet(`/api/search?key=${keyword}`);
    if (res.status === 201) {
      setCourse(res.data?.courses);
      setBlog(res.data?.blogs);
      setVideo(res.data?.videos);
    } else message.error("Vui l??ng load l???i trang");
  }
  const menu = (
    <Menu style={{ width: "190px" }}>
      <Menu.Item>
        <Link to="/">Trang ch???</Link>
      </Menu.Item>
      <Menu.Item icon={<DownOutlined />} disabled>
        <Link to="#">C??i ?????t</Link>
      </Menu.Item>
      <Menu.Item disabled>
        <Link to="#">H??? tr???</Link>
      </Menu.Item>
      <Menu.Item danger onClick={SignOut}>
        <p>????ng xu???t</p>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="LayoutAdmin-wrapper">
      <Layout>
        {/* sidebar */}
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <Link to="/admin">
              {collapsed ? (
                <img src={logo} alt="logo" style={{ width: "110px" }} />
              ) : (
                <img src={logo} alt="logo" />
              )}
            </Link>
          </div>

          <Menu mode="inline">
            {local.pathname === "/admin" ? (
              <Menu.Item
                key="1"
                icon={<PieChartOutlined />}
                className="ant-menu-item-selected"
              >
                <Link to="/admin"> Th???ng k??</Link>
              </Menu.Item>
            ) : (
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/admin"> Th???ng k??</Link>
              </Menu.Item>
            )}
            {local.pathname === "/admin/course" ? (
              <Menu.Item
                key="2"
                icon={<FileSyncOutlined />}
                className="ant-menu-item-selected"
              >
                <Link to="/admin/course">Kh??a h???c</Link>
              </Menu.Item>
            ) : (
              <Menu.Item key="2" icon={<FileSyncOutlined />}>
                <Link to="/admin/course">Kh??a h???c</Link>
              </Menu.Item>
            )}
            {local.pathname === "/admin/managerUser" ? (
              <Menu.Item
                key="3"
                icon={<UserSwitchOutlined />}
                className="ant-menu-item-selected"
              >
                <Link to="/admin/managerUser">Th??ng tin User</Link>
              </Menu.Item>
            ) : (
              <Menu.Item key="3" icon={<UserSwitchOutlined />}>
                <Link to="/admin/managerUser">Th??ng tin User</Link>
              </Menu.Item>
            )}

            <SubMenu
              key="sub3"
              icon={<FolderOpenOutlined />}
              title="Qu???n l?? B??i vi???t"
            >
              {local.pathname === "/admin/post" ? (
                <Menu.Item key="4" className="ant-menu-item-selected">
                  <Link to="/admin/post">T???t c??? b??i vi???t</Link>
                </Menu.Item>
              ) : (
                <Menu.Item key="4">
                  <Link to="/admin/post">T???t c??? b??i vi???t</Link>
                </Menu.Item>
              )}
              {local.pathname === "/admin/unprocessedPost" ? (
                <Menu.Item key="5" className="ant-menu-item-selected">
                  <Link to="/admin/unprocessedPost">Ch??a x??? l??</Link>
                </Menu.Item>
              ) : (
                <Menu.Item key="5">
                  <Link to="/admin/unprocessedPost">Ch??a x??? l??</Link>
                </Menu.Item>
              )}
              {local.pathname === "/admin/report" ? (
                <Menu.Item key="6" className="ant-menu-item-selected">
                  <Link to="/admin/report">B??o c??o</Link>
                </Menu.Item>
              ) : (
                <Menu.Item key="6">
                  <Link to="/admin/report">B??o c??o</Link>
                </Menu.Item>
              )}
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* header */}
          <Header
            className="site-layout-background"
            style={{ padding: 0, display: "flex" }}
          >
            <div className="header-left">
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: toggle,
                }
              )}
              <div
                className={classNames("search-wrapper", {
                  active: active,
                })}
              >
                <div className="input-holder">
                  <input
                    type="search"
                    className="search-input"
                    placeholder="T??m ki???m g?? ????..."
                    value={keyword}
                    onChange={handleInputChange}
                    onSearch={handleSearch}
                  />

                  <button onClick={handleSearch} className="search-icon">
                    <span></span>
                  </button>
                  <div
                    className="search-box"
                    hidden={keyword === "" ? true : false}
                  >
                    {blog.length === 0 &&
                    course.length === 0 &&
                    video.length === 0 ? (
                      <p>
                        <SearchOutlined /> Kh??ng c?? k???t qu??? cho "{keyword}"
                      </p>
                    ) : (
                      <>
                        <SearchOutlined /> K???t qu??? t??m ki???m cho "{keyword}"
                        {course.length !== 0 ? (
                          <div className="search-result">
                            <div className="search-result-title">
                              <p className="title">KH??A H???C</p>
                              <Link to={`/search/${keyword}`}>
                                {" "}
                                <p className="btn-search">Xem th??m</p>{" "}
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
                              <p className="title">B??I VI???T</p>
                              <Link to={`/search/${keyword}`}>
                                {" "}
                                <p className="btn-search">Xem th??m</p>{" "}
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
                                <p className="btn-search">Xem th??m</p>
                              </Link>
                            </div>
                            {video?.slice(0, 3)?.map((i) => (
                              <div className="search-result-main">
                                <img alt="course" src={i?.course?.img} />
                                <p>
                                  <a
                                    href={i.link}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
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
                <button className="close" onClick={handleCancel}></button>
              </div>
            </div>
            {/* Th??ng b??o avt */}
            <div className="header-right">
              {/* th??ng b??o */}
              <Badge dot>
                <BellOutlined style={{ fontSize: 16 }} />
                <div className="noti">
                  <p className="title">Th??ng b??o</p>
                  <p className="sub-title">M???i nh???t</p>
                  <ul className="list-noti">
                    <li>
                      <img alt="logo" src={avt} />
                      <p>
                        <strong>Nguy???n Duy</strong> ???? th??m 1 c??ng vi???c
                      </p>
                    </li>
                    <li>
                      <img alt="logo" src={avt} />
                      <p>
                        <strong>Mai Lam</strong> ???? b??o c??o m???t b??i vi???t
                      </p>
                    </li>
                    <li>
                      <img alt="avt" src={avt} />
                      <p>
                        <strong>B??ch H???ng</strong> ???? b??o c??o m???t b??i vi???t
                      </p>
                    </li>
                    <li>
                      <img alt="avt" src={avt} />
                      <p>
                        <strong>Nguy???n Duy</strong> ???? th??m 1 c??ng vi???c
                      </p>
                    </li>
                    <li>
                      <img alt="avt" src={avt} />
                      <p>
                        <strong>Mai Lam</strong> ???? b??o c??o m???t b??i vi???t
                      </p>
                    </li>
                    <li>
                      <img alt="avt" src={avt} />
                      <p>
                        <strong>B??ch H???ng</strong> ???? b??o c??o m???t b??i vi???t????
                        th??m 1 c??ng vi???c ????y l?? ti??u ????? d??i nh??, hihihihihihi
                        hhshshshahaha hahah ahaha haha hahaha
                      </p>
                    </li>
                    <li>
                      <img alt="avt" src={avt} />
                      <p>
                        <strong>Nguy???n Duy</strong> ???? th??m 1 c??ng vi???c ????y l??
                        ti??u ????? d??i nh??, hihihihihihi hhshshshahaha hahah ahaha
                        haha hahaha
                      </p>
                    </li>
                  </ul>
                </div>
              </Badge>
              {/* avt */}
              <Dropdown overlay={menu}>
                <Link
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <img src={profile.avatar} alt="avt" />
                </Link>
              </Dropdown>
            </div>
          </Header>
          {/*  Breadcrumb*/}
          <Breadcrumb style={{ margin: "14px 0 0 18px" }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/admin/course">Course</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="#">...</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Detail</Breadcrumb.Item>
          </Breadcrumb>
          {/* content */}
          <Content
            className="site-layout-background"
            style={{
              margin: "12px 12px",
              padding: "10px 24px",
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path="/admin" component={Statistics} />
              <Route exact path="/admin/course" component={CourseManagement} />
              <Route path="/admin/managerUser" component={ManagerUser} />
              <Route path="/admin/course/:id" component={CourseDetail} />
              <Route path="/admin/unprocessedPost/:id" component={Detail} />
              <Route path="/admin/post" component={PostManager} />
              <Route path="/admin/report" component={Report} />
              <Route
                path="/admin/unprocessedPost"
                component={UnprocessedPost}
              />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Learn IT ??2022 Created by KMA Team ???
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}
