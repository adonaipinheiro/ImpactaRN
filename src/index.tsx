import { Text, View } from "react-native";

import { useApp } from "@hooks";

export default function App() {
    useApp();

    return (
        <View>
            <Text>Olá, Impacta</Text>
        </View>
    )
}