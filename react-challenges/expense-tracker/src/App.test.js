import { render, screen } from "@testing-library/react";
import App from "./App";
import ExpenseForm from "./NewExpense/ExpenseForm";
import NewExpense from "./NewExpense/NewExpense";
import userEvent from "@testing-library/user-event";

test("render the Add Expense", () => {
  render(<ExpenseForm />);
  const addExpense = screen.getByText(/Add Expense/i);
  expect(addExpense).toBeInTheDocument;
});

test("Display Car Insurance", () => {
  render(<App />);
  const carInsuranceText = screen.getByText(/Car Insurance/i);
  expect(carInsuranceText).toBeInTheDocument();
});

test("render show Form", () => {
  render(<NewExpense />);
  // const showForm = screen.queryByText(/Show Form/i);
  // expect(showForm).toBeInTheDocument();
});

// test("Click add expense button to show add expense form", () => {
//   render(<App />);
//   const addExpenseHandler = screen.queryByText(/Add Expense/i);
//   userEvent.click(addExpenseHandler);
//   const titleLabel = screen.queryByText(/Title/i);
// //   expect(titleLabel).toBeInTheDocument;
// });
