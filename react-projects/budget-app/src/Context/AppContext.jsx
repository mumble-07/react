import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialState = {
  balance: 2000,
  expenses: [
    { id: 1235, title: "Shopping", amount: 40, date: new Date(2020, 3, 2) },
    { id: 1123132, title: "Food", amount: 30, date: new Date(2021, 3, 2) },
    { id: 1133, title: "Laptop", amount: 100, date: new Date(2021, 6, 12) },
  ],
};

export const AppContext = createContext();
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        balance: state.balance,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
