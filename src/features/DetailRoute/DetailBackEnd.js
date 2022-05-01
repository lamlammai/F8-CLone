import "./Detail.scss";
import React from "react";
import Layout from "../../component/Layout/Basic/Layout";
import routemap from "../../utils/mapback.png";
function DetailBackEnd() {
  const DetailBackEnd = [
    {
      title: "1. HTML and CSS",
      description:
        "Để học web Front-end chúng ta luôn bắt đầu với ngôn ngữ HTML và CSS, đây là 2 ngôn ngữ có mặt trong mọi website trên internet. Trong khóa học này F8 sẽ chia sẻ từ những kiến thức cơ bản nhất. Sau khóa học này bạn sẽ tự làm được 2 giao diện websites là The Band và Shopee.",
      course: [
        {
          link: "http://learnit-kma.me/course/6229fe5d6b1c671d838f5c09",
          img: "https://res.cloudinary.com/learnit2022/image/upload/v1646919253/pcmlxhkcapnsq0wdliz5.jpg",
          name: "HTML, CSS từ Zero đến Hero ",
          sub_name:
            "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
        },
      ],
    },
    {
      title: "2. Ngôn ngữ lập trình",
      description:
        "Có rất nhiều ngôn ngữ để bạn có thể làm việc với Back-end, tuy nhiên bạn không cần phải học tất cả. Bạn chỉ cần tập trung vào 1 ngôn ngữ là có thể làm việc tốt. Tại đây chúng ta sẽ bắt đầu với ngôn ngữ lập trình Javascript.",
      course: [
        {
          link: "http://learnit-kma.me/course/6229fee56b1c671d838f5c11",
          img: "https://res.cloudinary.com/learnit2022/image/upload/v1646919379/igo0c2gveb6qcdgbv5jv.jpg",
          name: "JavaScript Cơ Bản",
          sub_name:
            "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.            ",
        },
        {
          link: "http://learnit-kma.me/course/6229ff616b1c671d838f5c15",
          img: "https://res.cloudinary.com/learnit2022/image/upload/v1646919518/jwzmmktj6lexczunipuu.jpg",
          name: "JavaScript nâng cao",
          sub_name:
            "Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...",
        },
      ],
    },
    {
      title: "3. Libraries and Frameworks",
      description:
        "Một ứng dụng Back-end hiện đại có thể rất phức tạp, việc sử dụng code thuần (tự tay code từ đầu) không phải là một lựa chọn tốt. Vì vậy các Libraries và Frameworks ra đời nhằm đơn giản hóa, tiết kiệm thời gian và tiền bạc để nhanh chóng tạo ra được sản phẩm cuối cùng.",
      course: [
        {
          link: "http://learnit-kma.me/course/6229ffcd6b1c671d838f5c1d",
          img: "https://res.cloudinary.com/learnit2022/image/upload/v1646919610/acdbqq2atunj8tgu2dpf.jpg",
          name: "Node & ExpressJS",
          sub_name:
            "Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.",
        },
      ],
    },
  ];
  return (
    <>
      <Layout>
        <div className="Detail-wrapper">
          <div className="StudyRoute-wrapper">
            <section className="Main-row">
              <div className="Main-left">
                <h1>Back-end</h1>
                <p>
                  Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là
                  Front-end và Back-end. Front-end là phần giao diện người dùng
                  nhìn thấy và có thể tương tác. Back-end là nơi xử lý dữ liệu
                  và lưu trữ. Vì vậy, nhiệm vụ của lập trình viên Back-end là
                  phân tích thiết kế dữ liệu, xử lý logic nghiệp vụ của các chức
                  năng trong ứng dụng
                </p>
                <p>
                  Tại Việt Nam, lương trung bình cho lập trình viên front-end
                  vào khoảng <strong>19.000.000đ</strong>/ tháng
                </p>
                <p>
                  Dưới đây là các khóa học F8 đã tạo ra dành cho bất cứ ai theo
                  đuổi sự nghiệp trở thành một lập trình viên
                  <strong>Back-end</strong>.
                </p>
                <blockquote>
                  <i class="fas fa-quote-left"></i>
                  Các khóa học có thể chưa đầy đủ, chúng mình vẫn đang nỗ lực
                  hoàn thiện trong thời gian sớm nhất.
                </blockquote>
                {DetailBackEnd.map((item) => (
                  <>
                    <div className="Detail-content">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                      <div className="Detail-course Main-left-body">
                        {item.course.map((i) => (
                          <div className="card-route">
                            <img alt="Khóa học" src={i.img} />
                            <div className="card-body">
                              <a href={i.link} target="_blank" rel="noreferrer">
                                <span>{i.name}</span>
                              </a>
                              <p>{i.sub_name}</p>
                              <a href={i.link} target="_blank" rel="noreferrer">
                                <button className="btn-info">
                                  Xem khóa học
                                </button>
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div
                className="Main-right"
                style={{ paddingLeft: "19px", paddingRight: "19px" }}
              >
                <div className="Main-right-body">
                  <div className="DetaiInfo-wrapper">
                    <div
                      className="Detail-info"
                      style={{ padding: "30px 16px" }}
                    >
                      <h3>
                        Ai cũng có thể tham gia khóa học Web Back-End tại LEARN
                        IT, tại đây phù hợp với mọi người muốn học nghề lập
                        trình, một số đối tượng cụ thể:
                      </h3>
                      <p>
                        {" "}
                        <i class="fas fa-user-check"></i>
                        Bạn là sinh viên đang học ở các trường Đại học, muốn bổ
                        sung thêm kiến thức và có nền tảng lập trình vững vàng
                      </p>
                      <p>
                        {" "}
                        <i class="fas fa-user-check"></i>
                        Những người chuyển từ ngành nghề khác sang ngành IT để
                        có công việc tốt hơn
                      </p>
                      <p>
                        {" "}
                        <i class="fas fa-user-check"></i>
                        Các bạn đang băn khoăn không biết chọn nghề nào dành cho
                        mình, đang muốn được định hướng và hỗ trợ để có lựa chọn
                        đúng đắn cho mình
                      </p>
                      <p>
                        {" "}
                        <i class="fas fa-user-check"></i>Đối tượng muốn cập nhật
                        thêm một số công nghệ mới.
                      </p>
                    </div>
                    <a
                      href="https://roadmap.sh/backend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img alt="mapFront" src={routemap} />
                    </a>
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
export default DetailBackEnd;
