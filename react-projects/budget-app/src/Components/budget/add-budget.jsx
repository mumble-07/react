import React, { useState } from "react";
import "./style/add-budget.scss";

const AddBudget = (props) => {
  const [value, setValue] = useState(props.budget);

  return (
    <div className="add-budget-box">
      <input
        required
        type="number"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button type="button" onClick={() => props.handleSaveClick(value)}>
        Save
      </button>
    </div>
  );
};

export default AddBudget;
