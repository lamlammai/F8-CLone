import Layout from "../../component/Layout/Basic/Layout";
import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../Scroll/BackToTop";
import "../../pages/HomePage/Blog/Blog.scss";
import "../../features/DetailBlog/DetailBlog.scss";
import "../../pages/HomePage/Document/document.scss";
const topic = [
  { name: "Front-end / Mobile Apps", link: "Frontend" },
  { name: "Back-end / DevOps", link: "Backend" },
  { name: "FullStack", link: "FullStack" },
  { name: "UI / UX / Design", link: "UIUX" },
  { name: "Others", link: "Others" },
];
export default function Product() {
  document.title = "Thành quả của học viên";
  return (
    <>
      <Layout>
        <div
          className="Document-wrapper Detail-blog-wrapper Blog-wrapper"
          style={{ justifyContent: "space-around" }}
        >
          <div className="Detail-blog-main Blog-item" style={{ width: "70%" }}>
            <h1 className="title">Tổng hợp sản phẩm của học viên</h1>
            <div className="author Blog-header">
              <div>
                <img
                  alt="Ảnh đại diện"
                  src="https://we25.vn/media/images/chi-dan-7.jpg"
                />
              </div>
              <div className="info">
                <h3>Admin</h3>
                <div className="time">
                  <span style={{ marginLeft: "0px" }}>4 ngày trước</span> .{" "}
                  <span>6 phút đọc</span>
                </div>
              </div>
            </div>
            <div className="main-content">
              <p className="sub-title">
                Bài viết này nhằm tổng hợp lại các dự án mà học viên LEARNIT đã
                hoàn thành và chia sẻ trên nhóm{" "}
                <a
                  href="https://www.facebook.com/groups/649972919142215"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Học lập trình web LEARNIT
                </a>
                . Các dự án dưới đây được mình ngẫu nhiên lựa chọn để đăng chứ
                không mang tính xếp hạng các bạn nhé.
              </p>
              <div className="part">
                <h2>
                  <i class="fas fa-link"></i>MANCHESTER UNITED
                </h2>
                <div className="main">
                  <div>
                    <img
                      alt="document"
                      className="img-product"
                      src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139e2ba0f350.png"
                    />
                  </div>
                  <p>
                    <strong>Truy cập trang:</strong>{" "}
                    <a
                      href="https://tranhoangkhang1212.github.io/travelix/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://tranhoangkhang1212.github.io/travelix/
                    </a>
                  </p>
                  <p>
                    <strong>Tác giả:</strong> Trần Hoàng Khang -{" "}
                    <a
                      href="https://www.facebook.com/groups/f8official/posts/1048686419270861/ "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Xem bài đăng gốc
                    </a>
                    (có cả video preview rất xịn xò của bạn Khang up lên)
                  </p>
                </div>
              </div>
              <div className="part">
                <h2>
                  <i class="fas fa-link"></i>DISCOVER THE WORLD VER 1
                </h2>
                <div className="main">
                  <div>
                    <img
                      alt="document"
                      className="img-product"
                      src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/613a0bf0926b4.png"
                    />
                  </div>
                  <p>
                    <strong>Truy cập trang:</strong>{" "}
                    <a
                      href="https://khoatranvn00.github.io/travelix/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://khoatranvn00.github.io/travelix/
                    </a>
                  </p>
                  <p>
                    <strong>Tác giả:</strong> Trần Anh Khoa -{" "}
                    <a
                      href="https://www.facebook.com/groups/f8official/posts/1058391564967013/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Xem bài đăng gốc
                    </a>
                  </p>
                </div>
              </div>
              <div className="part">
                <h2>
                  <i class="fas fa-link"></i>LUXSTAY CLONE VER 1
                </h2>
                <div className="main">
                  <div>
                    <img
                      alt="product"
                      src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139ee2934c37.png"
                    />
                  </div>
                  <p>
                    <strong>Truy cập trang:</strong>{" "}
                    <a
                      href="https://thanhit2612.github.io/luxstay/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://thanhit2612.github.io/luxstay/
                    </a>
                  </p>
                  <p>
                    <strong>Tác giả:</strong> Thành Nguyễn -{" "}
                    <a
                      href="https://www.facebook.com/groups/f8official/posts/1048686419270861/ "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Xem bài đăng gốc
                    </a>
                  </p>
                </div>
              </div>
              <div className="part">
                <h2>
                  <i class="fas fa-link"></i>LUXSTAY CLONE VER 2
                </h2>
                <div className="main">
                  <div>
                    <img
                      alt="document"
                      className="img-product"
                      src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/613ac44522512.png"
                    />
                  </div>
                  <p>
                    <strong>Truy cập trang:</strong>{" "}
                    <a
                      href="https://binvan789.github.io/luxstay/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://binvan789.github.io/luxstay/
                    </a>
                  </p>
                  <p>
                    <strong>Tác giả:</strong> Lữ Quang Minh -{" "}
                    <a
                      href="https://www.facebook.com/groups/f8official/posts/1074303393375830/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Xem bài đăng gốc
                    </a>
                  </p>
                </div>
              </div>
              <div className="part">
                <h2>
                  <i class="fas fa-link"></i>ĐẶT HÀNG QUẢNG CHÂU
                </h2>
                <div className="main">
                  <div>
                    <img
                      alt="document"
                      className="img-product"
                      src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139eec323a93.png"
                    />
                  </div>
                  <p>
                    <strong>Truy cập trang:</strong>{" "}
                    <a
                      href="https://tienquan0411.github.io/dathangquangchau/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://tienquan0411.github.io/dathangquangchau/
                    </a>
                  </p>
                  <p>
                    <strong>Tác giả:</strong> Quân Kòy -{" "}
                    <a
                      href="https://www.facebook.com/groups/f8official/posts/1074303393375830/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Xem bài đăng gốc
                    </a>
                  </p>
                </div>
              </div>
              <div className="part">
                <h2>
                  <i class="fas fa-link"></i>MOBILE CITY CLONE
                </h2>
                <div className="main">
                  <div>
                    <img
                      alt="document"
                      className="img-product"
                      src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139f7781c876.png"
                    />
                  </div>
                  <p>
                    <strong>Truy cập trang:</strong>{" "}
                    <a
                      href="https://nguyentruonganh.github.io/web_mobile_city/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://nguyentruonganh.github.io/web_mobile_city/
                    </a>
                  </p>
                  <p>
                    <strong>Tác giả:</strong> Nguyen Truong Anh -{" "}
                    <a
                      href="https://www.facebook.com/groups/f8official/posts/1074303393375830/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Xem bài đăng gốc
                    </a>
                  </p>
                </div>
              </div>
              <div className="part">
                <h2>
                  <i class="fas fa-link"></i>SETSAIL TRAVEL VER 1
                </h2>
                <div className="main">
                  <div>
                    <img
                      alt="document"
                      className="img-product"
                      src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/613a0fd38709e.png"
                    />
                  </div>
                  <p>
                    <strong>Truy cập trang:</strong>{" "}
                    <a
                      href="https://luumanhcuong.github.io/travel/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://luumanhcuong.github.io/travel/
                    </a>
                  </p>
                  <p>
                    <strong>Tác giả:</strong> Lưu Mạnh Cường -{" "}
                    <a
                      href="https://www.facebook.com/groups/f8official/posts/1058030578336445/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Xem bài đăng gốc
                    </a>
                  </p>
                </div>
              </div>
              <div className="part">
                <h2>
                  <i class="fas fa-link"></i>SETSAIL TRAVEL VER 2
                </h2>
                <div className="main">
                  <div>
                    <img
                      alt="document"
                      className="img-product"
                      src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/613ac64ecffae.png"
                    />
                  </div>
                  <p>
                    <strong>Truy cập trang:</strong>{" "}
                    <a
                      href="https://lynk-ka.github.io/Winter-Holidays/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://lynk-ka.github.io/Winter-Holidays/
                    </a>
                  </p>
                  <p>
                    <strong>Tác giả:</strong> Tuấn Linh -{" "}
                    <a
                      href="https://www.facebook.com/groups/f8official/posts/1080816342724535/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Xem bài đăng gốc
                    </a>
                  </p>
                </div>
              </div>
              <div className="part">
                <h2>
                  <i class="fas fa-link"></i>KINGSHOES CLONE
                </h2>
                <div className="main">
                  <p>Anh em nào làm shop bán giày tham khảo nhé.</p>
                  <div>
                    <img
                      alt="document"
                      className="img-product"
                      src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/613ac1baa83bc.png"
                    />
                  </div>
                  <p>
                    <strong>Truy cập trang:</strong>{" "}
                    <a
                      href="https://tuan6582.github.io/kingshoes.-test.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://luumanhcuong.github.io/travel/
                    </a>
                  </p>
                  <p>
                    <strong>Tác giả:</strong> Thanh Thanh -{" "}
                    <a
                      href="https://www.facebook.com/groups/f8official/posts/1075753763230793/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Xem bài đăng gốc
                    </a>
                  </p>
                </div>
              </div>
              <div className="part">
                <h2>
                  <i class="fas fa-link"></i>ZINGMP3 CLONE VER 1
                </h2>
                <div className="main">
                  <div>
                    <img
                      alt="document"
                      className="img-product"
                      src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/616904b3dce65.png"
                    />
                  </div>
                  <p>
                    <strong>Truy cập trang:</strong>{" "}
                    <a
                      href="https://vikdang.github.io/Code_web_music_player/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://vikdang.github.io/Code_web_music_player/
                    </a>
                  </p>
                  <p>
                    <strong>Tác giả:</strong> Đạt Tấn -{" "}
                    <a
                      href="https://www.facebook.com/groups/f8official/posts/1109395366533299/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Xem bài đăng gốc
                    </a>
                  </p>
                </div>
              </div>
              <div className="part">
                <h2>
                  <i class="fas fa-link"></i>ZINGMP3 CLONE VER 2
                </h2>
                <div className="main">
                  <p>
                    Ông thần này chắc học vài tháng rồi chứ ông ấy đăng bài nói
                    là học 1 ngày là chém gió cho vui đó anh em nhé.
                  </p>
                  <div>
                    <img
                      alt="document"
                      className="img-product"
                      src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/613ac26ab7c53.png"
                    />
                  </div>
                  <p>
                    <strong>Truy cập trang:</strong>{" "}
                    <a
                      href="https://ducvinhson.github.io/ZingMp3-PhaCe/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://ducvinhson.github.io/ZingMp3-PhaCe/
                    </a>
                  </p>
                  <p>
                    <strong>Tác giả:</strong> Nguyễn Việt Đức -{" "}
                    <a
                      href="https://www.facebook.com/groups/f8official/posts/1068536717285831/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Xem bài đăng gốc
                    </a>
                  </p>
                </div>
              </div>
              <div className="part">
                <h2>
                  <i class="fas fa-link"></i>PORTFOLIO TRIPLET
                </h2>
                <div className="main">
                  <div>
                    <img
                      alt="document"
                      className="img-product"
                      src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/613ac337b65ac.png"
                    />
                  </div>
                  <p>
                    <strong>Truy cập trang:</strong>{" "}
                    <a
                      href="https://triplet511.github.io/Portfolio_Clone"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://triplet511.github.io/Portfolio_Clone
                    </a>
                  </p>
                  <p>
                    <strong>Tác giả:</strong> Trần Thanh Tâm -{" "}
                    <a
                      href="https://www.facebook.com/groups/f8official/posts/1070287013777468/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Xem bài đăng gốc
                    </a>
                  </p>
                </div>
              </div>
              <div className="part">
                <h2>
                  <i class="fas fa-link"></i>NATALIE & CHARLIE
                </h2>
                <div className="main">
                  <div>
                    <img
                      alt="document"
                      className="img-product"
                      src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/613ac5019d68c.png"
                    />
                  </div>
                  <p>
                    <strong>Truy cập trang:</strong>{" "}
                    <a
                      href="https://chuong3x.github.io/natalieandcharlie/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://chuong3x.github.io/natalieandcharlie/
                    </a>
                  </p>
                  <p>
                    <strong>Tác giả:</strong> Đỗ Chương -{" "}
                    <a
                      href="https://www.facebook.com/groups/f8official/posts/1081629009309935/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Xem bài đăng gốc
                    </a>
                  </p>
                </div>
              </div>
              <div className="part">
                <h2>
                  <i class="fas fa-link"></i>SNS SIMEN
                </h2>
                <div className="main">
                  <div>
                    <img
                      alt="document"
                      className="img-product"
                      src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/613ac72054d3c.png"
                    />
                  </div>
                  <p>
                    <strong>Truy cập trang:</strong>{" "}
                    <a
                      href="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/65/613ac72054d3c.png"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://cdn.fullstack.edu.vn/f8-learning/blog_posts/65/613ac72054d3c.png
                    </a>
                  </p>
                  <p>
                    <strong>Tác giả:</strong> Nhi Thành Lương -{" "}
                    <a
                      href="https://www.facebook.com/groups/f8official/posts/1082059622600207/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Xem bài đăng gốc
                    </a>
                  </p>
                </div>
              </div>
              <div className="part">
                <h2>
                  <i class="fas fa-link"></i>YOUTUBE CLONE
                </h2>
                <div className="main">
                  <div>
                    <img
                      alt="document"
                      className="img-product"
                      src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/613ac9f9472fe.png"
                    />
                  </div>
                  <p>
                    <strong>Truy cập trang:</strong>{" "}
                    <a
                      href="=https://aelong2001.github.io/Youtube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      =https://aelong2001.github.io/Youtube
                    </a>
                  </p>
                  <p>
                    <strong>Tác giả:</strong> Long -{" "}
                    <a
                      href="https://www.facebook.com/groups/f8official/posts/1074333450039491"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Xem bài đăng gốc
                    </a>
                  </p>
                </div>
              </div>
              <div className="part">
                <h2>
                  <i class="fas fa-link"></i>FOR ALL 👏👏
                </h2>
                <div className="main">
                  <p>
                    Là trang web không sử dụng quá nhiều kĩ thuật về cả UI lẫn
                    UX nhưng bù lại có chất lượng content tuyệt vời, được phần
                    lớn anh em cộng đồng mạng yêu thích và bình chọn 🤣🤣
                  </p>
                  <div>
                    <img
                      alt="document"
                      className="img-product"
                      src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png"
                    />
                  </div>
                  <p>
                    <strong>Truy cập trang:</strong>{" "}
                    <a
                      href="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/65/6139fe28a9844.png"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://cdn.fullstack.edu.vn/f8-learning/blog_posts/65/6139fe28a9844.png
                    </a>
                  </p>
                  <p>
                    <strong>Tác giả:</strong> Việt Hoàng -{" "}
                    <a
                      href="https://www.facebook.com/groups/f8official/posts/1074234416716061//"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Xem bài đăng gốc
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* liên hệ */}
            <div className="main-contact">
              <ul>
                <li>
                  Các bạn khác muốn đăng dự án của mình tại đây vui lòng gửi
                  email cho mình qua contact{" "}
                  <a href="mailto:learnit@kma.vn">@learnit.kma.vn</a> Nội dung
                  email bao gồm mô tả dự án + đường link đã deploy công khai.
                </li>
                <li>
                  Các bạn có thể xem thêm rất nhiều sản phẩm khác tại link gốc:
                  <a
                    href="https://www.facebook.com/groups/649972919142215/search/?q=%23f8_show"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    https://www.facebook.com/groups/649972919142215/search/?q=%23f8_show
                  </a>
                </li>
                <li>
                  Các bài đăng sử dụng link ra trang web bên ngoài được cung cấp
                  bởi tác giả vì vậy nội dung các trang web có thể bị thay đổi
                  trong tương lai. Nếu có link dự án nào không còn hoạt động
                  hoặc nội dung chưa phù hợp vui lòng thông báo giúp quản trị
                  viên qua email{" "}
                  <a href="mailto:learnit@kma.vn">contact@learnit.kma.vn.</a>
                </li>
              </ul>
              <p>Cảm ơn tất cả các bạn 👏👏</p>
            </div>
            <div className="other-post">
              <h3>Một số bài viết khác</h3>
              <ul>
                <li>
                  <Link to="/document">
                    Tổng hợp tài liệu học lập trình cơ bản cho người mới
                  </Link>
                </li>
                <li>
                  <Link to="/blog/san-pham-cua-hoc-vien">
                    Tổng hợp sản phẩm của học viên
                  </Link>
                </li>
                <li>
                  <Link to="/blog/620b78142080146c4360dd56">
                    Bốn nguyên tắc khi học code
                  </Link>
                </li>
              </ul>
            </div>
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
        </div>
      </Layout>
      <ScrollToTop />
    </>
  );
}
