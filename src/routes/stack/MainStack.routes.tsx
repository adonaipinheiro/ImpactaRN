import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "@screens";

export const MainStackScreenNames = {
    SignIn: 'SignIn',
} as const;

export type MainStackParams = {
    [MainStackScreenNames.SignIn]: undefined;
};

const MainStackNavigator =
    createNativeStackNavigator<MainStackParams>();

export function MainStack() {
    return (
        <>
            <MainStackNavigator.Screen
                name={MainStackScreenNames.SignIn}
                component={SignIn}
            />
        </>
    )
}
