import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveIcon from "@mui/icons-material/Remove";

const MyApp = ({ data, add, re }) => {
  return (
    <>
      <div className="main">
        <h1> Counter App</h1>
        <p className="demo">{data}</p>
        <div className="btn">
          <button onClick={add}>
            <span>
              <AddCircleIcon />
            </span>
          </button>
          <button onClick={re}>
            <span>
              <RemoveIcon />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MyApp;
