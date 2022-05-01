import React, { useState } from "react";
import axios from "axios";
import MarkdownIt from "markdown-it";
import { message, Select, Tag, Modal } from "antd";
import MdEditor from "react-markdown-editor-lite";
import HeaderLayout from "../../component/Layout/Header/HeaderLayout";
import Footer from "../../component/Layout/Footer/Footer";
import "react-markdown-editor-lite/lib/index.css";
import { useHistory } from "react-router-dom";
import "./NewPost.scss";
import { sendPost } from "../../utils/api";
const mdParser = new MarkdownIt();
const options = [
  { label: "Frontend", value: "lime" },
  { label: "Backend", value: "green" },
  { label: "FullStack", value: "gold" },
  { label: "UIUX", value: "cyan" },
  { label: "Others", value: "red" },
];
function Blogging() {
  document.title = "Viết Blog";
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState();
  const [content, setContent] = useState("");
  const [select, setSelect] = useState("Others");
  const [title, setTitle] = useState("");
  const handleCancel = () => {
    setVisible(false);
  };
  function tagRender(props) {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  }
  const handleChangeImage = (e) => {
    const { files } = document.querySelector(".img-input");
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "descriptionCourse");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/learnit2022/image/upload",
        formData
      )
      .then((response) => setImageUrl(response.data.secure_url))
      .catch((err) => console.error(err));
    return imageUrl;
  };
  //nội dung trong mackdown
  function handleEditorChange({ html }) {
    setContent(html);
  }
  function onImageUpload(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (data) => {
        resolve(data.target.result);
      };
      reader.readAsDataURL(file);
    });
  }
  function handleChangeSelect(_, data) {
    const res = data.map((e) => e.label);
    setSelect(res.join("-"));
    // console.log(res);
  }

  const handleChangeSubmit = async (values) => {
    const data = {
      img: imageUrl,
      title: title,
      topic: select,
      content: content,
    };
    // eslint-disable-next-line no-unused-vars
    const add = await sendPost("/api/blog", data);
    // console.log(add);
    if (add.status === 201) {
      message.success("Bài viết của bạn đang được duyệt");
      history.push("/");
    }
   else if (add.status === 400) {
      message.error("Tiêu đề/Nội dung không được để trống");
    }
     else {
      message.error("Lỗi kĩ thuật");
    }
  };

  return (
    <>
      <HeaderLayout />
      <div className="Blogging-wrapper ">
        <div style={{ display: " flex", justifyContent: "flex-end" }}>
          <button className="Xuat-ban" onClick={() => setVisible(true)}>
            Xuất bản
          </button>
        </div>
        <Modal
          className="Modal-publish"
          visible={visible}
          footer={null}
          onCancel={handleCancel}
          destroyOnClose={true}
        >
          <div className="Publish-wrapper">
            <section>
              <strong>Xem trước</strong>
              <label for="img">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                >
                  <p style={{ padding: "38px 20px 0" }}>
                    Thêm một ảnh đại diện hấp dẫn sẽ giúp bài viết của bạn cuốn
                    hút hơn với độc giả.
                  </p>
                  <p style={{ color: "red" }}>
                    Kéo thả ảnh vào đây, hoặc bấm để chọn ảnh.
                  </p>
                  <input
                    className="img-input"
                    hidden
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                    onChange={handleChangeImage}
                  />
                </div>
              </label>
            </section>
            <section>
              <p>Thêm thẻ để độc giả biết bài viết của bạn nói về điều gì.</p>
              {/* topic */}
              <Select
                onChange={handleChangeSelect}
                mode="multiple"
                showArrow
                tagRender={tagRender}
                defaultValue={["red"]}
                style={{ width: "100%" }}
                options={options}
              />
              <br></br>
              <div className="button-group">
                <button
                  className="btn-now"
                  type="submit"
                  onClick={handleChangeSubmit}
                >
                  Xuất bản ngay
                </button>
              </div>
            </section>
          </div>
        </Modal>
        <input
          placeholder="Tiêu đề"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* content */}
        <MdEditor
          placeholder="Nội dung viết ở đây"
          style={{ height: "500px" }}
          renderHTML={(text) => mdParser.render(text)}
          onImageUpload={onImageUpload}
          onChange={handleEditorChange}
        />
      </div>
      <Footer />
    </>
  );
}

export default Blogging;
