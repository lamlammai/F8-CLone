import React from "react";
import { Link } from "react-router-dom";
import "./LearningItem.scss";
import imgErr from "../../utils/page-error/IMG.png";
function Course() {
  const course = JSON.parse(localStorage.getItem("courses"));
  return (
    <>
      {course?.map((item) => (
        <div className="Learning-item">
          <Link to={`/course/${item._id}`}>
            <div className="img-item">
              <img
                src={item.img}
                alt="ảnh khóa học"
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

export default Course;
