import React from "react";
import "./YearlyReport.css";
import { Line } from "react-chartjs-2";
const YearlyReport = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Sepetember",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Monthly Sales",
        data: [50, 65, 50, 65, 55, 50, 60, 55, 50],
        fill: false,
        borderColor: "#00d2e1",
        borderWidth: 2,
        pointBackgroundColor: "rgba(75,192,192,1)",
        pointRadius: 5,
      },
      {
        // label: "Line 2",
        data: [40, 55, 40, 50, 40, 42, 50, 45, 40],

        fill: false,
        borderColor: "#4595fa",
        borderWidth: 2,
        pointBackgroundColor: "#4595fa",
        pointRadius: 5,
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
