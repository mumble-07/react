import React, { useContext } from "react";
import "./total-expenses.scss";
import { AppContext } from "../../Context/AppContext";

const TotalExpenses = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.amount);
  }, 0);

  return (
    <div className="total-expenses-box">
      <h1>Total Expenses</h1>
      <span>{totalExpenses}</span>
    </div>
  );
};

export default TotalExpenses;
