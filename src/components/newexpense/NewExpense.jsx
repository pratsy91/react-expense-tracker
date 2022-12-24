import React, { useState } from "react";
import "./newexpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const newExpenseHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    setAddClicked(false);
  };
  const [isAddClicked, setAddClicked] = useState(false);
  const addHandler = () => {
    setAddClicked(true);
  };
  const cancelHandler = () => {
    setAddClicked(false);
  };
  return (
    <div className="new-expense">
      {!isAddClicked && <button onClick={addHandler}>Add New Expense</button>}
      {isAddClicked && (
        <ExpenseForm
          onsubmitData={newExpenseHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
