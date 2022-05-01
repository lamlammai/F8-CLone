import Layout from "../../../component/Layout/Basic/Layout";
import React from "react";
import "../Blog/Blog.scss";
import "../../../features/DetailBlog/DetailBlog.scss";
import "./document.scss";
import ScrollToTop from "../../../component/Scroll/BackToTop";
export default function Document() {
  document.title = "Tài liệu lập trình";
  return (
    <>
      <Layout>
        <div className="Document-wrapper Detail-blog-wrapper Blog-wrapper">
          <div className="Detail-sub BookMask">
            <div>
              <ul>
                <p>
                  <i class="fas fa-list"></i> Danh mục
                </p>
                <li>
                  <a href="#Front-end">Tài liệu Front End</a>
                </li>
                <li>
                  <a href="#Back-end">Tài liệu Back End</a>
                </li>
                <li>
                  <a href="#Design">Tài liệu Design</a>
                </li>
                <li>
                  <a href="#other">Tài liệu liên quan</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="Detail-blog-main Blog-item" style={{ width: "65%" }}>
            <h1 className="title">
              Tổng hợp tài liệu học lập trình cơ bản cho người mới
            </h1>
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
                Nếu như bạn là người theo học IT và đang tìm kiếm một nguồn tài
                liệu học lập trình “chất lượng” cho người mới bắt đầu thì bài
                viết này sẽ vô cùng hữu ích. Bạn có thể là sinh viên CNTT; học
                sinh THPT yêu thích công nghệ và tự tìm tòi, tự học thêm; người
                đã đi làm và có niềm yêu thích lập trình tự “mày mò” để chuyển
                nghề… thì những tài liệu học lập trình dưới đây đều đem đến
                những thông tin cần thiết.
              </p>
              {/* tl front */}
              <div className="part">
                <h2 id="Front-end">
                  <i class="fas fa-link"></i>Tài liệu Front End
                </h2>
                <p>
                  Hôm nay mình sẽ chia sẻ với các bạn một số tài liệu học
                  frontend mà mình sưu tầm được trong thời gian qua. Đây là
                  những file tài liệu học frontend nhiều định dạng khác nhau,
                  pdf, docs, thậm chí là những đường link có sẵn trên internet
                  mà mình thấy hay nên chia sẻ.
                </p>
                <div className="main">
                  <h3>1.HTML và CSS: Thiết kế và xây dựng trang web.</h3>
                  <p>
                    <strong>Tác giả:</strong> Jon Duckett
                  </p>
                  <div>
                    <img
                      alt="document"
                      src="http://vuihocweb.com/wp-content/uploads/2017/02/S%C3%A1ch-h%E1%BB%8Dc-webdesign-hay-nh%E1%BA%A5t-2017-Jon-Duckett.jpg"
                    />
                  </div>
                  <p>
                    Cuốn sách của Jon Duckett rất nổi tiếng. Nếu bạn là người
                    mới bắt đầu thiết kế và đã bắt đầu học HTML và CSS, thì đây
                    là tài liệu Front End tốt để học mọi thứ từ đầu đến cấp
                    chuyên gia. Chất lượng nội dung trong cuốn sách này rất cao,
                    cũng là phần trình bày mọi thứ được tổ chức tốt.
                  </p>
                  <p>
                    Bạn sẽ tìm thấy định nghĩa của mọi khái niệm cùng với mã và
                    đầu ra của nó. Tác giả của cuốn sách này đã tạo ra mã rất
                    trực quan để mọi người có thể hiểu nó. Cuốn sách mô tả bằng
                    đồ họa và tất cả các thuộc tính. Ví dụ, mã được giải thích
                    bằng cách sử dụng một hệ thống mã màu để phân biệt mọi thứ.
                    Nó có bố cục và thiết kế theo phong cách tạp chí với các
                    trang giấy có chất lượng cao.
                  </p>
                </div>
                <div className="main">
                  <h3>
                    2.JavaScript và JQuery. Phát triển web Front End tương tác.
                  </h3>
                  <p>
                    <strong>Tác giả: Jon Duckett</strong>
                  </p>
                  <div>
                    <img
                      alt="document"
                      src="http://vuihocweb.com/wp-content/uploads/2017/02/S%C3%A1ch-h%E1%BB%8Dc-webdesign-hay-nh%E1%BA%A5t-2017-Jon-Duckett.jpg"
                    />
                  </div>
                  <p>
                    Để thêm chức năng trong mã HTML và CSS, bạn nên theo dõi tài
                    liệu Front End này. Tất cả các khái niệm về javascript được
                    trình bày ràng có cấu trúc từ đầu cuốn sách.
                  </p>
                  <p>
                    Jon Duckett là chuyên gia về javascript, bạn sẽ học cách sử
                    dụng javascript trong các ứng dụng trong thực tế. Ban đầu,
                    sẽ học về các nguyên tắc cơ bản, thao tác DOM và xử lý các
                    sự kiện người dùng trong javascript. Và sau đó sẽ dần dần
                    chuyển sang jquery.
                  </p>
                </div>
                <div className="main">
                  <h3>
                    3.Hướng dẫn cho người mới bắt đầu về HTML, CSS, Javascript
                    và Đồ họa web.
                  </h3>
                  <p>
                    <strong>Tác giả:</strong> Jennifer Niederst Robbins
                  </p>
                  <div>
                    <img
                      alt="document"
                      src="https://cv02.twirpx.net/2572/2572012.jpg?t=20180709035536"
                    />
                  </div>
                  <p>
                    Tài liệu Front End này có khoảng 600 trang và điều hay là có
                    rất nhiều bài tập để kiểm tra. Thử nghiệm mã và làm bài tập
                    nhiều giúp bạn hiểu rõ các khái niệm hơn. Bạn sẽ học về
                    HTML, CSS, Javascript cũng như đồ họa web và thiết kế web.
                  </p>
                  <p>
                    Tên cuốn sách nói rằng sách dành cho người mới bắt đầu nhưng
                    đa số mọi người đều thấy sách hơi nâng cao. Vì vậy, nếu bạn
                    đã có kiến ​​thức cơ bản về học Front End thì mới nên mua
                    đọc. Nếu bạn là người mới bắt đầu, khuyên bạn nên học những
                    điều cơ bản trước sau đó chọn sách.
                  </p>
                </div>
                <div className="main">
                  <h3>3.Eloquent Javascript</h3>
                  <p>
                    <strong>Tác giả:</strong> Marijn Haverbake
                  </p>
                  <div>
                    <img
                      alt="document"
                      src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/3a479912-4e72-43ae-982d-59cf50048a9e.__CR0,0,1080,1080_PT0_SX300_V1___.png"
                    />
                  </div>
                  <p>
                    Marijn Haverbeke đã trình bày rất hay về tất cả các khái
                    niệm về javascript. Tác giả hướng dẫn bằng các nguyên tắc cơ
                    bản của javascript bắt đầu từ các biến, cấu trúc điều khiển,
                    chức năng và cấu trúc dữ liệu. Sau đó, bạn sẽ chuyển sang
                    các chủ đề nâng cao như lập trình hướng đối tượng và các
                    biểu thức thông thường.
                  </p>
                </div>
                <div className="main">
                  <h3>
                    4.PHP, MySQL, JavaScript & HTML5 ALL IN ONE FOR DUMMIER
                  </h3>
                  <div>
                    <img
                      alt="document"
                      src="https://media.wiley.com/product_data/coverImage300/0X/11182137/111821370X.jpg"
                    />
                  </div>
                  <p>
                    <strong>Link tài liệu:</strong>{" "}
                    <a
                      href="https://drive.google.com/file/d/1Ei6E46Ikk7WHo09Wp3-eKARFJGGb5eTh/view"
                      rel="noreferrer"
                      target="_blank"
                    >
                      PHP, MySQL, JavaScript & HTML5 ALL IN ONE FOR DUMMIER
                    </a>
                  </p>
                </div>
              </div>
              {/* back */}
              <div className="part">
                <h2 id="Back-end">
                  <i class="fas fa-link"></i>
                  Sách học back end dành cho người mới bắt đầu – Tài liệu học
                  Back End
                </h2>
                <p>
                  Có quá nhiều thứ để tìm hiểu về backend và rất nhiều framework
                  hoặc thư viện phát hành mỗi tuần. Thật khó để tìm ra nên bắt
                  đầu từ đâu, từ đầu đến cấp độ nâng cao, và back end cần học
                  gì. Không chỉ cho người mới bắt đầu mà cả những người có kinh
                  nghiệm trong phát triển phần mềm đôi khi cũng tìm kiếm một số
                  tài nguyên hoặc sách tốt học back end để cải thiện kỹ năng của
                  họ. Dưới đây là tổng hợp các tài liệu học back end cho cả
                  người mới bắt đầu và chuyên gia gồm hrefp những cuốn sách dạy
                  back end hàng đầu và các trang web nổi bật hiện nay cho lập
                  trình viên.
                </p>
                <div className="main">
                  <h3>1. Head Java</h3>
                  <p>
                    <strong>Tác giả:</strong> Kathy Sierra, Bert Bates
                  </p>
                  <div>
                    <img
                      alt="document"
                      src="https://cuongquach.com/wp-content/uploads/2017/04/head-first-java-2nd-edition.png"
                    />
                  </div>
                  <p>
                    Một trong những cuốn sách khá là kinh điển, dễ học, dễ tiếp
                    thu,… đối với những người đang tìm hiểu trên con đường học
                    tập lập trình Java. Bạn hẳn sẽ tiếp cận rất nhanh với Java
                    qua cách trình bày rất thông minh và thú vị trong cuốn sách
                    này.
                  </p>
                  <p>
                    <strong>Link tài liệu:</strong>{" "}
                    <a
                      href="https://drive.google.com/file/d/1ax8fq5HGljGs1-g7_hJmK6QdQH22w8rL/view?usp=sharing"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Head Java
                    </a>
                  </p>
                </div>
                <div className="main">
                  <h3>2.Learn Python The Hard Way</h3>
                  <p>
                    <strong>Tác giả:</strong> Jon Duckett
                  </p>
                  <div>
                    <img
                      alt="document"
                      src="https://images-na.ssl-images-amazon.com/images/I/41joy4ucmvL._SX371_BO1,204,203,200_.jpg"
                    />
                  </div>
                  <p>
                    Tài liệu học back end này thực sự đã giúp rất nhiều người
                    học Python với cách tiếp cận thực tế. Tác giả đã bao gồm các
                    bài tập theo cách mà bạn cần tự nhập mã và sau đó bạn cần
                    sửa lỗi trong mã của mình. Việc giải các bài tập này sẽ giúp
                    bạn viết một chương trình tốt, ngoài ra còn được học một số
                    thủ thuật để gỡ lỗi. Ban đầu, bạn sẽ tìm hiểu về việc cài
                    đặt môi trường Python, sau đó nó bao gồm toán học cơ bản,
                    các biến, thiết kế chương trình, cấu trúc dữ liệu, chuỗi,
                    tệp, vòng lặp và các khái niệm cơ bản khác.
                  </p>
                  <p>
                    <strong>Link tài liệu:</strong>{" "}
                    <a
                      href="https://drive.google.com/file/d/1B5BV4HfDANU26qqug0GfDUPepIFFdQtO/view?usp=sharing"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Learn Python The Hard Way
                    </a>
                  </p>
                </div>
                <div className="main">
                  <h3>3. The joy of PHP Programming</h3>
                  <p>
                    <strong>Tác giả:</strong> Alan Forbes
                  </p>
                  <div>
                    <img
                      alt="document"
                      src="https://nordiccoder.com/app/uploads/2019/12/tai-lieu-hoc-back-end-4.jpg"
                    />
                  </div>
                  <p>
                    Cuốn sách bao gồm các khái niệm cơ bản về HTML trước tiên để
                    một người mới có thể dễ dàng bắt đầu với nó và sau đó từng
                    bước, bao gồm tất cả các khái niệm về PHP và giúp bạn đọc,
                    viết, sửa đổi và tạo trang web động của riêng bạn. Cuốn sách
                    bao gồm cài đặt PHP , cú pháp PHP, cấu trúc điều khiển và
                    MySQL.
                  </p>
                </div>
                <div className="main">
                  <h3>4. Beginning Node.js</h3>
                  <p>
                    <strong>Tác giả:</strong> Basarat Ali Syed
                  </p>
                  <div>
                    <img
                      alt="document"
                      src="https://nordiccoder.com/app/uploads/2019/12/tai-lieu-hoc-back-end-5.jpg"
                    />
                  </div>
                  <p>
                    Cuốn sách bao gồm tất cả các khái niệm cốt lõi của NodeJS và
                    hướng dẫn tất cả các nguyên tắc. Bạn sẽ học cách thiết lập
                    môi trường hoàn chỉnh, khái niệm SPA (Ứng dụng một trang),
                    các gói, luồng, xử lý các callback cùng với thử nghiệm và gỡ
                    lỗi ứng dụng của bạn. Bạn cũng sẽ tìm hiểu về khung Express,
                    bảo trì dữ liệu và cách triển khai ứng dụng web của bạn trên
                    internet. Tất cả mọi thứ trong cuốn sách này được trình bày
                    thông qua các ví dụ và sơ đồ để hiểu rõ hơn và từ đường cong
                    học tập quan điểm của người mới bắt đầu học back end.
                  </p>
                </div>
                <div className="main">
                  <h3>5.Java: The Complete Reference, Eleventh Edition</h3>
                  <p>
                    <strong>Tác giả:</strong> Herbert Schildt
                  </p>
                  <div>
                    <img
                      alt="document"
                      src="https://images.thuvienpdf.com/35eRz7Ryl4.webp"
                    />
                  </div>
                  <p>
                    <strong>Link tài liệu:</strong>{" "}
                    <a
                      href="https://drive.google.com/file/d/1Ei6E46Ikk7WHo09Wp3-eKARFJGGb5eTh/view"
                      rel="noreferrer"
                      target="_blank"
                    >
                      PHP, MySQL, JavaScript & HTML5 ALL IN ONE FOR DUMMIER
                    </a>
                  </p>
                </div>
                <div className="main">
                  <h3>6. Python Cookbook: Bí quyết để làm chủ Python 3</h3>
                  <div>
                    <img
                      alt="document"
                      src="https://nordiccoder.com/app/uploads/2019/12/tai-lieu-hoc-back-end-8.jpg"
                    />
                  </div>
                  <p>
                    Nếu bạn là một lập trình viên Python có kinh nghiệm thì cuốn
                    sách này rất tốt để bạn thành thạo kỹ năng lập trình của
                    mình trong lộ trình học back end của bạn. Cuốn sách hoàn
                    chỉnh nằm trên mã Python3 vì vậy nó sẽ giúp bạn lập trình
                    bằng các công cụ và thành ngữ hiện đại thay vì kỹ thuật mã
                    hóa tiêu chuẩn. Cuốn sách học back end này giải thích rất
                    hay tại sao và làm thế nào mã hoạt động. Mỗi công thức trong
                    cuốn sách này bắt đầu bằng vấn đề và giải pháp được đưa ra
                    với mã và thảo luận mở rộng.
                  </p>
                </div>
                <div className="main">
                  <h3>7. Programing asp.net mvc 4</h3>

                  <div>
                    <img
                      alt="document"
                      src="https://images.thuvienpdf.com/QwvkwVM6h8.webp"
                    />
                  </div>
                  <p>
                    Tác giả tập trung vào việc tạo ra những ứng dụng web thực
                    tế, có khả năng maintain cao. Sách cũng hướng dẫn cách test
                    mọi thứ trong ứng dụng ASP.NET của bạn.
                  </p>
                  <p>
                    <strong>Link tài liệu:</strong>{" "}
                    <a
                      href="https://drive.google.com/file/d/1pLkdngJ_BtaFYNrgbFS8y_NnwbVn_QMU/view?usp=sharing"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Programing asp.net mvc 4
                    </a>
                  </p>
                </div>
                <div className="main">
                  <h3>8. Pro ASP.NET MVC 5</h3>
                  <p>
                    <strong>Tác giả:</strong> Adam Freeman và Steve Sanderson
                  </p>
                  <div>
                    <img
                      alt="document"
                      src="https://static.epub.vn/epubvn-image/pro-asp-net-mvc-5-1543907820.jpg"
                    />
                  </div>
                  <p>
                    Đây là cuốn sách có cấu trúc chặt chẽ và logic. Tác giả đi
                    từ những nội dung cơ bản rồi đưa ra các application pattern
                    để cho thấy các nội dung này hoạt động với nhau như thế nào.
                    Cuối cùng, tác giả đi sâu vào chủ đề quan trọng nhất. Để
                    người đọc dễ hiểu và dễ theo dõi, tác giả đưa ra nhiều code
                    ví dụ và chú thích cẩn thận những ví dụ đó.
                  </p>
                  <p>
                    <strong>Link tài liệu:</strong>
                    <a
                      href="https://drive.google.com/file/d/1GMxwWzF26_77Q_fYyVqZx_i0Bpo2Yn3E/view?usp=sharing"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Pro ASP.NET MVC 5
                    </a>
                  </p>
                </div>
              </div>
              {/* tài liệu UI/UX */}
              <div className="part">
                <h2 id="Design">
                  <i class="fas fa-link"></i>Website hay về UX/UI
                </h2>
                <p>
                  Nếu bạn đang là UI/UX Designer và muốn trở thành một UI/UX
                  Designer chuyên nghiệp thì không thể bỏ qua những trang web
                  này
                </p>

                <div className="main">
                  <p>
                    <a
                      href="https://www.uxpin.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.uxpin.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.usability.gov"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.usability.gov
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://uxmag.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://uxmag.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.webdesignernews.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      http://www.webdesignernews.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://uxplanet.org"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://uxplanet.org
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://medium.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://medium.com
                    </a>
                  </p>
                </div>
              </div>
              {/* tài liệu khác */}
              <div className="part">
                <h2 id="other">
                  <i class="fas fa-link"></i>Tài liệu khác
                </h2>
                <p>Các tài liệu liên quan đến ngành Công nghê thông tin</p>
                <div className="main">
                  <h3>1.Cơ sở dữ liệu 🌟</h3>
                  <p>
                    Cơ sở dữ liệu (Database) là một tập hợp các dữ liệu có tổ
                    chức, thường được lưu trữ và truy cập điện tử từ hệ thống
                    máy tính. Khi cơ sở dữ liệu phức tạp hơn, chúng thường được
                    phát triển bằng cách sử dụng các kỹ thuật thiết kế và mô
                    hình hóa chính thức.
                  </p>
                  <p>
                    <strong>Link tài liệu:</strong>{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://drive.google.com/file/d/1wnVcD1WYSFlW6Yq7GtoUHCUbZUtcJyUq/view?fbclid=IwAR17C8rOvU7mJ3TRMUrBLJ1OX2onsp7yaabpo0B9WWX8zCP0iAb2oLrprqc"
                    >
                      Cơ sở dữ liệu
                    </a>
                  </p>
                </div>
                <div className="main">
                  <h3>2.Trí tuệ nhân tạo 🌟</h3>
                  <p>
                    Trí tuệ nhân tạo đang trở thành một xu hướng công nghệ trên
                    toàn thế giới những năm gần đây. Việc nghiên cứu phát triển
                    các trí thông minh nhân tạo nhằm giải quyết các vấn đề nhu
                    cầu trong cuộc sống đang rất được quan tâm. Lương dành cho
                    các kĩ sư AI cũng cao không kém, chính vì vậy nếu bạn không
                    muốn bỏ lỡ các cơ hội khi học tập lập trình Trí tuệ nhân tạo
                    thì có thể tham khảo tài liệu “Nhập môn trí tuệ nhân tạo”
                    sau.
                  </p>
                  <p>
                    <strong>Link tài liệu:</strong>{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://drive.google.com/file/d/1ZYrY9eLm39X4g4IkNGWviCyYmb1SW4fW/view?usp=sharing"
                    >
                      Trí tuệ nhân tạo
                    </a>
                  </p>
                </div>
                <div className="main">
                  <h3>3.Công nghệ phần mềm 🌟:</h3>
                  <p>
                    Công nghệ phần mềm còn có tên gọi khác là “Kĩ thuật phần
                    mềm” là một cách tiếp cận có hệ thống, có kỷ luật, và định
                    lượng được cho việc phát triển, sử dụng và bảo trì phần mềm.
                    Cuốn sách này sẽ đi chi tiết các nội dung làm việc, lý
                    thuyết và thực tế cơ bản khi làm việc trong lĩnh vực thiết
                    kế phần mềm. Nếu bạn là một lập trình viên thì tuyệt không
                    thể bỏ qua cuốn sách này để trao dồi kiến thức bản thân thêm
                    nữa.
                  </p>
                  <p>
                    <strong>Link tài liệu:</strong>{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://drive.google.com/file/d/1DQ3h-23Id-lS93Ec2HyvNxAGSl9t8PyT/view?usp=sharing"
                    >
                      Công nghệ phần mềm
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <ScrollToTop />
    </>
  );
}
