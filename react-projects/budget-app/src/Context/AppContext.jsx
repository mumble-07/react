import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "New-Expense":
      return {
        ...state,
        expenses: [...state.expenses, action.expense],
      };

    case "Delete-Expense":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "Add-Budget":
      return {
        ...state,
        budget: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  budget: 5000,
  expenses: [
    {
      id: uuidv4(),
      title: "Shopping",
      amount: 200,
      date: new Date(2020, 3, 2),
    },
    { id: uuidv4(), title: "Pizza", amount: 20, date: new Date(2021, 3, 2) },
    { id: uuidv4(), title: "Car", amount: 100, date: new Date(2021, 6, 12) },
    { id: uuidv4(), title: "Cake", amount: 75, date: new Date(2019, 8, 6) },
    { id: uuidv4(), title: "Bike", amount: 50, date: new Date(2021, 1, 1) },
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
