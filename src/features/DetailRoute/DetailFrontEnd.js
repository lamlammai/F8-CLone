import "./Detail.scss";
import React from "react";
// import { useParams } from "react-router-dom";
import Layout from "../../component/Layout/Basic/Layout";
import routemap from "../../utils/mapfront.png";
export default function DetailFrontEnd() {
  // const { id } = useParams();
  const Detail = [
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
        {
          link: "http://learnit-kma.me/course/6229fea76b1c671d838f5c0d",
          img: "https://res.cloudinary.com/learnit2022/image/upload/v1646919325/dwvohrt0f5qga347rfc9.jpg",
          name: "Responsive Với Grid System",
          sub_name:
            "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.",
        }
      ],
    },
    {
      title: "2. JavaScript",
      description:
        "Với HTML, CSS bạn mới chỉ xây dựng được các websites tĩnh, chỉ bao gồm phần giao diện và gần như chưa có xử lý tương tác gì. Để thêm nhiều chức năng phong phú và tăng tính tương tác cho website bạn cần học Javascript.",
      course: [
        {
          link: "http://learnit-kma.me/course/6229fee56b1c671d838f5c11",
          img: "https://res.cloudinary.com/learnit2022/image/upload/v1646919379/igo0c2gveb6qcdgbv5jv.jpg",
          name: "JavaScript Cơ Bản",
          sub_name:
            "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.",
        },
        {
          link: "http://learnit-kma.me/course/6229ff616b1c671d838f5c15",
          img: "https://res.cloudinary.com/learnit2022/image/upload/v1646919518/jwzmmktj6lexczunipuu.jpg",
          name: "JavaScript nag cao",
          sub_name:
            "Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...",
        },
      ],
    },
    {
      title: "3. Libraries and Frameworks",
      description:
        "Một websites hay ứng dụng hiện đại rất phức tạp, chỉ sử dụng HTML, CSS, Javascript theo cách code thuần (tự code từ đầu tới cuối) sẽ rất khó khăn. Vì vậy các Libraries, Frameworks ra đời nhằm đơn giản hóa, tiết kiệm chi phí và thời gian để hoàn thành một sản phẩm website hoặc ứng dụng mobile.",
      course: [
        {
          link: "http://learnit-kma.me/course/6229ff956b1c671d838f5c19",
          img: "https://res.cloudinary.com/learnit2022/image/upload/v1646919556/fu5fqoatlarmcunp2ji7.jpg",
          name: "Xây Dựng Website với ReactJS",
          sub_name:
            "Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.",
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
                <h1>Front-end</h1>
                <p>
                  Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là
                  Front-end và Back-end. Front-end là phần giao diện người dùng
                  nhìn thấy và có thể tương tác, đó chính là các ứng dụng mobile
                  hay những website bạn đã từng sử dụng. Vì vậy, nhiệm vụ của
                  lập trình viên Front-end là xây dựng các giao diện đẹp, dễ sử
                  dụng và tối ưu trải nghiệm người dùng.
                </p>
                <p>
                  Tại Việt Nam, lương trung bình cho lập trình viên front-end
                  vào khoảng <strong>16.000.000đ</strong>/ tháng
                </p>
                <p>
                  Dưới đây là các khóa học F8 đã tạo ra dành cho bất cứ ai theo
                  đuổi sự nghiệp trở thành một lập trình viên{" "}
                  <strong>Front-end</strong>.
                </p>
                <blockquote>
                  <i class="fas fa-quote-left"></i>
                  Các khóa học có thể chưa đầy đủ, chúng mình vẫn đang nỗ lực
                  hoàn thiện trong thời gian sớm nhất.
                </blockquote>
                {Detail.map((item) => (
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
                        Ai cũng có thể tham gia khóa học Web Front-End tại LEARN
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
                      href="https://roadmap.sh/frontend"
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
