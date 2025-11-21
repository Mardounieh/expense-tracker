import { View, TextInput, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, style, options, invalid }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        style={[
          styles.input,
          options.multiline && styles.inputMultiline,
          invalid && styles.invalidInput,
        ]}
        {...options}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
    gap: 6,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary200,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    borderWidth: 2,
    borderColor: GlobalStyles.colors.error50,
  },
});
