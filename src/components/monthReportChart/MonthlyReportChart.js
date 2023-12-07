import React from "react";
import { CategoryScale, Bar, Chart } from "react-chartjs-2";
import chart from "chart.js/auto";
const MonthlyReportChart = () => {
  const data = {
    labels: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
    datasets: [
      {
        label: "",
        backgroundColor: "#5B64F3",
        borderColor: "#5B64F3",
        borderWidth: 1,
        hoverBackgroundColor: "#5B64F3",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [
          10, 20, 30, 40, 50, 14, 30, 80, 10, 5, 1, 60, 30, 35, 40, 22, 33, 77,
          49, 40, 12, 65, 74, 32, 11, 66, 44, 24, 29, 10, 5,
        ],
      },
      {
        label: "",
        backgroundColor: "#23D3FB",
        borderColor: "#23D3FB",
        borderWidth: 1,
        hoverBackgroundColor: "#23D3FB",
        hoverBorderColor: "#23D3FB",
        data: [
          15, 25, 35, 20, 20, 38, 5, 35, 15, 40, 32, 4, 9, 7, 32, 11, 30, 49,
          11, 66, 22, 33, 10, 8, 7, 3, 55, 43, 3, 60, 70,
        ],
      },
    ],
  };
  const options = {
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
    plugins: {
      legend: {
        display: false,
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
