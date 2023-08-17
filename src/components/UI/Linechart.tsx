"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
};
export const data = {
  labels,
  datasets: [
    {
      label: "posts ",
      data: [10, 22, 34, 43, 47, 50],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const Linechart = () => {
  return (
    <div className=" mx-auto lg:h-[600px] mt-20 sm:mt-0 lg:mt-4 lg:ml-12  lg:w-[60vw]">
      <Line options={options} data={data} />;
    </div>
  );
};

export default Linechart;
