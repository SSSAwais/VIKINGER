import React from "react";
import { CategoryScale, Bar, Chart } from "react-chartjs-2";
import chart from "chart.js/auto";
const MonthlyReportChart = () => {
  //   Chart.register(CategoryScale);
  const data = {
    labels: ["a", "b", "c", "d"],
    datasets: [
      {
        label: "Two-Color Bar",
        data: [
          {
            x: "a",
            y: [20, 30],
            color1: "rgba(75,192,192,0.5)",
            color2: "rgba(255,99,132,0.5)",
          },
          {
            x: "b",
            y: [40, 50],
            color1: "rgba(75,192,192,0.5)",
            color2: "rgba(255,99,132,0.5)",
          },
          {
            x: "c",
            y: [60, 70],
            color1: "rgba(75,192,192,0.5)",
            color2: "rgba(255,99,132,0.5)",
          },
          {
            x: "d",
            y: [80, 90],
            color1: "rgba(75,192,192,0.5)",
            color2: "rgba(255,99,132,0.5)",
          },
        ],
        backgroundColor: ["rgba(75,192,192,0.5)", "rgba(255,99,132,0.5)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
  };
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default MonthlyReportChart;
