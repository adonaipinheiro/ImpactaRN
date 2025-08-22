import { StyleSheet, Text, TextInput, type TextInputProps, View } from "react-native";

import { Colors } from "@utils";

interface InputProps extends TextInputProps {
    errorMessage?: string;
}

export function Input({ errorMessage, ...props }: InputProps) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} {...props} />
            {errorMessage && <Text style={styles.errorMessage}>* {errorMessage}</Text>}
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    textInput: {
        backgroundColor: Colors.white[100],
        height: 44,
        width: "100%",
        borderRadius: 4,
        padding: 8,
        fontSize: 16
    },
    errorMessage: {
        marginTop: 8,
        fontStyle: "italic",
        color: Colors.notification
    }
})
