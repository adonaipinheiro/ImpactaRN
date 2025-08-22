import { StyleSheet } from "react-native";

import { Colors } from "@utils";

import { ButtonProps } from ".";

type StyleParamsType = Pick<ButtonProps, "type" | "loading">

export const stylesWithParams = ({ type, loading }: StyleParamsType) => StyleSheet.create({
    container: {
        width: "100%",
        height: 44,
        backgroundColor: type === "primary" ? Colors.primary : "transparent",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        opacity: !loading ? 1 : 0.7,

        // Border Configuration
        borderWidth: type === "outlined" ? 2 : 0,
        borderColor: type === "outlined" ? Colors.primary : "transparent",
    },
    text: {
        fontSize: 16,
        color: type === "primary" ? Colors.black[100] : Colors.white[100],
        fontWeight: "bold"
    }
})
