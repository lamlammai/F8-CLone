import React, { useState, useEffect } from "react";
import { Table } from "antd";
import "./TodoWork.scss";
import { sendGet } from "../../../utils/api";
export default function TodoWork() {
  const [authors, setAuthors] = useState([]);
  const columns = [
    {
      title: "Top",
      dataIndex: "key",
      key: "key",
      width: "10%",

    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      width: "35%",
    },
    {
      title: "Số bài",
      dataIndex: "count",
      key: "count",
      width: "25%",

    },
  ];
  async function getTopAuthors() {
    const res = await sendGet(`/api/statistic/author`);
    setAuthors(res.data);
  }
  useEffect(() => {
    getTopAuthors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const result = [];
  for (let i = 0; i < authors.length; i++) {
    result.push({
      key: i + 1,
      name: authors[i].author.name,
      count: authors[i].count,
    });
  }
  return (
    <>
      <Table
        className="components-table-demo-nested"
        columns={columns}
        dataSource={result}
        scroll={{ y: 340 }}
      // pagination={{
      //   defaultPageSize: 4,
      //   showSizeChanger: false,
      // }}
      />
    </>
  );
}
