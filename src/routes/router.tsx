import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { navigationRef } from "./navigation";
import { MainStack, MainStackParams } from "./stack/MainStack.routes";
import { ImpactaTheme } from "./theme";

export type RootStackParams = {
    MainStack: MainStackParams;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export function Router() {
    return (
        <NavigationContainer
            ref={navigationRef}
            theme={ImpactaTheme}
        >
            <RootStack.Navigator screenOptions={{ animation: 'default' }}>
                {MainStack()}
            </RootStack.Navigator>
        </NavigationContainer >
    );
}
