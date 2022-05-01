import React, { useEffect } from "react";
import { Link, useHistory, useParams, useLocation } from "react-router-dom";
import "./LayoutLesson.scss";
import { message, Tabs, Skeleton } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useState } from "react/cjs/react.development";
import classNames from "classnames";
import logo from "../../utils/icon.png";
import Tutorial from "./component/Tutorial/Tutorial";
import { sendGet } from "../../utils/api";
const { TabPane } = Tabs;
function LayoutLesson() {
  const params = useParams();
  const [zoom, setZoom] = useState(false);
  const [view, setView] = useState(false);
  const [data, setData] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("Học lập trình cùng LearIT");
  const [count, setCount] = useState(1);
  const [active, setActive] = useState(false);
  const [complete, setComplete] = useState([]);
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
  const handleZoom = () => {
    setZoom(!zoom);
    setView(!view);
  };
  const path = useLocation();
  let history = useHistory();
  const getInfoLesson = async () => {
    const res = await sendGet(`/api/user/process/${params.link}`);
    if (res.status === 200) {
      setData(res.data);
      setCount(res.count);
      setComplete(res.complete);
    } else message.error("Thử lại sau.");
  };
  const getNameCourse = async () => {
    const res = await sendGet(`/api/course/${params.link}`);
    if (res.status === 200) {
      setName(res.data.name);
    } else message.error("Thử lại sau.");
  };
  const NextLesson = (e) => {
    for (let i = 0; i < e.length; i++) {
      if (e[i]?._id === params.id) {
        // if (i >= e.length) {
        //   message.success("Bài 1");
        // }
        const key = i + 1;
        if(e[key]?.status === true){
          history.push(`/learn/${params.link}/${e[key]?._id}`);
        }
        else{
          setActive(!active)
        }
        
      }
    }
  };
  const PreLesson = (e) => {
    for (let i = 0; i < e.length; i++) {
      if (e[i]?._id === params.id) {
        const key = i - 1;
          history.push(`/learn/${params.link}/${e[key]?._id}`);
      }
    }
  };
  useEffect(() => {
    getInfoLesson();
    getNameCourse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  if (!Object.keys(data).length) return <Skeleton />;
  return (
    <>
      <div className="LayoutLesson-wrapper">
        <header>
          <div className="Header-left">
            <i
              class="fas fa-chevron-left"
              onClick={() => history.push("/")}
            ></i>
            <Link to="/">
              <img alt="logo" src={logo} />
            </Link>

            <p className="title">{name}</p>
          </div>
          <Tutorial />
        </header>
        <div className="container">
          <section className={classNames("container-left", { view: view })}>
            <div className="content-lesson">
              <i
                className="fas fa-chevron-left"
                onClick={() => PreLesson(data)}
                hidden={params.id === data[0]?._id ? true : false}
              ></i>
              {data?.map((element) =>
                element._id === params.id ? (
                  <iframe
                    src={element.link}
                    title="LEARNIT video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                  ></iframe>
                ) : null
              )}
              <i
                className="fas fa-chevron-right"
                onClick={() => NextLesson(data)}
                hidden={params.id === data[data.length - 1]?._id ? true : false}
                style={{"pointer-events": active}}
              ></i>
              <div onClick={handleZoom}>
                <MenuFoldOutlined />
                <span className="text">Xem lộ trình</span>
              </div>
            </div>
            <div className="sub-content-lesson">
              <div className="sub-lesson-main">
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Nội dung" key="0" className="Content-reponsive">
                    <div className="content">
                      <div className="process">
                        <div>
                          <p>{name}</p>
                          <p>
                            Hoàn thành {count}/{data.length} bài học
                          </p>
                        </div>
                      </div>
                      <div className="part">
              {data?.map((i) => (
                <div className="lesson">
                  {path.pathname === `/learn/${params.link}/${i._id}` ? (
                    <>
                      <div
                        className="lesson-main "
                        style={{ backgroundColor: "#FCDCD3" }}
                      >
                        <div className="lesson-name">
                          <i class="fas fa-check"></i>
                          <Link to={i._id}><p>
                            {i.name}
                          </p></Link>
                        </div>
                        <div className="lesson-time">
                          <i class="fas fa-play-circle"></i>
                        </div>
                      </div>
                      <div
                        className="exercise"
                        style={{ "pointer-events": "auto" }}
                      >
                        {i.excercises?.length === 0 ? null : <h3>Bài tập</h3>}
                        {i.excercises?.map((index) => (
                          <>
                            <p>
                              <Link to={`/exercise/${index._id}`}>
                                {complete.includes(index._id) ? (
                                  <i class="fa fa-check" style={{margin: "0px"}} aria-hidden="true"></i>
                                ) : (
                                  i.excercises?.indexOf(index) + 1
                                )}
                              </Link>
                            </p>
                          </>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="lesson-main"
                        style={
                          i.status
                            ? { "pointer-events": "auto" }
                            : {
                              "pointer-events": "none",
                              backgroundColor: "#f1f1f1",
                            }
                        }
                      >
                        <div className="lesson-name ">
                          <i
                            class={i.status ? "fas fa-check" : "fas fa-lock"}
                          ></i>
                         <Link to={i._id}> <p>
                            {i.name}
                          </p></Link>
                        </div>
                        <div className="lesson-time">
                          <i class="fas fa-play-circle"></i>
                        </div>
                      </div>
                      <div
                        className="exercise"
                        style={{ "pointer-events": "none" }}
                      >
                        {i.excercises?.length === 0 ? null : <h3>Bài tập</h3>}
                        {i.excercises?.map((index) => (
                          <>
                            <p>
                              <Link to={`/exercise/${i._id}`}>
                                {i.excercises?.indexOf(index) + 1}
                              </Link>
                            </p>
                          </>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
                    </div>
                  </TabPane>
                  <TabPane tab="Tổng quan" key="1">
                    <div className="overview">
                      <div className="title">
                        <p>
                          Tham gia nhóm{" "}
                          <a
                            href="https://www.facebook.com/groups/649972919142215"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Học lập trình tại Learn IT
                          </a>
                          trên Facebook để cùng nhau trao đổi trong quá trình
                          học tập ❤️
                        </p>
                        <p>
                          Các bạn subscribe kênh Youtube{" "}
                          <a
                            href="https://www.youtube.com/c/F8VNOfficial"
                            target="_blank"
                            rel="noreferrer"
                          >
                            LI Official
                          </a>{" "}
                          để nhận thông báo khi có các bài học mới nhé ❤️
                        </p>
                      </div>
                      <div className="answer">
                        <div className="share">
                          <p>Chia sẻ</p>
                          {/* sau ?u là đường link mình muốn share */}
                          <a
                            style={{ backgroundColor: "#4080ff" }}
                            href="https://www.facebook.com/sharer/sharer.php?u=http://learnit-kma.me/learn/reactjs4"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          {/* sau su là tiêu đề saubody là đường link chia sẻ */}
                          <a
                            style={{ backgroundColor: "#F47425" }}
                            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to&su=Tiêu đề &body=http://learnit-kma.me/learn/reactjs4"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i class="fas fa-envelope"></i>
                          </a>
                          {/* sao chép */}
                          <button
                            style={{ backgroundColor: "#666666" }}
                            onClick={copy}
                          >
                            <i class="fas fa-link"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tab="Ghi chú" key="2">
                    <div className="note">
                      <div>
                        <p>Tạo ghi chú tại 00:09</p>
                        <i class="fas fa-plus-circle"></i>
                      </div>
                    </div>

                    <div className="filter">
                      <select name="part" id="part">
                        <option value="Hiện tại">Trong chương hiện tại</option>
                        <option value="Tất cả">Trong tất cả các chương </option>
                      </select>
                      <select name="status" id="status">
                        <option value="Mới nhất">Mới nhất</option>
                        <option value="Cũ nhất">Cũ nhất</option>
                      </select>
                    </div>
                    <div className="note-result">
                      <img
                        alt="Ghi chú"
                        src="https://fullstack.edu.vn/assets/images/no_note_yet.svg"
                      />
                      <h4>Bạn chưa có ghi chú nào</h4>
                      <p>Hãy ghi chép để nhớ những gì bạn đã học!</p>
                    </div>
                  </TabPane>
                  <TabPane tab="Liên quan" key="3">
                    <div className="involve">
                      <h4>
                        <a
                          href="http://learnit-kma.me/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          LEARN IT
                        </a>
                      </h4>
                      <p>Made with ❤ · Powered by KMA TEAM</p>
                    </div>
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </section>
          {/* right */}
          <section className={classNames("container-right", { zoom: zoom })}>
            <div className="process">
              <div>
                <p>{name}</p>
                <p>
                  Hoàn thành {count}/{data.length} bài học
                </p>
              </div>
              <MenuUnfoldOutlined onClick={handleZoom} />
            </div>
            <div className="part">
              {data?.map((i) => (
                <div className="lesson">
                  {path.pathname === `/learn/${params.link}/${i._id}` ? (
                    <>
                      <div
                        className="lesson-main "
                        style={{ backgroundColor: "#FCDCD3" }}
                      >
                        <div className="lesson-name">
                          <i class="fas fa-check"></i>
                          <Link to={i._id}><p>
                            {i.name}
                          </p></Link>
                        </div>
                        <div className="lesson-time">
                          <i class="fas fa-play-circle"></i>
                        </div>
                      </div>
                      <div
                        className="exercise"
                        style={{ "pointer-events": "auto" }}
                      >
                        {i.excercises?.length === 0 ? null : <h3>Bài tập</h3>}
                        {i.excercises?.map((index) => (
                          <>
                            <p>
                              <Link to={`/exercise/${index._id}`}>
                                {complete.includes(index._id) ? (
                                  <i class="fa fa-check" style={{margin: "0px"}} aria-hidden="true"></i>
                                ) : (
                                  i.excercises?.indexOf(index) + 1
                                )}
                              </Link>
                            </p>
                          </>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="lesson-main"
                        style={
                          i.status
                            ? { "pointer-events": "auto" }
                            : {
                              "pointer-events": "none",
                              backgroundColor: "#f1f1f1",
                            }
                        }
                      >
                        <div className="lesson-name ">
                          <i
                            class={i.status ? "fas fa-check" : "fas fa-lock"}
                          ></i>
                         <Link to={i._id}> <p>
                            {i.name}
                          </p></Link>
                        </div>
                        <div className="lesson-time">
                          <i class="fas fa-play-circle"></i>
                        </div>
                      </div>
                      <div
                        className="exercise"
                        style={{ "pointer-events": "none" }}
                      >
                        {i.excercises?.length === 0 ? null : <h3>Bài tập</h3>}
                        {i.excercises?.map((index) => (
                          <>
                            <p>
                              <Link to={`/exercise/${i._id}`}>
                                {i.excercises?.indexOf(index) + 1}
                              </Link>
                            </p>
                          </>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default LayoutLesson;
