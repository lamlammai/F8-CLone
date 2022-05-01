import React from "react";
import "./Footer.scss";
import logo from "../../../utils/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <div className="footer-wrapper">
        <div class="footer-row">
          <div class=" footer-col footer__col1">
            <div>
              <Link to="/" class="footer-link">
                <img src={logo} alt="logo" height={50} />
              </Link>
              <h2>
                {t("Học lập trình để đi làm")} <p>Learn IT</p>
              </h2>
            </div>
            <ul>
              <li>
                <span>Email: contact@fullstack.edu.vn</span>
              </li>
              <li>
                <span>
                  {t(
                    "Địa chỉ: Nhà D9, lô A10, Nam Trung Yên, Yên Hòa, Cầu Giấy, Hà Nội."
                  )}
                </span>
              </li>
            </ul>
          </div>
          <div class="footer-col footer__col2">
            <h3>{t("Hỗ trợ")}</h3>
            <ul>
              <li>
                <Link to="/call" class="footer-link">
                  {t("Liên hệ")}
                </Link>
              </li>
              <li>
                {" "}
                <Link class="footer-link" to="/security">
                  {t("Bảo mật")}
                </Link>
              </li>
              <li>
                <Link to="/rules" class="footer-link">
                  {t("Điều khoản")}
                </Link>
              </li>
            </ul>
          </div>
          <div class=" footer-col footer__col3">
            <h3>{t("Về Learn IT")} </h3>
            <ul>
              <li>
                <Link to="/about" class="footer-link">
                  {t("Giới thiệu")}
                </Link>
              </li>
              <li>
                <Link to="/job" class="footer-link">
                  {t("Cơ hội việc làm")}
                </Link>
              </li>
              <li>
                <a
                  href="http://www.actvn.edu.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="footer-link"
                >
                  {t("Đối tác")}
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-col footer__col1">
            <h3>{t("Đơn vị chủ quản")} </h3>
            <ul>
              <li>
                <span>{t("Người đại diện phát ngôn")}: Nguyễn Văn Duy</span>
              </li>
              <li>
                <span>{t("Tổng Giám Đốc")}: Đặng Thị Mai Lam</span>
              </li>
              <li>
                <span>{t("Đơn vị chủ quản")}: HỌC VIỆN KỸ THUẬT MẬT MÃ</span>
              </li>
              <li>
                <span>{t("Ngày thành lập")}: 23/12/2021</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
