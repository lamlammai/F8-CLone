import React from "react";
import { Link } from "react-router-dom";

function StudyRoute_Item({ item }) {
  return (
    <>
      <div className="card-route">
        <div className="card-img"><img alt="Khóa học" src={item.img} /></div>
        
        <div className="card-body">
          <Link to={`/studyRoute${item.link}`}>
            <span>{item.name}</span>
          </Link>
          <p>{item.sub_name}</p>
          <Link to={`/studyRoute${item.link}`}>
            <button className="btn-info">Chi tiết</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default StudyRoute_Item;
