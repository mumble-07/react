import { useState, useContext } from "react";
import "./style/new-expense-form.scss";
import { AppContext } from "../../Context/AppContext";
import { v4 as uuidv4 } from "uuid";

const NewExpenseForm = (props) => {
  const { dispatch } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      title: title,
      amount: parseInt(amount),
      date: new Date(enteredDate),
    };

    dispatch({
      type: "New-Expense",
      payload: expense,
    });
    setTitle("");
    setAmount("");
    setEnteredDate("");
  };

  return (
    <div className="expense-form-box">
      <h1>ADD NEW EXPENSE</h1>

      <form className="expense-form" onSubmit={onSubmit}>
        <label for="title">Transaction Name</label>
        <input
          type="text"
          id="title"
          required
          placeholder="Transaction Name"
          autoComplete="off"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label for="amount">Amount</label>
        <input
          type="number"
          id="amount"
          placeholder="Amount"
          required
          min="0.01"
          step="0.01"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <label for="date">Date</label>
        <input
          type="date"
          id="date"
          min="2019-01-01"
          max="2022-12-31"
          value={enteredDate}
          onChange={dateChangedHandler}
        />
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default NewExpenseForm;
