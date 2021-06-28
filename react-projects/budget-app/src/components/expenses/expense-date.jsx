import "./expense-date.scss";

const ExpenseDate = (props) => {
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const year = props.date.getFullYear();
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date-month">
        {new Date().toLocaleString("en-US", { month: "long" })}
      </div>
      <div className="expense-date-day">
        {new Date().toLocaleString("en-US", { day: "2-digit" })}
      </div>
      <div className="expense-date-year">{new Date().getFullYear()}</div>
    </div>
  );
};

export default ExpenseDate;
