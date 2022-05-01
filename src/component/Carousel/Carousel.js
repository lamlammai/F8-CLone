import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Link } from "react-router-dom";
import "./Carousel.scss";

const carousel = [
  {
    title: "Học ReactJS miễn phí!",
    description:
      "Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.",
    button: "Học ngay",
    link: "/course/6229ff956b1c671d838f5c19",
    image: "https://i.imgur.com/IDdvBYo.png",
    user: "Admin",
    userProfile:
      "https://tocnamdep.com/wp-content/uploads/2020/06/toc-chi-dan-13.jpg",
  },
  {
    title: "HTML, CSS từ Zero đến Hero",
    description:
      "Xây dựng được ứng dụng web hoàn chỉnh sử dụng các công nghệ HTML5, CSS3, các CSS Framework, bootstrap framework",
    button: "Học ngay",

    link: "/course/6229fe5d6b1c671d838f5c09",
    image: "https://i.imgur.com/KbWWfOp.png",
    user: "Admin",
    userProfile:
      "https://tocnamdep.com/wp-content/uploads/2020/06/toc-chi-dan-13.jpg",
  },
  {
    title: "JavaScript cơ bản và nâng cao",
    description:
      "JavaScript được sử dụng chủ yếu để nâng cao sự tương tác của người dùng với trang web. Nói cách khác, bạn có thể làm trang web của mình trở nên sinh động và tương tác hơn",
    button: "Học ngay",

    link: "/course/6229fee56b1c671d838f5c11",
    image: "https://i.imgur.com/bBAy3t7.png",
    user: "Admin",
    userProfile:
      "https://tocnamdep.com/wp-content/uploads/2020/06/toc-chi-dan-13.jpg",
  },
  {
    title: "Thành quả của Học viên",
    description:
      "Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.",
    button: "Xem thêm",
    link: "/blog/san-pham-cua-hoc-vien",
    image: "https://i.imgur.com/bGog30Z.png",
    user: "Học viên",
    userProfile:
      "https://tocnamdep.com/wp-content/uploads/2020/06/toc-chi-dan-13.jpg",
  },
];

const Carousel = () => (
  <Slider className="slider-wrapper" autoplay={2000}>
    {carousel.map((item, index) => (
      <div
        key={index}
        className="slider-content"
        style={{ backgroundImage: `url('${item.image}')` }}
      >
        <div className="inner">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <button>
            <Link to={item.link}>{item.button}</Link>
          </button>
        </div>
        <section>
          <img src={item.userProfile} alt={item.user} />
          <span>
            Sản phẩm của <strong>{item.user}</strong>
          </span>
        </section>
      </div>
    ))}
  </Slider>
);
export default Carousel;
