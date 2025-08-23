import { Image, StyleSheet, View } from "react-native";

import { Controller } from "react-hook-form";

import { Images } from "@assets";
import { Spacer, Button, Input } from "@components";

import { useSignUp, useSignUpForm } from "./hooks";

export function SignUp() {
    const { t, onSubmit, isPending, handleGoBack } = useSignUp();
    const { errors, handleSubmit, control } = useSignUpForm();

    return (
        <View style={styles.container}>
            <Image source={Images.logoImpactaMinimal} style={styles.image} resizeMode="contain" />
            <Spacer size={32} />
            <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        placeholder={t("signUpScreenUserInput")}
                        errorMessage={errors.name?.message}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                )}
            />
            <Spacer size={16} />
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
            <Controller
                control={control}
                name="confirm_password"
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        placeholder={t("signUpScreenConfirmPass")}
                        errorMessage={errors.confirm_password?.message}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry
                    />
                )}
            />
            <Spacer size={16} />
            <Button text={t("register")} loading={isPending} onPress={handleSubmit(onSubmit)} />
            <Spacer size={16} />
            <Button text={t("goBack")} type="outlined" onPress={handleGoBack} />
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
        width: "100%",
        height: 50
    }
});
