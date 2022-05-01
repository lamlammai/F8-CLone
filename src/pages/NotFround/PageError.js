import React from "react";
import { Link } from "react-router-dom";
import "./PageError.scss";
import error2 from "../../utils/page-error/error2.png";
function PageError() {
  document.title = "Hmmm, trang web ko tồn tại";
  return (
    <>
      <div className="PageError-wrapper">
        <div className="content">
          <h1>Awww... Trang này không tồn tại :(</h1>
          <h3>Chúng tôi không thể tìm thấy trang mà bạn đang tìm kiếm.</h3>{" "}
          <ul>
            <li>Hãy thử làm mới trang, sự cố này có thể chỉ là tạm thời.</li>
            <li>
              Nếu bạn đã nhập địa chỉ theo cách thủ công, hãy kiểm tra lại xem
              nó có chính xác không.
            </li>
          </ul>
          <h3>
            Quay về <Link to="/">Trang Chủ LEARN IT</Link>
          </h3>
        </div>
        <div className="img">
          {" "}
          {/* <img src={error1} alt="error1" className="error1" /> */}
          <img src={error2} alt="erro2" className="error2" />
        </div>
      </div>
    </>
  );
}

export default PageError;
