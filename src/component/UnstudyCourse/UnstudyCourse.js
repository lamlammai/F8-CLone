import React, { useEffect, useState } from "react";
import "./UnstudyCourse.scss";
import "../../component/LearningItem/LearningItem.scss";
import { message } from "antd";
import { Link } from "react-router-dom";
import imgErr from "../../utils/page-error/IMG.png";
import { sendGet } from "../../utils/api";

function UnstudyCourses() {
  const [data, setData] = useState([]);

  const listCourse = async () => {
    const res = await sendGet("/api/course/");
    if (res.status === 200) {
      setData(res.data);
    } else {
      message.error("Vui lòng thử lại sau!");
    }
  };
  useEffect(() => {
    listCourse();
  }, []);
  return (
    <>
      {data?.map((item) => (
        <div className="Learning-item Course-item">
          <Link to={`/course/${item._id}`}>
            <div className="img-item">
              <img
                alt="course"
                src={item.img}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `${imgErr}`;
                }}
              />
            </div>
          </Link>
          <Link to={`/course/${item._id}`}>
            <h3>{item.name}</h3>
          </Link>
        </div>
      ))}
    </>
  );
}

export default UnstudyCourses;
