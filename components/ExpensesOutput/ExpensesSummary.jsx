import { useEffect } from "react";
import { Text, View } from "react-native";

const ExpensesSummary = ({ period, expenses }) => {
  let total;
  useEffect(() => {
    if (expenses) {
      total = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
      }, 0);
    }
  }, []);

  return (
    <View>
      <Text>{period}</Text>
      <Text>${total?.toFixed(2) || "0"}</Text>
    </View>
  );
};

export default ExpensesSummary;
