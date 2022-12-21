import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate edate={props.edate} />
      <div className="expense-item__description">
        <h2>{props.etitle}</h2>
        <div>Location:{props.eloe}</div>
        <div className="expense-item__price">{props.eamount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
