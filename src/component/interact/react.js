import React, { useState } from "react";
import "./interact.scss";
import haha from "../../utils/icon/haha.png";
import like from "../../utils/icon/like.png";
import sad from "../../utils/icon/sad.png";
import angry from "../../utils/icon/angry.png";
import wow from "../../utils/icon/wow.png";
import heart from "../../utils/icon/heart.png";
function ReactCmt(props) {
  const [active, setActive] = useState(false);
  const handleReact = (i) => {
    setActive((oldState) => !oldState);
    {
      const newLocal = props.count - 1;
      active
        ? props.parentCallback(newLocal)
        : props.parentCallback(props.count);
    }
    // setActiveIndex(i);
  };

  return (
    <>
      <span className="feeling">
        Thích
        <div className="active-react">
          <img onClick={handleReact} src={like} alt="react" title="like" />
          <img onClick={handleReact} src={heart} alt="react" title="heart" />
          <img onClick={handleReact} src={haha} alt="react" title="haha" />
          <img onClick={handleReact} src={wow} alt="react" title="wow" />
          <img onClick={handleReact} src={sad} alt="react" title="sad" />
          <img onClick={handleReact} src={angry} alt="react" title="angry" />
        </div>
      </span>
    </>
  );
}

export default ReactCmt;
