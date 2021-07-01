import React from "react";
import "./style/show-budget.scss";
const showBudget = (props) => {
  return (
    <>
      <span>Budget: £{props.budget}</span>
      <button
        type="button"
        class="btn btn-primary"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
};

export default showBudget;
