import React from "react";
import Footer from "../../../component/Layout/Footer/Footer";
import "./Job.scss";
import HeaderLayout from "../../../component/Layout/Header/HeaderLayout";
import { Link } from "react-router-dom";
const Job = () => {
  document.title = "Công việc";
  return (
    <div>
      <HeaderLayout />
      <div class="job">
        <div class="job-center">
          <div class="job-heading">
            <div class="job-heading-module">
              <h3>TUYỂN DỤNG</h3>
              <p>
                F8 tin rằng mỗi người đều có những tiềm năng vô hạn để trở nên
                giỏi giang. Vấn đề là họ không áp dụng đúng phương pháp để việc
                học hiệu quả hơn. Vì vậy F8 mong muốn giúp cho những người gặp
                khó khăn trong việc học hành nói chung và học lập trình nói
                riêng được tiếp cận các phương pháp, kinh nghiệm học lập trình
                thông minh để trở nên giỏi thực sự.
              </p>
            </div>
          </div>
          <div class="job-module">
            <div class="job-module-row">
              <div class="job-module-col">
                <h2>2 việc làm đang open tại LEARN IT</h2>
                <div class="List-job">
                  <div class="job-item">
                    <Link to="/call">
                      <div>
                        <h4>Mid/Senior PHP Developer</h4>
                        <div class="job-item-salary">
                          <i class="fas fa-dollar-sign"></i>
                          <span> Mức lương: 15.000.000 - 30.000.000</span>
                        </div>
                        <div class="job-item-skills">
                          <span>PHP</span>
                          <span>Laravel</span>
                          <span>MySQL</span>
                          <span>REST API</span>
                          <div class="time">5 tháng trước</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="job-item">
                    <Link to="/call">
                      <div>
                        <h4>Mid/Senior ReactJS Developer</h4>
                        <div class="job-item-salary">
                          <i class="fas fa-dollar-sign"></i>
                          <span> Mức lương: 15.000.000 - 30.000.000</span>
                        </div>
                        <div class="job-item-skills">
                          <span>Javascript</span>
                          <span>ReactJS</span>
                          <span>HTML 5</span>
                          <span>CSS 3</span>
                          <div class="time">5 tháng trước</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Job;
