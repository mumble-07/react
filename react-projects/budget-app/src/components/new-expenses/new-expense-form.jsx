import "./new-expense-form.scss";

const NewExpenseForm = () => {
  return (
    <div className="expense-form-box">
      <h1>ADD NEW EXPENSE</h1>
      <form className="expense-form">
        <label>Transaction Name</label>
        <input type="text" placeholder="Transaction Name" />
        <label>Amount</label>
        <input type="number" placeholder="Amount" />
        <label>Date</label>
        <input type="date" />
        <button type="submit">Add</button>
      </form>
      <p>LET'S TALK ABOUT MONEEEEY!</p>
    </div>
  );
};

export default NewExpenseForm;
