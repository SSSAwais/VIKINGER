import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./Engagments.css";
ChartJS.register(ArcElement, Tooltip, Legend);
const Engagments = () => {
  const data = {
    // labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
    // datasets: [
    //   {
    //     data: [55, 20, 10, 15],
    //     backgroundColor: ["#5B64F3", "#00D2E1", "#5B64F3", "#00D2E1"],
    //     hoverBackgroundColor: ["#5B64F3", "#00D2E1", "#5B64F3", "#00D2E1"],
    //   },
    // ],

    datasets: [
      {
        label: "# of Votes",
        data: [55, 20, 10, 15],
        backgroundColor: ["#5B64F3", "#00D2E1", "#5B64F3", "#00D2E1"],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    cutoutPercentage: 80, // Adjust this value to make the doughnut thin
    responsive: true,
    maintainAspectRatio: false,
    // width: "150",
    innerHeight: "150",
    innerWidth: "140",
  };
  return (
    <>
      <div className="engagments_wrapper">
        <h5 className="engagment_heading">Engagments</h5>
        <div>
          <div>
            <Doughnut data={data} options={options} />
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
