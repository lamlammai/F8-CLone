import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import "./Statistics.scss";
import TodoWork from "../../../../component/Admin/TodoList/TodoWork";
import Chart from "../../../../component/Admin/Chart/Chart";
import { sendGet } from "../../../../utils/api";

function Statistics() {
  const [user, setUser] = useState(115);
  const [comment, setComment] = useState(0);
  const [course, setCourse] = useState(4);
  const [lesson, setLesson] = useState(0);
  useEffect(() => {
    const listUser = async () => {
      const user = await sendGet("/api/user/manage/");
      if (user.status === 200) {
        setUser(user.data.length);
      }
    };
    const listComment = async () => {
      const rescmt = [];
      const blog = await sendGet(`/api/blog`);
      if (blog.status === 200) {
        for (let i = 0; i < blog.data?.length; i++) {
          const cmt = await sendGet(`/api/comment/${blog.data[i]._id}`);
          if (cmt.status === 200) {
            rescmt.push({
              a: cmt.data?.length,
            });
          }
        }
        const cmt = rescmt.reduce(
          (total, currentValue) => (total = total + currentValue.a),
          0
        );
        setComment(cmt);
      }
    };
    const Course = async () => {
      const course = await sendGet("/api/course/");
      if (course.status === 200) {
        setCourse(course.data);
        const tmp = [];
        for (let i = 1; i < course.data?.length; i++) {
          tmp.push({
            a: course.data[i].lesson?.length,
          });
        }
        const result = tmp.reduce(
          (total, currentValue) => (total = total + currentValue.a),
          0
        );
        setLesson(result);
      }
    };
    listUser();
    listComment();
    Course();
  }, []);
  return (
    <>
      <h1 style={{ fontSize: "25px", fontWeight: "600" }}>Hoạt động</h1>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        className="Statistics-Row"
      >
        <Col
          className="gutter-row Statistics-col Statistics-col"
          span={12}
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
        >
          <div className="Card" style={{ background: "rgb(23 162 184 / 45%)" }}>
            <i className="icon far fa-comments"></i>

            <div className="main">
              <h1>{comment}</h1>
              <h3>Comment</h3>
            </div>
          </div>
        </Col>
        <Col
          className="gutter-row Statistics-col"
          span={12}
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
        >
          <div className="Card" style={{ background: "rgb(40 167 69 / 54%)" }}>
            <i className="icon fas fa-thumbs-up"></i>
            <div className="main">
              <h1>{lesson}</h1>
              <h3>Bài học</h3>
            </div>
          </div>
        </Col>
        <Col
          className="gutter-row Statistics-col"
          span={12}
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
        >
          <div className="Card" style={{ background: "rgb(255 193 7 / 55%)" }}>
            <i className="icon fas fa-laptop-code"></i>
            <div className="main">
              <h1>{course?.length}</h1>
              <h3>Khóa học</h3>
            </div>
          </div>
        </Col>
        <Col
          className="gutter-row Statistics-col"
          span={12}
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
        >
          <div className="Card" style={{ background: "rgb(220 53 69 / 66%)" }}>
            <i className="icon fas fa-user-graduate"></i>
            <div className="main">
              <h1>{user}</h1>
              <h3>User</h3>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={7} xl={7}>
          <h3 style={{ "text-align": "center", "margin-top": "30px" }}>Top Blogger</h3>
          <TodoWork />

        </Col>
        <Col xs={24} sm={24} md={24} lg={17} xl={17}>
          <h3 style={{ "text-align": "center", "margin-top": "30px" }}>Thống kê số học viên từng khóa học</h3>
          <Chart />

        </Col>
      </Row>
    </>
  );
}

export default Statistics;
