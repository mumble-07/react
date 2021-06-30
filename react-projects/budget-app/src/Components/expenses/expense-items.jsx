import "./expense-items.scss";
import { TiDelete } from "react-icons/ti";
import { TiEdit } from "react-icons/ti";
import ExpenseDate from "./expense-date";

const ExpenseItems = (props) => {
  return (
    <div className="expenses-items">
      <div className="items">
        <h4>{props.title}</h4>
        <h4>$ {props.amount}</h4>
        <ExpenseDate date={props.date} />

        <div className="items-icons">
          <TiEdit className="edit" />
          <TiDelete className="delete" />
        </div>
      </div>
    </div>
  );
};

export default ExpenseItems;
