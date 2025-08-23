import { navigation } from "./navigation";
import { MainStackScreenNames } from "../stack/MainStack.routes";

const mainCoordinator = {
    gotToSignIn: () => navigation.replace(MainStackScreenNames.SignIn),
    gotToSignUp: () => navigation.push(MainStackScreenNames.SignUp),
    gotToDashboard: () => navigation.replace(MainStackScreenNames.Dashboard),
};

export const coordinator = {
    ...mainCoordinator,
    goBack: () => navigation.goBack(),
};
