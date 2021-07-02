import React, { useContext } from "react";
import "./style/expense-items.scss";
import { TiDelete } from "react-icons/ti";
import ExpenseDate from "./expense-date";
import { AppContext } from "../../Context/AppContext";

const ExpenseItems = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "Delete-Expense",
      payload: props.id,
    });
  };

  return (
    <div className="expenses-items">
      <div className="items">
        <h4>{props.title}</h4>
        <h4>$ {props.amount}</h4>
        <ExpenseDate date={props.date} />
        <div className="items-icons">
          <TiDelete onClick={handleDeleteExpense}></TiDelete>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItems;
