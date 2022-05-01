import React from "react";
import Footer from "../../component/Layout/Footer/Footer";
import HeaderLayout from "../../component/Layout/Header/HeaderLayout";
import "./Rules.scss";

function Rules() {
  return (
    <>
      <HeaderLayout />
      <div class="rules-heading">
        <h3>ĐIỀU KHOẢN LEARN IT</h3>
      </div>
      <div class="rules-module">
        <ul>
          <b>Điều khoản tổng quát</b>
        </ul>
        <li>
          <a
            href="http://learnit-kma.me/rules1"
            target="_blank"
            rel="noreferrer"
          >
            Điều khoản dịch vụ
          </a>
        </li>
        <li>
          <a
            href="http://learnit-kma.me/security"
            target="_blank"
            rel="noreferrer"
          >
            Chính sách bảo mật
          </a>
        </li>
        <li>
          <a
            href="http://learnit-kma.me/rules1"
            target="_blank"
            rel="noreferrer"
          >
            Quy chế hoạt động
          </a>
        </li>
        <li>
          <a
            href="http://learnit-kma.me/rules1"
            target="_blank"
            rel="noreferrer"
          >
            Điều khoản học tập
          </a>
        </li>
        <li>
          <a
            href="http://learnit-kma.me/rules1"
            target="_blank"
            rel="noreferrer"
          >
            Quy trình giải quyết tranh chấp/xử lý khiếu nại
          </a>
        </li>
      </div>
      <Footer />
    </>
  );
}

export default Rules;
