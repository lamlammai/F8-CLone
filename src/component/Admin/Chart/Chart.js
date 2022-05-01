import React, { useState, useEffect } from "react";
import { Column } from '@ant-design/plots';
import { sendGet } from "../../../utils/api";
import "./Chart.scss";
const Data = [
  {
    name: "Khóa HTML",
    time: "16/1",
    gdp: 9,
  },
  {
    name: "Khóa CSS",
    time: "16/1",
    gdp: 18,
  },
  {
    name: "Khóa JS",
    time: "16/1",
    gdp: 11,
  },
  {
    name: "Khóa NodeJS",
    time: "16/1",
    gdp: 19,
  },
  {
    name: "Khóa HTML",
    time: "17/1",
    gdp: 17,
  },
  {
    name: "Khóa CSS",
    time: "17/1",
    gdp: 21,
  },
  {
    name: "Khóa JS",
    time: "17/1",
    gdp: 25,
  },
  {
    name: "Khóa NodeJS",
    time: "17/1",
    gdp: 19,
  },
  {
    name: "Khóa HTML",
    time: "18/1",
    gdp: 12,
  },
  {
    name: "Khóa CSS",
    time: "18/1",
    gdp: 19,
  },
  {
    name: "Khóa JS",
    time: "18/1",
    gdp: 10,
  },
  {
    name: "Khóa NodeJS",
    time: "18/1",
    gdp: 20,
  },
  {
    name: "Khóa HTML",
    time: "19/1",
    gdp: 17,
  },
  {
    name: "Khóa CSS",
    time: "19/1",
    gdp: 14,
  },
  {
    name: "Khóa JS",
    time: "19/1",
    gdp: 10,
  },
  {
    name: "Khóa NodeJS",
    time: "19/1",
    gdp: 10,
  },
  {
    name: "Khóa HTML",
    time: "20/1",
    gdp: 12,
  },
  {
    name: "Khóa CSS",
    time: "20/1",
    gdp: 14,
  },
  {
    name: "Khóa JS",
    time: "20/1",
    gdp: 10,
  },
  {
    name: "Khóa NodeJS",
    time: "20/1",
    gdp: 9,
  },
  {
    name: "Khóa HTML",
    time: "21/1",
    gdp: 12,
  },
  {
    name: "Khóa CSS",
    time: "21/1",
    gdp: 14,
  },
  {
    name: "Khóa JS",
    time: "21/1",
    gdp: 10,
  },
  {
    name: "Khóa NodeJS",
    time: "21/1",
    gdp: 11,
  },
  {
    name: "Khóa HTML",
    time: "22/1",
    gdp: 15,
  },
  {
    name: "Khóa CSS",
    time: "22/1",
    gdp: 19,
  },
  {
    name: "Khóa JS",
    time: "22/1",
    gdp: 21,
  },
  {
    name: "Khóa NodeJS",
    time: "22/1",
    gdp: 12,
  },
  {
    name: "Khóa HTML",
    time: "23/1",
    gdp: 20,
  },
  {
    name: "Khóa CSS",
    time: "23/1",
    gdp: 11,
  },
  {
    name: "Khóa JS",
    time: "23/1",
    gdp: 17,
  },
  {
    name: "Khóa NodeJS",
    time: "23/1",
    gdp: 26,
  },
  {
    name: "Khóa HTML",
    time: "24/1",
    gdp: 20,
  },
  {
    name: "Khóa CSS",
    time: "24/1",
    gdp: 11,
  },
  {
    name: "Khóa JS",
    time: "24/1",
    gdp: 17,
  },
  {
    name: "Khóa NodeJS",
    time: "24/1",
    gdp: 16,
  },
  {
    name: "Khóa HTML",
    time: "25/1",
    gdp: 20,
  },
  {
    name: "Khóa CSS",
    time: "25/1",
    gdp: 11,
  },
  {
    name: "Khóa JS",
    time: "25/1",
    gdp: 17,
  },
  {
    name: "Khóa NodeJS",
    time: "25/1",
    gdp: 8,
  },
];
const Chart = () => {
  const [data, setData] = useState([]);
  async function getTopCourses() {
    const res = await sendGet(`/api/statistic/course`);
    setData(res.data);
  }
  useEffect(() => {
    getTopCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const config = {
    data,
    xField: 'name',
    yField: 'count',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
  };
  return <Column {...config} className="line" />;
};
export default Chart;
