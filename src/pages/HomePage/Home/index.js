import React from "react";
import "./style.scss";
import Layout from "../../../component/Layout/Basic/Layout";
import Carousel from "../../../component/Carousel/Carousel";
import LearningItem from "../../../component/LearningItem/LearningItem";
import FeaturedPost from "../../../component/FeaturedPost/FeaturedPost";
import UnstudyCourses from "../../../component/UnstudyCourse/UnstudyCourse";
import FeaturedVideo from "../../../component/Video/FeaturedVideo";
import Xemtatca from "../../../component/Button/Xemtatca";
import { useTranslation } from "react-i18next";
function HomePage() {
  document.title = "Learn IT - Học lập trình để đi làm";
  const Token = localStorage.getItem("accessToken");
  const course = localStorage.getItem("courses");
  const { t } = useTranslation();
  return (
    <>
      <Layout>
        <div className="Home-wrapper">
          <section>
            <Carousel />
            <div className="content-right-body">
              {/* khóa đang học */}
              <p>
                <strong>145.436+</strong> {t("người khác cũng học")}
              </p>
              {Token ? (
                <div className="SectionList-wrapper">
                  <div className="SectionList-title">
                    <h2>{t("Khóa đang học")}</h2>
                    <Xemtatca data="/learning" />
                  </div>
                  {course === "[]" ? (
                    <div className="Course-main" style={{ height: "auto" }}>
                      <p>{t("Bạn chưa đăng kí khóa học nào")}</p>
                    </div>
                  ) : (
                    <div className="Course-main">
                      <LearningItem />
                    </div>
                  )}
                </div>
              ) : null}

              {/* Khóa chưa học */}
              <div className="SectionList-wrapper">
                <div className="SectionList-title">
                  <h2>{t("Tất cả khóa học")}</h2>
                  <Xemtatca data="/learning" />
                </div>
                <div className="UnstudyCourses-main">
                  <UnstudyCourses />
                </div>
              </div>
              <FeaturedPost />
              <FeaturedVideo />
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
export default HomePage;
