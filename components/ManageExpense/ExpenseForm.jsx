import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button/Button";
import { GlobalStyles } from "../../constants/styles";

const ExpenseForm = ({ btnLabel, defaultValues, onCancel, onSubmit }) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  const inputChangeHandler = (identifier, enteredValue) => {
    setInputs((cur) => {
      return {
        ...cur,
        [identifier]: { value: enteredValue, isValid: true },
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((cur) => {
        return {
          amount: { value: cur.amount.value, isValid: amountIsValid },
          date: { value: cur.date.value, isValid: dateIsValid },
          description: {
            value: cur.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  };

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.amountAndDate}>
        <Input
          label={"Amount"}
          style={{ flex: 1 }}
          options={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
          invalid={!inputs.amount.isValid}
        />
        <Input
          label={"Date"}
          style={{ flex: 1 }}
          options={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
          invalid={!inputs.date.isValid}
        />
      </View>
      <Input
        label={"Description"}
        options={{
          multiline: true,
          autoCorrect: false,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
        invalid={!inputs.description.isValid}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - Please check your entered data
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode={"flat"} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {btnLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginVertical: 24,
  },
  amountAndDate: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  button: {
    minWidth: 120,
  },
});
