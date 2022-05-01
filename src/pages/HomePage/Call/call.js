/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import Footer from "../../../component/Layout/Footer/Footer";
import HeaderLayout from "../../../component/Layout/Header/HeaderLayout";
import "./call.scss";
// import "../../../utils/blog1.jpg";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import { message } from "antd";
init("ooaxKkOSKZ1h0LPMj");

const Call = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ot7egd8",
        "template_kxt9vqz",
        form.current,
        "ooaxKkOSKZ1h0LPMj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    message.success(
      "Cảm ơn đóng góp của bạn, chúng mình sẽ liên hệ cho bạn sớm nhất có thể nhé!!"
    );
    e.target.reset();
  };
  document.title = "Liên hệ với chúng mình";
  return (
    <div>
      <HeaderLayout />
      <div class="call">
        <div class="call-center">
          <div class="call-heading">
            <div class="call-heading-module">
              <h3>Liên hệ</h3>
              <p>
                Learn IT trân trọng mọi ý kiến đóng góp của bạn. Đừng ngại liên
                hệ khi bạn có bất kỳ câu hỏi nào.
              </p>
            </div>
          </div>
          <div class="call-module">
            <div class="call-module-row">
              <section class="index-col">
                <form ref={form} onSubmit={sendEmail}>
                  <div class="text-input">
                    <label>Họ và tên</label>
                    <div class="input">
                      <input
                        placeholder="Nhập tên của bạn"
                        name="name"
                        maxLength={50}
                      />
                    </div>
                  </div>
                  <div class="text-input">
                    <label>Email</label>
                    <div class="input">
                      <input placeholder="Nhập email của bạn" name="email" />
                    </div>
                  </div>
                  <div class="text-input">
                    <label>Số điện thoại</label>
                    <div class="input">
                      <input
                        placeholder="Nhập số điện thoại của bạn (không bắt buộc)"
                        name="number"
                      />{" "}
                    </div>
                  </div>
                  <div class="text-input">
                    <label>Nội dung</label>
                    <div class="input">
                      <textarea
                        placeholder="Bạn muốn nhắn gì cho Learn IT"
                        name="content"
                      />
                    </div>
                  </div>
                  <input
                    class="call-submit"
                    type="submit"
                    value=" Gửi tin nhắn"
                  />
                </form>
              </section>
              <section class="index-col">
                <div class="index-border-col">
                  <div class="index-col-right">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/kyo.hiraky"
                      rel="noreferrer"
                    >
                      <i class="fab fa-facebook-square"></i>
                    </a>
                    <a href="#" target="_blank" rel="noreferrer">
                      <i class="fab fa-youtube-square"></i>
                    </a>
                  </div>
                  <div class="index-col-right">
                    <h2>Địa chỉ</h2>
                    <p>
                      Nhà D9, lô A10, Nam Trung Yên, Trung Hòa, Cầu Giấy, Hà Nội
                    </p>
                  </div>
                  <div class="index-col-right">
                    <h2>Email</h2>
                    <p>contact@fullstack.edu.vn</p>
                  </div>
                  <div class="image">
                    <img
                      alt="img"
                      src="https://fullstack.edu.vn/assets/icon/contact.png"
                      height={150}
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Call;
