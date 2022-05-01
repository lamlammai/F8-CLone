import React, { lazy } from "react";
import "./Learning.scss";
import Layout from "../../../component/Layout/Basic/Layout";

const LearningItem = lazy(() =>
  import("../../../component/LearningItem/LearningItem")
);
const UnstudyCourses = lazy(() =>
  import("../../../component/UnstudyCourse/UnstudyCourse")
);
function Learning() {
  document.title = "Danh sách các khóa học tại Learn IT";
  const course = localStorage.getItem("courses");
  const Token = localStorage.getItem("accessToken");
  return (
    <>
      <Layout>
        <div className="Learning-wrapper">
          <section>
            <h1>Khóa học</h1>
            <p>
              Các khóa học được thiết kế phù hợp cho cả người mới, miễn phí, nội
              dung dễ hiểu.
            </p>
            {Token ? (
              <>
                <h2>Khóa đang học</h2>
                <div className="LearingList">
                  {course === "[]" ? (
                    <p>Bạn chưa đăng kí khóa học nào</p>
                  ) : (
                    <LearningItem />
                  )}
                </div>
              </>
            ) : null}
            <h2>Tất cả khóa học</h2>
            <div className="LearingList CourseList">
              <UnstudyCourses />
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
export default Learning;
