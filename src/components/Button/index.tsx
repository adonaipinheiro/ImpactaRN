import { memo } from "react";

import { Text, TouchableOpacity, type TouchableOpacityProps } from "react-native";

import { useTranslation } from "@locales";

import { stylesWithParams } from "./styles";

type ButtonPropType = "primary" | "outlined"

export interface ButtonProps extends TouchableOpacityProps {
    text: string;
    type?: ButtonPropType;
    loading?: boolean;
}

function ButtonComponent({ text, type = "primary", loading = false, ...props }: ButtonProps) {
    const { t } = useTranslation();
    const styles = stylesWithParams({ type, loading });

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            disabled={loading}
            {...props}
        >
            <Text style={styles.text}>{loading ? t("loading") : text}</Text>
        </TouchableOpacity>
    )
}

export const Button = memo(ButtonComponent)

