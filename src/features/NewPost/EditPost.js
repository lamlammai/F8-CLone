import React, { useEffect, useState } from "react";
import axios from "axios";
import MarkdownIt from "markdown-it";
import { message, Select, Tag, Modal } from "antd";
import MdEditor from "react-markdown-editor-lite";
import HeaderLayout from "../../component/Layout/Header/HeaderLayout";
import Footer from "../../component/Layout/Footer/Footer";
import "react-markdown-editor-lite/lib/index.css";
import { useHistory } from "react-router-dom";
import "./NewPost.scss";
import { sendGet, sendPut } from "../../utils/api";
import { useParams } from "react-router-dom";
import TurndownService from "turndown";
const mdParser = new MarkdownIt();
const turndownService = new TurndownService();
const options = [
  { label: "Frontend", value: "lime" },
  { label: "Backend", value: "green" },
  { label: "FullStack", value: "gold" },
  { label: "UIUX", value: "cyan" },
  { label: "Others", value: "red" },
];
function EditPost() {
  document.title = "Update bài viết của bạn";
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState();
  const [content, setContent] = useState(data?.content);
  const [main, setMain] = useState("");
  const [select, setSelect] = useState("red");
  const [title, setTitle] = useState("");
  const params = useParams();

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
  }
  const getValuePost = async (values) => {
    const res = await sendGet(`/api/blog/${params.link}`);
    // console.log(add);
    if (res.status === 200) {
      setData(res.data);
      setTitle(res.data?.title);
      setContent(res.data?.content);
      setMain(turndownService.turndown(res.data?.content));
      setSelect(res.data?.topic.split("-"));
    } else {
      message.error("Lỗi kĩ thuật");
    }
  };

  //nội dung trong mackdown
  function handleEditorChange({ text, html }) {
    setMain(text);
    setContent(html);
  }
  const result = [];
  for (let j = 0; j < options?.length; j++) {
    for (let i = 0; i < select?.length; i++) {
      if (options[j].label === select[i]) {
        result.push(options[j].value);
      }
    }
  }
  useEffect(() => {
    getValuePost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.link]);
  const handleChangeSubmit = async (values) => {
    const data = {
      // img: imageUrl,
      title: title,
      topic: select.join("-"),
      content: content,
    };
    // eslint-disable-next-line no-unused-vars
    const add = await sendPut(`/api/blog/${params.link}`, data);
    // console.log(add);
    if (add.status === 200) {
      message.success("Update thành công");
      history.push(`/blog/${params.link}`);
    } else {
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
                  style={{ backgroundImage: `url(${data.img})` }}
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
                defaultValue={result}
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
          value={main}
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

export default EditPost;
