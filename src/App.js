import NewExpense from "./components/newexpense/NewExpense";
import Expenses from "./expenses";
import React, { useState } from "react";

function App() {
  const items = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      loe: "Greens Park",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      loe: "Grand Tusk Road",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      loe: "Georgian City",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      loe: "Adam's Land",
    },
  ];
  const [oldExpenses, setExpenses] = useState(items);
  const addExpenseHandler = (newExpenseData) => {
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onNewExpense={addExpenseHandler} />
      <Expenses expenses={oldExpenses} />;
    </div>
  );
}

export default App;
