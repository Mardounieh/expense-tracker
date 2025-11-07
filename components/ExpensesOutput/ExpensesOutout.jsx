import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-09"),
  },
  {
    id: "e2",
    description: "Pizza",
    amount: 5.99,
    date: new Date("2022-01-06"),
  },
  {
    id: "e3",
    description: "Nike Shirt",
    amount: 79.99,
    date: new Date("2020-01-06"),
  },
  {
    id: "e4",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2022-05-20"),
  },
  {
    id: "e5",
    description: "A book",
    amount: 17.99,
    date: new Date("2022-05-21"),
  },
  {
    id: "e6",
    description: "A book",
    amount: 17.99,
    date: new Date("2022-05-21"),
  },
  {
    id: "e7",
    description: "A book",
    amount: 17.99,
    date: new Date("2022-05-21"),
  },
  {
    id: "e8",
    description: "A book",
    amount: 17.99,
    date: new Date("2022-05-21"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 17.99,
    date: new Date("2022-05-21"),
  },
  {
    id: "e10",
    description: "A book",
    amount: 17.99,
    date: new Date("2022-05-21"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      {/* summary */}
      <ExpensesSummary expenses={DUMMY_EXPENSES} period={expensesPeriod} />
      {/* list of expenses */}
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});