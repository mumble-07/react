import React, { useState } from "react";
import "./style/add-budget.scss";

const AddBudget = (props) => {
  const [value, setValue] = useState(props.budget);
  return (
    <div className="add-budget-box">
      <input
        required="required"
        type="number"
        class="form-control mr-3"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </div>
  );
};

export default AddBudget;
