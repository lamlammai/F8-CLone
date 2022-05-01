import React, { useState } from "react";
import { Modal } from "antd";
import { Steps } from "antd";
import "./Tutorial.scss";
const { Step } = Steps;

const steps = [
  {
    content:
      "Toàn bộ nội dung các bài học như là video, hình ảnh, văn bản sẽ được hiển thị ở đây nhé ^^",
    img: "https://i.imgur.com/OilYSrf.jpg",
  },
  {
    content:
      "Đây là danh sách các bài học tại khóa này. Cậu sẽ rất thường xuyên tương tác tại đây để chuyển bài học và làm bài tập đấy >_<",
    img: "https://i.imgur.com/Yfp3gKW.jpg",
  },
  {
    content:
      "Đây là bài học đầu tiên dành cho cậu, khi học xong bài học này Miu sẽ đánh `Tích xanh` bên cạnh để đánh dấu cậu đã hoàn thành bài học nhé!",
    img: "https://i.imgur.com/CtovUsO.jpg",
  },
  {
    content:
      " Theo mặc định các bài học tại F8 đều bị khóa. Khi cậu hoàn thành bài học phía trước thì bài sau sẽ tự động được mở. Mà lúc học cậu đừng có tua video, vì sẽ không được tính là hoàn thành bài học đâu đấy nhé ^^",
    img: "https://i.imgur.com/f66UJNe.jpg",
  },
  {
    content:
      "Tại LEARN IT có một chức năng rất đặc biệt, đó là chức năng `Tạo ghi chú`. Khi học sẽ có nhiều lúc cậu muốn ghi chép lại đó, tại F8 cậu sẽ không cần tốn giấy mực để làm việc này đâu. Thả tim nào <3",
    img: "https://i.imgur.com/OksCAOi.jpg",
  },
  {
    content:
      "Nếu có bài học nào hay thì cậu bình luận một lời động viên vào đây cũng được nhé. Miu sẽ rất vui và cảm thấy biết ơn đấy <3",
    img: "https://i.imgur.com/8sC3fG4.jpg",
  },
];
function Tutorial() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [current, setCurrent] = React.useState(0);
  const [hidden, setHidden] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setHidden(!hidden);
    setCurrent(0);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <>
      <div className="Tutorial-wrapper">
        <div className="Header-right" onClick={showModal}>
          <i class="fas fa-question-circle"></i>
          <span>Hướng dẫn</span>
        </div>
        <Modal
          width={600}
          destroyOnClose={true}
          closable={false}
          visible={isModalVisible}
          footer={null}
          maskClosable={false}
        >
          <div className="more" hidden={hidden}>
            <p className="info">
              Chào cậu! Mình là Miu - hướng dẫn viên tại F8, mình sẽ đưa cậu đi
              thăm quan và giới thiệu cho cậu hiểu rõ hơn về LEARN IT nhé. Đi
              thôi!
            </p>
            <input
              type="checkbox"
              id="voice"
              name="tutorial"
              value="Nghe giọng Miu"
            />
            <label for="tutorial"> Nghe giọng Miu </label>
            <div className="button btn-more">
              <button className="no" onClick={handleCancel}>
                Không, cảm ơn!
              </button>
              <button className="yes" onClick={() => setHidden(!hidden)}>
                Theo Miu
              </button>
            </div>
          </div>
          <div className="step more" hidden={!hidden}>
            <Steps current={current}>
              {steps.map((item, i) => (
                <Step key={i} title={item.title} />
              ))}
            </Steps>
            <div className="steps-content">
              <p>{steps[current].content}</p>
              <img alt="introduce" src={steps[current].img} />
            </div>
            <div className="steps-action button">
              {current > 0 && (
                <button
                  style={{ margin: "0 8px", color: "#000" }}
                  onClick={() => prev()}
                >
                  Quay lại
                </button>
              )}
              {current < steps.length - 1 && (
                <button className="primary" onClick={() => next()}>
                  Tiếp theo
                </button>
              )}
              {current === steps.length - 1 && (
                <button className="primary" onClick={handleOk}>
                  Bye bye!
                </button>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Tutorial;
