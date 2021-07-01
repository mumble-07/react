import { useState, useContext } from "react";
import "./new-expense-form.scss";
import { AppContext } from "../../Context/AppContext";
import { v4 as uuidv4 } from "uuid";

const NewExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("2022");

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      title: title,
      amount: parseInt(amount),
      date: new Date(setDate),
    };
    dispatch({
      type: "New-Expense",
      payLoad: expense,
    });
  };

  return (
    <div className="expense-form-box">
      <h1>ADD NEW EXPENSE</h1>

      <form className="expense-form" onSubmit={onSubmit}>
        <label>Transaction Name</label>
        <input
          type="text"
          required
          placeholder="Transaction Name"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Amount</label>
        <input
          type="number"
          placeholder="Amount"
          required
          min="0.01"
          step="0.01"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <p>LET'S TALK ABOUT MONEEEEY!</p>
    </div>
  );
};

export default NewExpenseForm;
