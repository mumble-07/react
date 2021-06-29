import "./expenses-list.scss";
import ExpensesHeader from "./expenses-header";
import ExpenseItems from "./expense-items";

const ExpensesList = (props) => {
  console.log(props.items); //DESTRUCTURING props.items into title, amount and date, kasi sa expenses inilagay siya as items pa

  return (
    <div>
      <ExpensesHeader />
      {props.items.map((item, index) => (
        <ExpenseItems
          key={index}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
