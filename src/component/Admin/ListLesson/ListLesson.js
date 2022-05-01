import { Table, Space, Popconfirm, message } from "antd";
import "./ListLesson.scss";
import ModalAddLesson from "../Modal-ThongtinKH/ModalAddLesson";
import ModalEditLesson from "../Modal-ThongtinKH/ModalEditLesson";
import ModalAddExercise from "../Modal-ThemBaiTap/ModalAddExercise";
import { sendDelete, sendGet } from "../../../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalEditExercise from "../Modal-ThemBaiTap/ModalEditExercise";
export default function ListLesson() {
  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      width: "7%",
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      width: "35%",
    },
    {
      title: "Link bài giảng",
      dataIndex: "link",
      key: "link",
      width: "25%",
      render: (_, value) => (
        <a href={value.link} target="_blank" rel="noreferrer">
          <p>{value.link}</p>
        </a>
      ),
    },
    {
      title: "Bài tập",
      dataIndex: "excercises",
      key: "excercises",
      width: "10%",
    },
    {
      title: "Action",
      key: "action",
      width: "30%",
      render: (_, record) => (
        <>
          <Space size="middle">
            <div
              className="action"
              style={{ backgroundColor: "rgb(246 24 24)", color: "#fff" }}
            >
              <ModalEditLesson
                dataFromParent={record._id}
                getListLesson={getLesson}
              />
            </div>
            <div className="action" style={{ backgroundColor: "#1890ff" }}>
              {lesson.length >= 1 ? (
                <Popconfirm
                  title="Xóa bài giảng?"
                  onConfirm={() => handleDelete(record._id)}
                >
                  Xóa
                </Popconfirm>
              ) : null}
            </div>
            <div
              className="action"
              style={{ backgroundColor: "rgb(232 225 15)", color: "#000" }}
            >
              <ModalAddExercise
                dataFromParent={record._id}
                getListLesson={getLesson}
              />
            </div>
          </Space>
        </>
      ),
    },
  ];
  const [lesson, setLesson] = useState({});
  const params = useParams();
  const handleDelete = async (key) => {
    // eslint-disable-next-line no-unused-vars
    const del = await sendDelete(`/api/lesson/${params.id}/${key}`);
    const res = await sendGet(`/api/lesson/${params.id}`);
    if (res.status === 200) {
      setLesson(res.data);
    } else {
      message.error("Cập nhật khóa học thất bại");
    }
  };
  async function getLesson() {
    const res = await sendGet(`/api/lesson/${params.id}`);
    setLesson(res.data);
  }
  useEffect(() => {
    getLesson();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const result = [];
  for (let i = 0; i < lesson.length; i++) {
    result.push({
      key: i + 1,
      course: lesson[i].course,
      link: lesson[i].link,
      _id: lesson[i]._id,
      name: lesson[i].name,
      excercises: lesson[i].excercises?.map((e) => (
        <ModalEditExercise
          dataFromParent={lesson[i].excercises?.indexOf(e) + 1}
          dataFromParent1={e}
          dataFromParent2={lesson[i]?._id}
          getListLesson={getLesson}
        />
      )),
    });
  }
  return (
    <>
      <ModalAddLesson getListLesson={getLesson} />
      <Table
        className="components-table-demo-nested"
        columns={columns}
        dataSource={result}
        scroll={{ y: 340 }}
        pagination={{
          defaultPageSize: 4,
          showSizeChanger: false,
        }}
      />
    </>
  );
}
