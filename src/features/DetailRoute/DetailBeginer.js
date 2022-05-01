import "./Detail.scss";
import React from "react";
// import { useParams } from "react-router-dom";
import Layout from "../../component/Layout/Basic/Layout";
function DetailBeginer() {
  // const { id } = useParams();
  const Detail = [
    {
      link: "http://learnit-kma.me/course/6229fcbc6b1c671d838f5c01",
      img: "https://res.cloudinary.com/learnit2022/image/upload/v1646918830/uur6xovhbdzptpubyrd4.jpg",
      name: "Kiến thức nền tảng",
      sub_name:
        "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
    },
    {
      link: "http://learnit-kma.me/course/6229fe5d6b1c671d838f5c09",
      img: "https://res.cloudinary.com/learnit2022/image/upload/v1646919253/pcmlxhkcapnsq0wdliz5.jpg",
      name: "Front-end",
      sub_name:
        "Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này Learn IT sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.",
    },
  ];
  return (
    <>
      <Layout>
        <div className="Detail-wrapper">
          <div className="StudyRoute-wrapper">
            <section className="Main-row">
              <div className="Main-left">
                <h1>Bắt đầu</h1>
                <p>
                  Nếu bạn đang theo đuổi ước mơ trở thành một lập trình viên
                  chuyên nghiệp, bạn nên dành từ 3 đến 6 tháng đầu để chuyên tâm
                  học và nắm chắc những kiến thức cơ bản nhất.
                </p>
                <p>
                  Trước tiên, trong phần này chúng mình sẽ chia sẻ cho bạn những
                  thông tin giúp bạn hiểu hơn về ngành IT, củng cố thêm động lực
                  và quyết tâm theo đuổi ngành của các bạn.
                </p>
                <p>
                  Sau khi hoàn tất phần này, hãy chuyển sang lựa chọn tiếp theo
                  là <strong>Front-end</strong> hoặc <strong>Back-end</strong>.
                </p>
                <blockquote>
                  <i class="fas fa-quote-left"></i>
                  Các khóa học có thể chưa đầy đủ, chúng mình vẫn đang nỗ lực
                  hoàn thiện trong thời gian sớm nhất.
                </blockquote>
                <div className="Detail-content">
                  <h2>Tìm hiểu về ngành IT</h2>
                  <p>
                    Để theo ngành IT - Phần mềm cần rèn luyện những kỹ năng nào?
                    Bạn đã có sẵn tố chất phù hợp với ngành chưa? Cùng thăm quan
                    các công ty IT và tìm hiểu về văn hóa, tác phong làm việc
                    của ngành này nhé các bạn.
                  </p>
                  <div className="Detail-course Main-left-body">
                    {Detail.map((item) => (
                      <div className="card-route">
                        <img alt="Khóa học" src={item.img} />
                        <div className="card-body">
                          <a href={item.link} target="_blank" rel="noreferrer">
                            <span>{item.name}</span>
                          </a>
                          <p>{item.sub_name}</p>
                          <a href={item.link} target="_blank" rel="noreferrer">
                            <button className="btn-info">Xem khóa học</button>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="Main-right">
                <div className="Main-right-body">
                  <div className="DetaiInfo-wrapper">
                    <div className="Detail-info">
                      <h2>CÓ PHẢI BẠN ĐÃ TỪNG NGHĨ RẰNG:</h2>
                      <p>
                        <i class="error fas fa-times-circle"></i>Lập trình viên
                        là một nghề rất xa vời?
                      </p>
                      <p>
                        <i class="error fas fa-times-circle"></i>Rất khó để có
                        thể học được nghề lập trình?
                      </p>
                      <p>
                        <i class="error fas fa-times-circle"></i>Công việc lập
                        trình chỉ dành cho những người rất giỏi toán?
                      </p>
                      <p>
                        <i class="error fas fa-times-circle"></i>Phải rất am
                        hiểu về công nghệ thì mới theo được lập trình?
                      </p>
                      <h2>HAY BẠN THÍCH HỌC LẬP TRÌNH NHƯNG KHÁ LO LẮNG:</h2>
                      <p>
                        <i class="question fas fa-question"></i> Mình đã không
                        học hành gì trong nhiều năm nên khó để đi học lại?
                      </p>
                      <p>
                        <i class="question fas fa-question"></i>Học 4 năm đại
                        học còn không xong thì làm sao học được trong vài tháng?
                      </p>
                      <p>
                        <i class="question fas fa-question"></i>Mình lớn tuổi
                        thế này thì bắt đầu có muộn quá không?
                      </p>
                      <p>
                        <i class="question fas fa-question"></i>Mình không biết
                        tiếng Anh thì không biết có học lập trình được không?
                      </p>
                      <p className="text">
                        <i class="tick fas fa-check"></i>Nhiều người cũng có suy
                        nghĩ giống bạn, nhưng sự thật thì để bắt đầu với nghề
                        lập trình thì dễ hơn bạn tưởng tượng nhiều.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default DetailBeginer;
