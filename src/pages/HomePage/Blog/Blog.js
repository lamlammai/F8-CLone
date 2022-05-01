import React from "react";
import "./Blog.scss";
import "../StudyRoute/StudyRoute.scss";
import Layout from "../../../component/Layout/Basic/Layout";
import { Link } from "react-router-dom";
import { Tabs } from "antd";
import BlogItem from "./BlogItem";

const topic = [
  { name: "Front-end / Mobile Apps", link: "Frontend" },
  { name: "Back-end / DevOps", link: "Backend" },
  { name: "FullStack", link: "FullStack" },
  { name: "UI / UX / Design", link: "UIUX" },
  { name: "Others", link: "Others" },
];
const { TabPane } = Tabs;
export default function Blog() {
  document.title = "Danh sách các bài viết về IT";
  return (
    <>
      <Layout>
        <div className="StudyRoute-wrapper">
          <section className="Main-row">
            <div className="Main-left">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Phù hợp với bạn" key="1">
                  <div className="Blog-wrapper">
                    <BlogItem />
                  </div>
                </TabPane>
              </Tabs>
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
