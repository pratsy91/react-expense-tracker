import "./app.css";
import NewExpense from "./components/newexpense/NewExpense";
import Expenses from "./expenses";

function App() {
  return (
    <div>
      <NewExpense />
      <Expenses />;
    </div>
  );
}

export default App;
