import React from "react";
import "./style/show-budget.scss";
const ShowBudget = (props) => {
  return (
    <div>
      <span>Budget: $ {props.budget}</span>
      <button type="button" onClick={props.handleEditClick}>
        Edit
      </button>
    </div>
  );
};

export default ShowBudget;
