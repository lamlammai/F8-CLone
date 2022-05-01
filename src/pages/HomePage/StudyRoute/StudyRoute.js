import React from "react";
import "./StudyRoute.scss";
import { Tag } from "antd";
import Layout from "../../../component/Layout/Basic/Layout";
import StudyRouteItem from "./component/StudyRoute_Item";
const StudyRoutes = [
  {
    link: "/nhap-mon",
    img: "https://files.fullstack.edu.vn/f8-prod/learning-paths/2/61a0439062b82.png",
    name: "Bắt đầu",
    sub_name:
      "Trước tiên, chúng ta sẽ tìm hiểu về phương pháp học lập trình, kỹ năng đặt mục tiêu và các khái niệm kỹ thuật như: domain, client, server.",
  },
  {
    link: "/front-end",
    img: "https://files.fullstack.edu.vn/f8-prod/learning-paths/3/61a0439cc779b.png",
    name: "Front-end",
    sub_name:
      "Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.",
  },
  {
    link: "/back-end",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSqdfAj0DDvsZPbLghS37lFxv06oauk1U-iQ&usqp=CAU",
    name: "Back-end",
    sub_name:
      "Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học để trở thành lập trình viên Back-end nhé.",
  },
];
function StudyRoute() {
  document.title = "Lộ trình học cho người mới bắt đầu";
  return (
    <>
      <Layout>
        <div className="StudyRoute-wrapper">
          <section className="Main-row">
            <div className="Main-left">
              <h1>Lộ trình cho người mới</h1>
              <p>
                Cho dù bạn là người mới bắt đầu hay một lập trình viên đã có
                kinh nghiệm đang tìm kiếm các khóa học để nâng cao kỹ năng bản
                thân và đạt đến mức độ cao hơn trong lập trình, lộ trình học tập
                này sẽ giúp bạn đạt được mục tiêu của mình.
              </p>
              <div className="Main-left-body">
                {StudyRoutes.map((item, i) => (
                  <StudyRouteItem key={i} item={item} />
                ))}
              </div>
            </div>
            <div className="Main-right">
              <div className="Main-right-body">
                <Tag icon={<i class="fas fa-snowboarding"></i>} color="success">
                  Bắt đầu từ con số 0
                </Tag>
                <Tag icon={<i class="fas fa-key"></i>} color="processing">
                  Trải nghiệm từ dễ đến khó
                </Tag>
                <Tag icon={<i class="fas fa-star"></i>} color="error">
                  Khóa học miễn phí, đa dạng
                </Tag>
                <Tag
                  icon={<i class="fas fa-hourglass-half"></i>}
                  color="warning"
                >
                  Bài tập củng cố, chấm code tự động
                </Tag>
                <Tag icon={<i class="fas fa-users"></i>} color="cyan">
                  Trao đổi, học hỏi, chia sẻ kiến thức
                </Tag>
                <Tag
                  icon={<i class="fas fa-graduation-cap"></i>}
                  color="purple"
                >
                  Học được, làm được
                </Tag>
                <Tag icon={<i class="fas fa-building"></i>} color="orange">
                  Học lập trình để đi làm
                </Tag>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default StudyRoute;
