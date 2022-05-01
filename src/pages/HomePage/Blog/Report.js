import React, { useState } from "react";
import { Modal } from "antd";
import { WarningFilled } from "@ant-design/icons";
import { sendPost } from "../../../utils/api";
import { getItem } from "../../../utils/storage";
import { message } from "antd";
function Report(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [content, setContent] = useState("");
  const user = getItem("user") ? JSON.parse(getItem("user")) : {};
  const handleOk = async () => {
    if (!user) {
      message.error("Vui lòng đăng nhập để báo cáo");
      return;
    }
    if (!content) {
      message.error("Vui lòng nhập nội dung báo cáo");
      return;
    }
    const response = await sendPost(`/api/report`, {
      post: props.data,
      content: content,
      reportedBy: user ? user.id : "",
    });
    if (response.status === 201) {
      message.success("Bài viết đã được báo cáo tới quản trị viên");
    } else {
      message.error("Báo cáo bài viết thất bại !!!");
    }
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const PopupReport = () => {
    setIsModalVisible(true);
  };
  const handleChange = (e) => {
    setContent(e.target.value);
    console.log(content);
  };
  return (
    <>
      <li onClick={PopupReport}>
        <i class="fas fa-flag"></i>Báo cáo bài viết
      </li>
      <Modal
        className="Report"
        centered
        closable={false}
        visible={isModalVisible}
        footer={null}
      >
        <WarningFilled />
        <h2>Báo lỗi bài viết</h2>
        <textarea
          value={content}
          onChange={handleChange}
          rows={3}
          placeholder="Nội dung báo cáo...."
        />
        <div>
          <button style={{ backgroundColor: "#4c8ad2" }} onClick={handleCancel}>
            Hủy
          </button>
          <button
            style={{ backgroundColor: "rgb(199, 194, 194)" }}
            onClick={handleOk}
          >
            Báo cáo bài viết
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Report;
