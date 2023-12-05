import React from "react";
import "./WorldMap.css";
import worldmap from "../../assets/images/worldmap.png";
import Image from "next/image";
const WorldMap = () => {
  return (
    <>
      <div className="visit_world_map_wrapper">
        <div className="d-flex justify-content-between">
          <h5>Visits World Map</h5>
          <div className="dropdown_box">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                September 2019
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="world_map">
          <Image src={worldmap} alt="" />
        </div>
      </div>
    </>
  );
};

export default WorldMap;
