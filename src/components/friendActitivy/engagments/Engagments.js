import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./Engagments.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const Engagments = () => {
  // const data = {
  //   datasets: [
  //     {
  //       label: "# of Votes",
  //       data: [55, 20, 10, 15],
  //       backgroundColor: ["#5B64F3", "#00D2E1", "#5B64F3", "#00D2E1"],

  //       borderWidth: 0,
  //     },
  //   ],
  // };
  const data = {
    labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
    datasets: [
      {
        data: [55, 20, 15, 20],
        backgroundColor: ["#5B64F3", "#00D2E1", "#5B64F3", "#00D2E1"],
        borderWidth: 0, // Set the border width to 0 for a doughnut chart
      },
    ],
  };

  const options = {
    cutoutPercentage: 100, // Adjust the cutout percentage to control the size of the doughnut hole
    cutout: "80%",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const containerStyle = {
    width: `138px`,
    height: `150px`,
  };

  return (
    <>
      <div className="engagments_wrapper">
        <h5 className="engagment_heading">Engagments</h5>
        <div>
          <div>{/* <Doughnut data={data} options={options} /> */}</div>
          <div style={containerStyle} className="m-auto position-relative">
            <Doughnut data={data} options={options} />
            <div className="engag_reation">
              <p>28.8K</p>
              <h6>engagment</h6>
            </div>
          </div>
          <div className="reaction__comments">
            <div className="reaction_friend">
              <span></span>
              <h5>18.3K</h5>
              <p>REACTIONS</p>
            </div>
            <div className="comments_frinds">
              <span></span>
              <h5>5.2K</h5>
              <p>COMMENTS</p>
            </div>
          </div>
          <div className="share__replies">
            <div className="reaction_friend">
              <span></span>
              <h5>1.4K</h5>
              <p>SHARES</p>
            </div>
            <div className="comments_frinds">
              <span></span>
              <h5>3.9K</h5>
              <p>REPLIES</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Engagments;
