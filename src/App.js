import NewExpense from "./components/newexpense/NewExpense";
import Expenses from "./expenses";

function App() {
  const addExpenseHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
    };
    console.log(expenseData);
  };
  return (
    <div>
      <NewExpense onNewExpense={addExpenseHandler} />
      <Expenses />;
    </div>
  );
}

export default App;
