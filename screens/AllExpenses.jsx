import { useContext, useEffect } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutout";
import { ExpensesContext } from "../context/expenses-context";
import { getExpenses } from "../util/http";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    const fetchExpenses = async () => {
      const expenses = await getExpenses();
      expensesCtx.setExpenses(expenses || []);
    };

    fetchExpenses();
  }, [])

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod={"Total"}
      fallbackText={"No registered expenses found!"}
    />
  );
}

export default AllExpenses;