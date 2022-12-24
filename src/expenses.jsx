import ExpenseItem from "./components/ExpenseItem";
import React, { useState } from "react";

import "./expenses.css";
import ExpenseFilter from "./components/ExpenseFilter";

const Expenses = (props) => {
  const [selectedYear, newSelectedYear] = useState("2019");
  const selectHandler = (year) => {
    newSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div className="expenses">
      <ExpenseFilter select={selectedYear} onSelect={selectHandler} />
      {filteredExpenses.length === 0 ? (
        <p>NO Expense Found</p>
      ) : (
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              etitle={expense.title}
              edate={expense.date}
              eamount={expense.amount}
              eloe={expense.loe}
            ></ExpenseItem>
          );
        })
      )}
    </div>
  );
};

export default Expenses;
