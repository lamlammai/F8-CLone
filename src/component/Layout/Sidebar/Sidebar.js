import React, { useState } from "react";
import "./Sidebar.scss";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Slidebar(navhidden) {
  const { t } = useTranslation();
  const [isShow, setIsShow] = useState(true);
  const handleClick = () => {
    setIsShow(!isShow);
  };
  const link = useLocation();
  return (
    <>
      <div className={`Slide-wrapper ${navhidden.navhidden}`}>
        <div className="btn-plus" onClick={handleClick}>
          <div class="createbtn" aria-expanded="false">
            <i class={isShow ? "fas fa-plus" : "fas fa-plus plus-rotate"}></i>
          </div>
          <ul hidden={isShow}>
            <li>
              <Link to="/new-post">
                <i class="fas fa-pencil-alt"></i>
                {t("Viết Blog")}
              </Link>
            </li>
            <li>
              <Link to="/document">
                <i class="fas fa-question"></i>
                {t("Tài liệu")}
              </Link>
            </li>
          </ul>
        </div>
        <ul className="sidebar-list">
          {link.pathname === "/" ? (
            <li className="active">
              <Link to="/">
                <i className="fas fa-home"></i>
                <span>{t("Trang chủ")}</span>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/">
                <i className="fas fa-home"></i>
                <span>{t("Trang chủ")}</span>
              </Link>
            </li>
          )}
          {link.pathname === "/studyRoute" ||
          link.pathname === "/studyRoute/front-end" ||
          link.pathname === "/studyRoute/back-end" ||
          link.pathname === "/studyRoute/nhap-mon" ? (
            <li className="active">
              <Link to="/studyRoute">
                <i class="fas fa-walking"></i>
                <span>{t("Lộ trình")}</span>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/studyRoute">
                <i class="fas fa-walking"></i>
                <span>{t("Lộ trình")}</span>
              </Link>
            </li>
          )}
          {link.pathname === "/learning" ? (
            <li className="active">
              <Link to="/learning">
                <i class="fas fa-lightbulb"></i>
                <span>{t("Học")}</span>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/learning">
                <i class="fas fa-lightbulb"></i>
                <span>{t("Học")}</span>
              </Link>
            </li>
          )}
          {link.pathname === "/blog" ? (
            <li className="active">
              <Link to="/blog">
                <i class="fas fa-clipboard-list"></i>
                <span>{t("Blog")}</span>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/blog">
                <i class="fas fa-clipboard-list"></i>
                <span>{t("Blog")}</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default Slidebar;
