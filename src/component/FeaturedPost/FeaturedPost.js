import React, { useEffect, useState } from "react";
import Xemtatca from "../Button/Xemtatca";
import "./FeaturedPost.scss";
import { Link } from "react-router-dom";
import imgErr from "../../utils/page-error/IMG.png";
import { useTranslation } from "react-i18next";
import avt from "../../utils/avt.jpg";
import { sendGet } from "../../utils/api/index";
import { message } from "antd";
function Posts() {
  const { t } = useTranslation();
  const [data, setData] = useState();
  const formatterDate = new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const Post = async () => {
    const res = await sendGet(`/api/blog`);
    if (res.status === 200) {
      setData(res.data);
    } else {
      message.error("Không thể tải bài viết");
    }
  };
  useEffect(() => {
    Post();
  }, []);
  return (
    <>
      <div className="SectionList-wrapper">
        <div className="SectionList-title">
          <h2>{t("Bài viết nổi bật")}</h2>
          <Xemtatca data="/blog" />
        </div>
        <div className=" Post-main">
          {data?.slice(0, 5)?.map((item) => (
            <div className="Post-item Learning-item">
              <Link to={`/blog/${item._id}`}>
                <div className="img-item">
                  <img
                    alt="blog"
                    src={item.img}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `${imgErr}`;
                    }}
                  />
                </div>
              </Link>
              <Link to={`/blog/${item._id}`}>
              <h3>{item.title}</h3></Link>
              <div className="Author">
                <img
                  alt="author"
                  src={item.author?.avatar}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `${avt}`;
                  }}
                />
                <p className="name">{item.author?.name} </p>
                <p> . </p>
                <p> {formatterDate.format(Date.parse(item.created_at))}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Posts;
