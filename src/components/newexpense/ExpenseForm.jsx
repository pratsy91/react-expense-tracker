import React from "react";
import "./expenseform.css";

const ExpenseForm = () => {
  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.1" step="0.1" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019 - 01 - 01" max="2020 - 12 - 31" />
        </div>
        <div className="new-expense__control">
          <label>Location</label>
          <input type="text" />
        </div>
      </div>
      <div className="new-expense__button">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
