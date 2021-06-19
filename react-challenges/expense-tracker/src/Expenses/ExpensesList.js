import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  console.log(props.items);
  return (
    <ul className="expenses-list">
      {props.items.map((item, index) => (
        <ExpenseItem
          key={index}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ))}
      {/* <ExpenseItem title={title} date={date} amount={amount} /> */}
    </ul>
  );
};

export default ExpensesList;
