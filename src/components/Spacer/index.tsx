import { memo } from "react";

import { View } from "react-native";

import { stylesWithParams } from "./styles";

export interface SpacerProps {
    size: number;
    orientation?: "vertical" | "horizontal"
}

function SpacerComponent(props: SpacerProps) {
    const styles = stylesWithParams(props)

    return <View style={styles.container} />
}

export const Spacer = memo(SpacerComponent)

