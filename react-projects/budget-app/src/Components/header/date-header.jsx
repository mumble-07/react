import "./style/date-header.scss";

const DateHeader = () => {
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const year = props.date.getFullYear();
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="date-header">
      <div className="header-date-month">
        {" "}
        {new Date().toLocaleString("en-US", { month: "long" })}
      </div>
      <div className="header-date-day">
        {new Date().toLocaleString("en-US", { day: "2-digit" })}
      </div>
      <div className="header-date-year">{new Date().getFullYear()}</div>
    </div>
  );
};

export default DateHeader;
