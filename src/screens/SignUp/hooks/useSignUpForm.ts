import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useTranslation } from "@locales";

const signUpUserFormSchema = ({ requiredText, emailErrorText, passwordDontMatch }: { requiredText: string, emailErrorText: string, passwordDontMatch: string }) => z.object({
    name: z.string({ message: requiredText }),
    email: z.string({ message: requiredText }).email({ message: emailErrorText }),
    password: z.string({ message: requiredText }).min(4, "A senha deve conter no mínimo 4 dígitos"),
    confirm_password: z.string({ message: requiredText })
}).refine(({ password, confirm_password }) => password === confirm_password, {
    message: passwordDontMatch,
    path: ["confirm_password"]
});

export type signUpUserFormData = z.infer<ReturnType<typeof signUpUserFormSchema>>;

export function useSignUpForm() {
    const { t } = useTranslation();
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<signUpUserFormData>({
        resolver: zodResolver(signUpUserFormSchema(
            {
                requiredText: t("inputRequired"),
                emailErrorText: t("emailInputError"),
                passwordDontMatch: t("passDontMatch")
            }
        ))
    });

    return {
        handleSubmit,
        errors,
        control
    };
}
