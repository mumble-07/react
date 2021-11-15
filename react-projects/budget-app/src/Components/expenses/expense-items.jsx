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
        <div className="title">{props.title}</div>
        <div className="amount">₲ {props.amount}</div>
        <div className="date">
          <ExpenseDate date={props.date} />
        </div>

        <div className="items-icons">
          <span>
            <TiDelete onClick={handleDeleteExpense}></TiDelete>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItems;
