import { useTranslation } from "@locales";

import { signInUserFormData } from "./useSignInForm";

export function useSignIn() {
    const { t } = useTranslation();

    const onSubmit = (data: signInUserFormData) => {
        console.log(data)
    }

    return {
        t,
        onSubmit
    }
}
