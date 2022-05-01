import React from "react";
import { RightOutlined } from "@ant-design/icons";
import "./Xemtatca.scss";
import { Link } from "react-router-dom";
function Xemtatca(props) {
  return (
    <>
      <div className="Button-wrapper">
        <Link to={props.data}>
          <h4>Xem tất cả</h4>
        </Link>
        <RightOutlined />
      </div>
    </>
  );
}

export default Xemtatca;
