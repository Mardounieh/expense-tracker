import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const ExpensesSummary = ({ period, expenses }) => {
  const [total, setTotal] = useState();
  useEffect(() => {
    if (expenses) {
      const sum = expenses.reduce((acc, exp) => acc + exp.amount, 0);
      setTotal(sum);
    }
  }, [expenses]);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.sum}>${total?.toFixed(2) || "0"}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});