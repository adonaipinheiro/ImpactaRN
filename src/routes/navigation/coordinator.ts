import { navigation } from "./navigation";
import { MainStackScreenNames } from "../stack/MainStack.routes";

const mainCoordinator = {
    gotToSignIn: () => navigation.push(MainStackScreenNames.SignIn),
};

export const coordinator = {
    ...mainCoordinator,
    goBack: () => navigation.goBack(),
};
