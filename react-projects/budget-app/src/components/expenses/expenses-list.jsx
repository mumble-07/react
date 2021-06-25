import react from "react";
import "./expenses-list.scss";
import ExpensesHeader from "./expenses-header";

const ExpensesList = () => {
  return (
    <div>
      <ExpensesHeader />
      <div className="expenses-list">
        <ul>Item 1</ul>
        <ul>Item 1</ul>
        <ul>Item 1</ul>
      </div>
    </div>
  );
};

export default ExpensesList;
