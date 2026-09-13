import { useTheme } from "expo-router";
import { TextInput, TextInputProps, View, StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";
import { Spacing } from "@/constants/theme";


interface FormFieldProps extends TextInputProps {
  label: string;
  error?: string;
}

export default function FormField({ label, error, style, ...inputProps }: FormFieldProps) {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <ThemedText type="small" style={styles.label}>
        {label}
      </ThemedText>
      <TextInput
        style={[
          styles.input,
          { color: theme.colors.text, borderColor: error ? '#e53935' : '#00aff5' },
          style,
        ]}
        placeholderTextColor={'#00aff5'}
        {...inputProps}
      />
      {error && (
        <ThemedText type="small" style={styles.errorText}>
          {error}
        </ThemedText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: Spacing.three },
  label: { marginBottom: Spacing.one },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    fontSize: 15,
  },
  errorText: { color: '#e53935', marginTop: Spacing.one },
});