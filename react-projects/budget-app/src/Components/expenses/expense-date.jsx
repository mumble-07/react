import "./style/expense-date.scss";

const ExpenseDate = (props) => {
  return (
    <div className="expense-date">
      <div className="expense-date-month">
        {props.date.toLocaleString("en-US", { month: "long" })}
      </div>
      <div className="expense-date-day">
        {props.date.toLocaleString("en-US", { day: "2-digit" })}
      </div>
      <div className="expense-date-year">{props.date.getFullYear()}</div>
    </div>
  );
};

export default ExpenseDate;
