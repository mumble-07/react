import "./date-header.scss";

const DateHeader = () => {
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const year = props.date.getFullYear();
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="date-header">
      <div className="header-date-month">MONTH</div>
      <div className="header-date-day">DAY</div>
      <div className="header-date-year">YEAR</div>
    </div>
  );
};

export default DateHeader;
