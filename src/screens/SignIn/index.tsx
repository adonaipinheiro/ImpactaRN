import { Text, View } from "react-native";

import { useSignIn } from "./hooks";

export function SignIn() {
    const { t } = useSignIn();

    return (
        <View>
            <Text>{t("signInScreenTitle")}</Text>
        </View>
    )
}
