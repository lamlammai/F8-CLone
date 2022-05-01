import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tabs, Form, Select, Input, Button, Skeleton, message } from "antd";
import "../../../../component/Admin/ModalUser/ModalAddUser/ModalAddUser.scss";
import "./CourseDetail.scss";
import ListLesson from "../../../../component/Admin/ListLesson/ListLesson";
import { useParams } from "react-router-dom";
import { sendGet, sendPut } from "../../../../utils/api";
// import { Link } from "react-router-dom";
const { Option } = Select;

const { TabPane } = Tabs;

export default function CourseItem() {
  const [infoCourse, setinfoCourse] = useState({});
  const [imageUrl, setImageUrl] = useState(infoCourse?.img);
  const params = useParams();
  const onFinish = async (values) => {
    values.img = imageUrl;
    const res = await sendPut(`/api/course/${params.id}`, values);
    if (res.status === 200) {
      await getInfoCourse();
      message.success("Update khóa học thành công");
    } else if (res.status === 401) {
      message.error("Bạn không có quyền chỉnh sửa khóa học này!");
    } else {
      message.error("Update không thành công");
    }
  };
  async function getInfoCourse() {
    const res = await sendGet(`/api/course/${params.id}`);
    setinfoCourse(res.data);
    setImageUrl(res.data?.img);
  }
  useEffect(() => {
    getInfoCourse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChangeImage = async () => {
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
  if (!Object.keys(infoCourse).length)
    return (
      <div className="example">
        <Skeleton />
      </div>
    );
  return (
    <>
      <div className="CourseManagement-wrapper ManagerUser-wrapper">
        <h1>Thông tin chi tiết khóa học</h1>

        <Tabs defaultActiveKey="1">
          <TabPane tab="Thông tin" key="1">
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                initialValue={infoCourse?.name}
                label="Tên"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Tên khóa học không được để trống!",
                  },
                ]}
                hasFeedback
              >
                <Input />
              </Form.Item>
              <div className="group">
                <Form.Item
                  name="path"
                  label="Lộ trình"
                  initialValue={infoCourse?.path}
                >
                  <Select
                    placeholder="Chọn lộ trình phù hợp..."
                    defaultValue="Frontend"
                  >
                    <Option value="Frontend">Front-end</Option>
                    <Option value="Backend">Back-end</Option>
                    <Option value="FullStack">FullStack</Option>
                    <Option value="Other">Other</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="language"
                  label="Ngôn ngữ"
                  initialValue={infoCourse?.language}
                >
                  <Select placeholder="Chọn ngôn ngữ" defaultValue="C">
                    <Option value="c">C</Option>
                    <Option value="nodejs">Javascript</Option>
                  </Select>
                </Form.Item>
              </div>
              <Form.Item
                name="description"
                label="Mô tả về khóa học"
                initialValue={infoCourse?.description}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                name="goal"
                label="Mục tiêu"
                initialValue={infoCourse?.goal}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                name="requirement"
                label="Yêu cầu"
                initialValue={infoCourse?.requirement}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                initialValue={infoCourse?.img}
                label="Ảnh mô tả"
                name="img"
                style={{ width: "60%" }}
              >
                <input
                  hidden
                  className="img-input"
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  onChange={handleChangeImage}
                />
                <label for="img">
                  <img
                    src={imageUrl}
                    alt="img"
                    style={{
                      width: "300px",
                      height: "200px",
                      objectFit: "contain",
                    }}
                  />
                </label>
              </Form.Item>
              <Form.Item>
                <div className="update">
                  <Button className="btn-update" htmlType="submit">
                    Cập nhật
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="Bài giảng" key="2">
            <ListLesson />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
}
