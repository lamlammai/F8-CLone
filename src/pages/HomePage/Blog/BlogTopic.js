import React from "react";
import "./Blog.scss";
import "../StudyRoute/StudyRoute.scss";
import Layout from "../../../component/Layout/Basic/Layout";
import { Link, useLocation } from "react-router-dom";
import BlogItemTopic from "./BlogItemTopic";

const topic = [
  { name: "Front-end / Mobile Apps", link: "Frontend" },
  { name: "Back-end / DevOps", link: "Backend" },
  { name: "FullStack", link: "FullStack" },
  { name: "UI / UX / Design", link: "UIUX" },
  { name: "Others", link: "Others" },
];
export default function BlogTopic() {
  document.title = "Bài viết theo chủ đề";
  const local = useLocation();
  return (
    <>
      <Layout>
        <div className="StudyRoute-wrapper">
          <section className="Main-row">
            <div className="Main-left ">
              {local.pathname === "/topic/others" ? (
                <h2 style={{ fontSize: "28px", fontWeight: "900" }}>
                  Danh sách các bài viết khác
                </h2>
              ) : local.pathname === "/topic/Frontend" ? (
                <h2 style={{ fontSize: "28px", fontWeight: "900" }}>
                  Danh sách các bài viết về Front-End
                </h2>
              ) : local.pathname === "/topic/Backend" ? (
                <h2 style={{ fontSize: "28px", fontWeight: "900" }}>
                  Danh sách các bài viết về Back-End
                </h2>
              ) : local.pathname === "/topic/UIUX" ? (
                <h2 style={{ fontSize: "28px", fontWeight: "900" }}>
                  Danh sách các bài viết về UI/UX
                </h2>
              ) : local.pathname === "/topic/FullStack" ? (
                <h2 style={{ fontSize: "28px", fontWeight: "900" }}>
                  Danh sách các bài viết về FULLSTACK
                </h2>
              ) : (
                <h2 style={{ fontSize: "28px", fontWeight: "900" }}>
                  Danh sách các bài viết khác
                </h2>
              )}

              <div className="Blog-wrapper">
                <BlogItemTopic />
              </div>
            </div>
            <div className="Main-right">
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
          </section>
        </div>
      </Layout>
    </>
  );
}
