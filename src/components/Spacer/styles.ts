import { StyleSheet } from "react-native";

import { SpacerProps } from ".";

export const stylesWithParams = ({ size, orientation = "vertical" }: SpacerProps) => StyleSheet.create({
    container: {
        width: orientation === "horizontal" ? size : 0,
        height: orientation === "vertical" ? size : 0,
    }
})
