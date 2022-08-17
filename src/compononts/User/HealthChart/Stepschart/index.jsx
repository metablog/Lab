import React from "react";
import styles from "./style.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "1일",
    steps: 2400,
  },
  {
    name: "2일",
    steps: 1398,
  },
  {
    name: "3일",
    steps: 9800,
  },
  {
    name: "4일",
    steps: 3908,
  },
  {
    name: "5일",
    steps: 4800,
  },
  {
    name: "6일",
    steps: 3800,
  },
  {
    name: "7일",
    steps: 4300,
  },
];

export default function Stepschart() {
  const _data = data.map((data) =>
    data.steps >= 3000
      ? { ...data, steps: 3000, stepsSeconds: data.steps - 3000 }
      : data
  );

  return (
    <div className={styles.body}>
      <h4>걸음</h4>
      <BarChart
        width={300}
        height={300}
        data={_data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={10}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="steps" fill="blue" stackId="a" />
        <Bar dataKey="stepsSeconds" fill="#d92130" stackId="a" />
      </BarChart>
    </div>
  );
}
