import React from "react";
import Xemtatca from "../Button/Xemtatca";
import "./FeaturedVideo.scss";
import { useTranslation } from "react-i18next";
function FeaturedVideo() {
  const { t } = useTranslation();
  const Video = [
    {
      link: "https://www.youtube.com/watch?v=sgq7BH6WxL8",
      img: "https://i.ytimg.com/vi/sgq7BH6WxL8/hqdefault.jpg",
      title: '"Code Thiếu Nhi Battle" Tranh Giành Trà Sữa Size L',
      views: "231.283",
      like: "5.050",
      comment: "178",
    },
    {
      link: "https://www.youtube.com/watch?v=YH-E4Y3EaT4",
      img: "https://i.ytimg.com/vi/YH-E4Y3EaT4/hqdefault.jpg",
      title: "Sinh viên IT đi thực tập cần biết những gì?",
      views: "178.452",
      like: "4.000",
      comment: "223",
    },
    {
      link: "https://www.youtube.com/watch?v=DpvYHLUiZpc",
      img: "https://i.ytimg.com/vi/DpvYHLUiZpc/hqdefault.jpg",
      title:
        "Sinh viên IT đi thực tập cần biết những gìPhương pháp HỌC LẬP TRÌNH của Sơn Đặng! | Lộ trình học lập trình | Phương pháp học lập trình",
      views: "59.525",
      like: "3.497",
      comment: "246",
    },
    {
      link: "https://www.youtube.com/watch?v=R6plN3FvzFY",
      img: "https://i.ytimg.com/vi/YH-E4Y3EaT4/hqdefault.jpg",
      title: "Làm được gì sau khóa học?",
      views: "300.405",
      like: "2.071",
      comment: "99",
    },
    {
      link: "https://www.youtube.com/watch?v=x0fSBAgBrOQ&feature=youtu.be",
      img: "https://i.ytimg.com/vi/x0fSBAgBrOQ/hqdefault.jpg",
      title: "ReactJS là gì? Tại sao nên học ReactJS?      ",
      views: "120.000",
      like: "4000",
      comment: "215",
    },
  ];
  return (
    <>
      <div className="SectionList-wrapper">
        <div className="SectionList-title">
          <h2>{t("Video nổi bật")}</h2>
          <Xemtatca />
        </div>
        <div className="Video-main">
          {Video.map((item) => (
            <div className=" Learning-item Video-item">
              <a href={item.link} target="_blank" rel="noreferrer">
                <div className="img-item">
                  <img alt="video" src={item.img} />
                </div>
              </a>
              <a href={item.link} target="_blank" rel="noreferrer">
              <h3>{item.title}</h3></a>
              <div className="Video-info">
                <p>
                  <i class="fas fa-eye"></i>
                  <span>{item.views}</span>
                </p>
                <p>
                  <i class="fas fa-heart" style={{ color: "red" }}></i>
                  <span>{item.like}</span>
                </p>
                <p>
                  <i class="fas fa-comment"></i>
                  <span>{item.comment}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeaturedVideo;
