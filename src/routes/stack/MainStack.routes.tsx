import { Image, Platform, StyleSheet, Text } from "react-native";

import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useQueryClient } from '@tanstack/react-query';

import { Images } from "@assets";
import { Dashboard, SignIn, SignUp } from "@screens";
import { useAuthStore, useUserStore } from "@store";
import { Colors } from "@utils";

export const MainStackScreenNames = {
    SignIn: 'SignIn',
    SignUp: "SignUp",
    Dashboard: "Dashboard",
} as const;

export type MainStackParams = {
    [MainStackScreenNames.SignIn]: undefined;
    [MainStackScreenNames.SignUp]: undefined;
    [MainStackScreenNames.Dashboard]: undefined;
};

const MainStackNavigator =
    createNativeStackNavigator<MainStackParams>();

const signInScreenOptions: NativeStackNavigationOptions = {
    headerShown: false
};

const signUpScreenOptions: NativeStackNavigationOptions = {
    headerBackVisible: true,
    headerBackButtonDisplayMode: "minimal",
    headerTitle: () => <Image source={Images.logoImpacta} style={styles.image} resizeMode="contain" />,
    headerTitleAlign: "center",
    animation: Platform.OS === "ios" ? "default" : "none"
};

const dashboardScreenOptions = (image: string, signOut: () => void): NativeStackNavigationOptions => ({
    headerTitle: () => <Image source={Images.logoImpacta} style={styles.image} resizeMode="contain" />,
    headerLeft: () => <Image source={{ uri: image }} style={styles.userAvatar} resizeMode="contain" />,
    headerRight: () => <Text style={styles.signOutText} onPress={signOut}>Sair</Text>
});

export function MainStack() {
    const auth = useAuthStore(state => state.tokens);
    const clear = useAuthStore(state => state.clear);
    const user = useUserStore(state => state.user);
    const queryClient = useQueryClient();

    function signOut() {
        queryClient.clear();
        clear();
    }

    return (
        <>
            {auth && user ? (
                <MainStackNavigator.Screen
                    name={MainStackScreenNames.Dashboard}
                    component={Dashboard}
                    options={dashboardScreenOptions(user.avatar, signOut)}
                />
            ) : (
                <>
                    <MainStackNavigator.Screen
                        name={MainStackScreenNames.SignIn}
                        component={SignIn}
                        options={signInScreenOptions}
                    />
                    <MainStackNavigator.Screen
                        name={MainStackScreenNames.SignUp}
                        component={SignUp}
                        options={signUpScreenOptions}
                    />
                </>
            )}


        </>
    );
}

export const styles = StyleSheet.create({
    image: {
        width: "80%",
        height: 20
    },
    userAvatar: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: Colors.gray[300]
    },
    signOutText: {
        color: Colors.white[100]
    }
});
