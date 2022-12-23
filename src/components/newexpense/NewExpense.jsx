import React from "react";
import "./newexpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const newExpenseHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onsubmitData={newExpenseHandler} />
    </div>
  );
};

export default NewExpense;
