import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutout";
import { ExpensesContext } from "../context/expenses-context";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod={"Total"}
      fallbackText={"No registered expenses found!"}
    />
  );
}

export default AllExpenses;