import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MainStack, MainStackParams } from "./stack/MainStack.routes";
import { ImpactaTheme } from "./theme";

export type RootStackParams = {
    MainStack: MainStackParams;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export function Router() {
    return (
        <NavigationContainer
            theme={ImpactaTheme}
        >
            <RootStack.Navigator>
                {MainStack()}
            </RootStack.Navigator>
        </NavigationContainer >
    );
}
