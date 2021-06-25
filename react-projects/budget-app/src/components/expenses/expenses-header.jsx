import react from "react";
import "./expenses-header.scss";

const ExpensesHeader = () => {
  return (
    <div className="expenses-filter">
      <button className="filter">FILTER </button>
      <button className="sort">SORT</button>
    </div>
  );
};

export default ExpensesHeader;
