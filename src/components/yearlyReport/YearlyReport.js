import React from "react";
import "./YearlyReport.css";
import { Line } from "react-chartjs-2";
const YearlyReport = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Sales",
        data: [50, 65, 50, 65, 55, 50, 60, 55, 50, 55, 60],
        fill: false,
        borderColor: "#00d2e1",
        borderWidth: 1,
        pointBackgroundColor: "rgba(75,192,192,1)",
        pointRadius: 4,
      },
      {
        // label: "Line 2",
        data: [10, 30, 20, 20, 25, 15, 30, 25, 20, 30, 35],

        fill: false,
        borderColor: "#4595fa",
        borderWidth: 1,
        pointBackgroundColor: "#4595fa",
        pointRadius: 4,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <div className="yearly_report_wrapper">
        <div className="d-flex justify-content-between">
          <h5 className="yearly_report_heading">Yearly Report</h5>
          <div className="d-flex">
            <div className="report_action_">
              <span></span>
              <h6>Reactions</h6>
            </div>
            <div className="comment_action">
              <span></span>
              <h6>Comments</h6>
            </div>
          </div>
        </div>
        <div className="line_chart_section">
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default YearlyReport;
