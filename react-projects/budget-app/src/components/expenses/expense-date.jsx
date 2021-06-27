import "./expense-date.scss";

const ExpenseDate = (props) => {
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const year = props.date.getFullYear();
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date-month">June</div>
      <div className="expense-date-day">30</div>
      <div className="expense-date-year">2021</div>
    </div>
  );
};

export default ExpenseDate;
