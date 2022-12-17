import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        etitle={expenses[0].title}
        edate={expenses[0].date}
        eamount={expenses[0].amount}
      />
      <ExpenseItem
        etitle={expenses[1].title}
        edate={expenses[1].date}
        eamount={expenses[1].amount}
      />
      <ExpenseItem
        etitle={expenses[2].title}
        edate={expenses[2].date}
        eamount={expenses[2].amount}
      />
      <ExpenseItem
        etitle={expenses[3].title}
        edate={expenses[3].date}
        eamount={expenses[3].amount}
      />
    </div>
  );
}

export default App;
