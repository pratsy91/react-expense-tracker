import React, { useState } from "react";

import "./expenseform.css";

const ExpenseForm = (props) => {
  const [enteredTitile, newTitle] = useState("");
  const [enteredAmount, newAmount] = useState("");
  const [enteredDate, newDate] = useState("");
  const [enteredLocation, newLocation] = useState("");
  const titleHandler = (event) => {
    newTitle(event.target.value);
  };
  const locationHandler = (event) => {
    newLocation(event.target.value);
  };
  const amountHandler = (event) => {
    newAmount(event.target.value);
  };
  const dateHandler = (event) => {
    newDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitile,
      amount: enteredAmount,
      date: new Date(enteredDate),
      loe: enteredLocation,
    };
    props.onsubmitData(expenseData);
    newTitle("");
    newAmount("");
    newDate("");
    newLocation("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitile} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            onChange={amountHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019 - 01 - 01"
            max="2020 - 12 - 31"
            onChange={dateHandler}
            value={enteredDate}
          />
        </div>
        <div className="new-expense__control">
          <label>Location</label>
          <input
            type="text"
            onChange={locationHandler}
            value={enteredLocation}
          />
        </div>
      </div>
      <div className="new-expense__button">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
