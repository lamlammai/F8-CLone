/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { message, Modal, Skeleton } from "antd";
import { useParams, useHistory } from "react-router-dom";
import "../DetailRoute/Detail.scss";
import "../../pages/HomePage/StudyRoute/StudyRoute.scss";
import "./InfoCourse.scss";
import Layout from "../../component/Layout/Basic/Layout";
import { sendGet, sendPut } from "../../utils/api";
function InfoCourse() {
  const [infoCourse, setinfoCourse] = useState({});
  const [lesson, setLesson] = useState({});
  const [text, setText] = useState(false);
  const [, setCourse] = useState({});
  const [goal1, setGoal] = useState();
  const [requirement1, setRequirement] = useState();
  const params = useParams();
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const course = JSON.parse(localStorage.getItem("courses"));

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const getInfoCourse = async () => {
    const res = await sendGet(`/api/course/${params.link}`);
    setinfoCourse(res.data);
    setGoal(res.data.goal.split("\n"));
    setRequirement(res.data.requirement.split("\n"));
  };

  async function getLesson() {
    const res = await sendGet(`/api/lesson/${params.link}`);
    setLesson(res.data);
  }

  async function AddCourse(values) {
    const res = await sendPut(`/api/user/course/`, { courseId: params.link });
    if (res.status === 200) {
      message.success("Đăng kí khóa học thành công");
      setCourse(res.data);
      localStorage.setItem("courses", JSON.stringify(res.data));
      return history.push(`/learn/${params.link}/${infoCourse.lesson[0]}`);
    }
    if (res.status === 400) {
      message.success("Bạn đã đăng kí khóa học. Học tiếp thôi!");
      return history.push(`/learn/${params.link}/${infoCourse.lesson[0]}`);
    }
    if (res.status  === 401) {  
      message.success("Bạn vui lòng đăng nhập để thực hiện chức năng này");
      return history.push("/signin");;
    }
  }

  useEffect(() => {
    course?.forEach((element) => {
      if (element._id === params.link) {
        setText(true);
      }
    });
    getInfoCourse();
    getLesson();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!Object.keys(infoCourse).length) return <Skeleton />;
  if (!Object.keys(lesson).length) return <Skeleton />;
  return (
    <>
      <Layout>
        <div className="InfoCourse-wrapper">
          <div className=" Detail-wrapper">
            <div className="StudyRoute-wrapper">
              <section className="Main-row">
                <div className="Main-left">
                  <h1>{infoCourse?.name}</h1>
                  <p>{infoCourse?.description}</p>
                  <div className="InfoCourse-content">
                    <h2>Bạn sẽ học được gì</h2>
                    <div className="target">
                      {goal1?.map((element) => (
                        <p>
                          <i class="fas fa-thumbtack"></i>
                          {element}
                        </p>
                      ))}
                    </div>
                    <h2>Nội dung khóa học</h2>
                    <div className="Course-main-title">
                      <ul>
                        <li>{lesson?.length} bài học</li>
                        {/* <li>2giờ 15 phút</li> */}
                      </ul>
                    </div>
                    <div className="Course-main">
                      {lesson?.length === 0 ? <p>Không có bài học</p> : <>{lesson?.map((i) => (
                        <div className="Course-lesson-item">
                          <p>
                            <i class="fas fa-play-circle"></i>
                            {lesson?.indexOf(i) + 1}. {i.name}
                          </p>
                        </div>
                      ))}</>}
                      
                    </div>
                    <h2>Yêu cầu</h2>
                    {requirement1?.map((item) => (
                      <p>
                        <i
                          class="fas fa-check"
                          style={{ marginRight: "9px", color: "#77b867" }}
                        ></i>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="Main-right">
                  <div className="Main-right-body">
                    <div className="Register-learn">
                      <div className="Coating">
                        <div
                          onClick={showModal}
                          className="Course-img"
                          style={{
                            backgroundImage: `url(${infoCourse?.img})`,
                          }}
                        >
                          <i class="fas fa-play-circle"></i>
                          <h4>Xem giới thiệu khóa học</h4>
                        </div>
                        <Modal
                          title="Giới thiệu khóa học"
                          visible={isModalVisible}
                          onOk={handleOk}
                          onCancel={handleCancel}
                          width={912}
                          footer={null}
                          destroyOnClose={true}
                        >
                          <iframe
                            width="100%"
                            height="400px"
                            src={lesson[0]?.link}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </Modal>
                      </div>
                      <p className="Price">Miễn phí</p>
                      <button onClick={() => AddCourse()}>
                        {text ? "Tiếp tục học" : "Đăng ký học"}
                      </button>
                      <p>
                        <i class="fas fa-seedling"></i>Trình độ cơ bản
                      </p>
                      <p>
                        <i class="fas fa-film"></i>Tổng số {lesson?.length} bài
                        học
                      </p>
                      <p>
                        <i class="fas fa-calendar-plus"></i>Học mọi lúc, mọi nơi
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default InfoCourse;
