import React from "react";
import "./style/show-budget.scss";
const ShowBudget = (props) => {
  return (
    <div className="main-budget-box">
      <h5>Budget:</h5> <h3>₲ {props.budget}</h3>
      <div>
        <button type="button" onClick={props.handleEditClick}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default ShowBudget;
