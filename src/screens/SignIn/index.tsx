import { Image, StyleSheet, View } from "react-native";

import { Controller } from "react-hook-form";

import { Images } from "@assets";
import { Spacer, Button, Input } from "@components";

import { useSignIn, useSignInForm } from "./hooks";

export function SignIn() {
    const { t, onSubmit, isPending, handleGoToSignUp } = useSignIn();
    const { errors, handleSubmit, control } = useSignInForm();

    return (
        <View style={styles.container}>
            <Image source={Images.logoImpacta} style={styles.image} resizeMode="contain" />
            <Spacer size={64} />
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        placeholder={t("signInScreenEmailInput")}
                        errorMessage={errors.email?.message}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                    />
                )}
            />
            <Spacer size={16} />
            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        placeholder={t("signInScreenPassInput")}
                        errorMessage={errors.password?.message}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry
                    />
                )}
            />
            <Spacer size={16} />
            <Button text={t("enter")} loading={isPending} onPress={handleSubmit(onSubmit)} />
            <Spacer size={16} />
            <Button text={t("register")} type="outlined" onPress={handleGoToSignUp} />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    image: {
        width: "80%",
        height: 40
    }
});
