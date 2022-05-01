import React from "react";
import LayoutAdmin from "./component/LayoutAdmin/LayoutAdmin";

function Admin() {
  document.title = "Admin";
  return (
    <>
      <div className="Admin-wrapper">
        <LayoutAdmin />
      </div>
    </>
  );
}

export default Admin;
