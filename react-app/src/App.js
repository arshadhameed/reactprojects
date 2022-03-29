// import ExpenseItem from "./components/Expenses/ExpenseItem";
// import "./components/ExpenseItem.css";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "toilet paper",
    amount: "80",
    date: new Date(2019, 0, 5),
  },
  {
    id: "e2",
    title: "new TV",
    amount: "100",
    date: new Date(2020, 1, 4),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: "110",
    date: new Date(2021, 2, 7),
  },
  {
    id: "e4",
    title: "cell phone",
    amount: "150",
    date: new Date(2022, 3, 9),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expenses);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
