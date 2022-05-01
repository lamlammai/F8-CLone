import React, { useState } from "react";
import Header from "../../../component/Layout/Header/HeaderLayout";
import Footer from "../../../component/Layout/Footer/Footer";
import Carousel from "react-simply-carousel";

import slogan from "../../../utils/slogan.mp4";
import people from "../../../utils/people.png";
import course from "../../../utils/course.png";
import learn from "../../../utils/learn.png";
import "./infomation.scss";
import { Link } from "react-router-dom";
const student = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/9/98/Chi_Dan.png",
    content:
      "Các khóa học chất lượng, hướng dẫn rất tỉ mỉ và chi tiết, xịn lắm!!",
  },
  {
    img: "https://afamilycdn.com/150157425591193600/2021/2/4/batchrin5790-copy-161241861407794221433.jpg",
    content: "cảm giác của tui là như chết đuối vớ được cọc.",
  },
  {
    img: "https://afamilycdn.com/150157425591193600/2021/2/4/batchrin5790-copy-161241861407794221433.jpg",
    content:
      "Khi biết tới LEARN IT và xem dần các video mà xem đến đâu hiểu đến đấy vì bài giảng sao cho cả những người không có base IT cũng hiểu được, cảm giác của tui là như chết đuối vớ được cọc.",
  },
  {
    img: "https://i-ione.vnecdn.net/2017/12/26/chi-dan-3-4580-1514195294-4691-1514255729_m_460x0.jpg",
    content:
      "Biết ơn và biết ơn đội ngũ LEARN IT rất nhiều, biết ơn cả các bạn đi chia sẻ F8 cho nhiều người khác biết tới nữa",
  },
  {
    img: "https://image.vtc.vn/files/chubi/2017/05/04/chi-dan-muot-mo-hoi-van-dien-cuc-sung-tren-san-khau-1219198.jpg",
    content:
      "Khi biết tới LEARN IT và xem dần các video mà xem đến đâu hiểu đến đấy vì bài giảng sao cho cả những người không có base IT cũng hiểu được",
  },
  {
    img: "https://afamilycdn.com/150157425591193600/2021/2/4/batchrin5790-copy-161241861407794221433.jpg",
    content:
      "Search nát cả google ra thì càng đọc càng thấy mông lung, có khi nản quá đã từng nghĩ hay là thôi chắc mình ko bước chân vào ngành được rồi, thì biết được LEARN IT, tuyệt",
  },
  {
    img: "https://afamilycdn.com/150157425591193600/2021/2/4/batchrin5790-copy-161241861407794221433.jpg",
    content:
      "Khi biết tới LEARN IT và xem dần các video mà xem đến đâu hiểu đến đấy vì bài giảng sao cho cả những người không có base IT cũng hiểu được, cảm giác của tui là như chết đuối vớ được cọc.",
  },
  {
    img: "https://i-ione.vnecdn.net/2017/12/26/chi-dan-3-4580-1514195294-4691-1514255729_m_460x0.jpg",
    content:
      "Biết ơn và biết ơn đội ngũ LEARN IT rất nhiều, biết ơn cả các bạn đi chia sẻ F8 cho nhiều người khác biết tới nữa",
  },
  {
    img: "https://static.xaluanvui.com/images/news/Image/2017/12/26/35a41a3c4b679e.img.png",
    content:
      "May sao cơ duyên biết tới LEARN IT, học từ cái gì trước, lộ trình như nào, tất cả đều đầy đủ và rõ ràng!  ",
  },
  {
    img: "https://afamilycdn.com/150157425591193600/2021/2/4/batchrin5790-copy-161241861407794221433.jpg",
    content:
      "Biết ơn và biết ơn đội ngũ LEARN IT rất nhiều, biết ơn cả các bạn đi chia sẻ F8 cho nhiều người khác biết tới nữa",
  },
  {
    img: "https://static2.yan.vn/YanNews/2167221/201904/tieu-su-chi-dan-bdedeab7.jpg",
    content:
      "Các khóa học chất lượng, hướng dẫn rấ tỉ mỉ và chi tiết, xịn lắm!!",
  },
  {
    img: "https://afamilycdn.com/150157425591193600/2021/2/4/batchrin5790-copy-161241861407794221433.jpg",
    content:
      "Khi biết tới LEARN IT và xem dần các video mà xem đến đâu hiểu đến đấy vì bài giảng sao cho cả những người không có base IT cũng hiểu được, cảm giác của tui là như chết đuối vớ được cọc.",
  },
  {
    img: "https://i-ione.vnecdn.net/2017/12/26/chi-dan-3-4580-1514195294-4691-1514255729_m_460x0.jpg",
    content:
      "Biết ơn và biết ơn đội ngũ LEARN IT rất nhiều, biết ơn cả các bạn đi chia sẻ F8 cho nhiều người khác biết tới nữa",
  },
];

function Infomation() {
  document.title = "Giới thiệu về Learn IT";
  const [activeSlide, setActiveSlide] = useState(0);
  const handleActive = (newActiveSlideIndex) => {
    setActiveSlide(newActiveSlideIndex);
  };
  return (
    <>
      <div className="Info-wrapper">
        <Header />
        <div className="container">
          {/* giới thiệu */}
          <div className="info content">
            <section>
              <video src={slogan} autoPlay={"autoplay"} loop muted />
            </section>
            <section>
              <h2>BẠN CÓ BIẾT?</h2>
              <p>
                Ngoài kia có rất nhiều bạn làm sai nghề, tư duy an phận và bị
                chôn chân với một công việc không đủ vui, không đủ sống, các bạn
                ấy gặp hết khủng hoảng tuổi này tới tuổi kia.
              </p>
              <p>
                Tuổi 22 đang ngỡ ngàng không biết mình nên làm nghề gì. Tuổi 28
                thì bàng hoàng không biết lương như mình thì lập gia đình và
                nuôi dạy con cái làm sao. Tuổi 40 nuối tiếc thanh xuân của mình
                liệu có phải đã phí hoài không nhỉ...
              </p>
              {/* <p>
                Công nghệ Thông tin là một ngành lớn và quan trọng của Việt Nam,
                nhưng sự thiếu hụt nhân lực cả về số lượng và chất lượng luôn là
                một rào cản để phát triển.
              </p>
              <p>
                Thấu hiểu được tình trạng đó, chúng mình quyết định xây dựng nên
                một mô hình đào tạo lập trình đột phá, giúp nâng cao hiệu quả và
                chất lượng đào tạo.
              </p> */}
            </section>
            <section>
              <p>
                Mọi chuyện sẽ rất khác nếu họ được định hướng công việc phù hợp,
                biết cách đặt cho mình một mục tiêu rõ ràng và có đầy đủ kĩ năng
                cần thiết để phát triển sự nghiệp.
              </p>
              <p>
                Chúng mình tin rằng con người Việt Nam không hề thua kém gì so
                với con người ở bất cứ nơi đâu. Con rồng cháu tiên hoàn toàn có
                thể trở thành công dân toàn cầu để sánh vai cùng các cường quốc
                năm châu
              </p>
              <p>
                Chúng mình mong muốn trở thành một tổ chức góp phần tạo nên sự
                thay đổi đó, và việc tạo ra cộng đồng học lập trình mới chỉ là
                điểm bắt đầu. Chúng tôi đang nỗ lực tạo ra các khóa học có nội
                dung chất lượng vượt trội, giúp học viên sau khi hoàn thành khóa
                học có thể trở thành những lập trình viên luôn được nhiều công
                ty săn đón.
              </p>
            </section>
          </div>
          {/* thành quả đạt được */}
          <div className="achievement">
            <div>
              <img alt="achivement" src={people} />
              <p>
                <span>62.882+</span> người đã tham gia
              </p>
            </div>
            <div>
              <img alt="achivement" src={course} />
              <p>
                <span>10+</span> khóa học dành cho bạn
              </p>
            </div>
            <div>
              <img alt="achivement" src={learn} />
              <p>
                <span> </span>Học bất cứ nơi nào, ở đâu
              </p>
            </div>
          </div>
          {/* cốt lõi, giá trị */}
          <div className="vision content">
            <div className="about">
              <i class="fas fa-street-view"></i>
              <h3>Tầm nhìn</h3>
              <p>
                Trở thành công ty công nghệ giáo dục có vị thế vững vàng trên
                thị trường, với các sản phẩm hỗ trợ học lập trình chất lượng,
                thông minh và hiệu quả.
              </p>
            </div>
            <div className="about">
              <i class="fas fa-running"></i>
              <h3>Sứ mệnh</h3>
              <p>
                Phát triển các giải pháp học tập hiện đại và hiệu quả thông qua
                các mô hình đào tạo tiên tiến
              </p>
            </div>
            <div className="about">
              <i class="fas fa-code"></i>
              <h3>Giá trị cốt lõi</h3>
              <p>
                Sản phẩm làm ra với mục tiêu cao nhất là người học thấy dễ học,
                được truyền cảm hứng tự học, học tới bài học cuối cùng và người
                học có thể tự tay làm ra những dự án bằng kiến thức đã học.
              </p>
            </div>
            <div className="about">
              <i class="fas fa-calendar-check"></i>
              <h3>Tư duy</h3>
              <p>
                Có hai thứ đáng để đầu tư giúp mang lại thành quả tài chính tốt
                nhất trong dài hạn của một công ty đó là nhân viên và khách hàng
              </p>
            </div>
            <div className="about">
              <i class="fas fa-graduation-cap"></i>
              <h3>Đổi mới</h3>
              <p>
                Học từ chính đối thủ, học từ những công ty công nghệ giáo dục
                tốt trên thế giới và luôn luôn lắng nghe mọi góp ý từ phía học
                viên.
              </p>
            </div>
          </div>

          {/* bạn nhận được gì */}
          <div className="receive">
            <div className="receive-main">
              <h1>BẠN NHẬN ĐƯỢC GÌ TỪ LEARN IT</h1>
              <div className="items">
                <h3>1. Sự thành thạo</h3>
                <p>
                  Các bài học đi đôi với thực hành, làm bài kiểm tra ngay trên
                  trang web và bạn luôn có sản phẩm thực tế sau mỗi khóa học.
                </p>
              </div>
              <div className="items">
                <h3>2. Tính tự học</h3>
                <p>
                  Một con người chỉ thực sự trưởng thành trong sự nghiệp nếu họ
                  biết cách tự thu nạp kiến thức mới cho chính mình.
                </p>
              </div>
              <div className="items">
                <h3>3. Tiết kiệm thời gian</h3>
                <p>
                  Thay vì chật vật vài năm thì chỉ cần 4-6 tháng để có thể bắt
                  đầu công việc đầu tiên với vị trí Intern tại công ty IT.
                </p>
              </div>
              <div className="items">
                <h3>4. Làm điều quan trọng</h3>
                <p>
                  Chỉ học và làm những điều quan trọng để đạt được mục tiêu đi
                  làm được trong thời gian ngắn nhất.
                </p>
              </div>
            </div>
          </div>
          {/* người học */}
          <div className="quote">
            <h1>62.890+ người khác đã học. Còn bạn?</h1>
            <p>"Đừng học lập trình. Nghiện đấy!!!"</p>
            <Link to="/learning">
              <button>Thử một lần</button>
            </Link>
          </div>
          {/* người sáng lập */}
          <div className="founder content">
            <img
              alt="img"
              src="https://image.thanhnien.vn/w660/Uploaded/2021/noktzn/2021_01_18/vtr_9972_jwzl.jpg"
            />
            <div className="infoFounder">
              <h4>
                "... tôi làm việc bất kể ngày nghỉ, ngày lễ. Ở bất cứ đâu tôi có
                thể đặt chiếc máy tính của mình và tôi LUÔN TIN rằng tôi sẽ tạo
                ra được những sản phẩm tuyệt vời để CHIA SẺ với cộng đồng, đó là
                mục tiêu tôi luôn theo đuổi ..."
              </h4>
              <p>– Team LHD –</p>
            </div>
          </div>
          {/* học viên */}
          <div className="student content">
            <h1>HỌC VIÊN TẠI LEARN IT</h1>
            <p>
              Chúng mình tin rằng mỗi người đều có những tiềm năng vô hạn để trở
              nên giỏi giang. Vấn đề là họ không áp dụng đúng phương pháp để
              việc học hiệu quả hơn. Vì vậy LEARN IT mong muốn giúp cho những
              người gặp khó khăn trong việc học hành nói chung và học lập trình
              nói riêng được tiếp cận các phương pháp, kinh nghiệm học lập trình
              thông minh để trở nên giỏi thực sự.
            </p>
            <p>
              Bạn muốn đồng hành với chúng tôi để cùng nhau thực hiện những điều
              trên chứ?
            </p>
            <Carousel
              updateOnItemClick
              containerProps={{
                style: {
                  width: "100%",
                  justifyContent: "space-between",
                },
              }}
              activeSlideIndex={activeSlide}
              onRequestChange={handleActive}
              forwardBtnProps={{
                children: <i class="fas fa-chevron-circle-right"></i>,
                style: {
                  marginLeft: "20px",
                },
              }}
              backwardBtnProps={{
                children: <i class="fas fa-chevron-circle-left"></i>,
                style: {
                  marginRight: "20px",
                },
              }}
              itemsToShow={5}
              itemsToScroll={5}
              speed={400}
            >
              {student.map((item) => (
                <div className="review">
                  <div
                    className="avt"
                    alt="anh khoa hoc"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                  <p>"{item.content}"</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Infomation;
