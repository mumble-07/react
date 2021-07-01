import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "New-Expense":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    case "Delete-Expense":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.key !== action.payload
        ),
      };

    default:
      return state;
  }
};

const initialState = {
  budget: 5000,
  expenses: [
    { id: 1, title: "Shopping", amount: 40, date: new Date(2020, 3, 2) },
    { id: 2, title: "Food", amount: 30, date: new Date(2021, 3, 2) },
    { id: 3, title: "Laptop", amount: 100, date: new Date(2021, 6, 12) },
  ],
};

export const AppContext = createContext();
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
