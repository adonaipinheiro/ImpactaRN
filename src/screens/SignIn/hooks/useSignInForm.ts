import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useTranslation } from "@locales";

const signInUserFormSchema = ({ requiredText }: { requiredText: string }) => z.object({
    email: z.string({ message: requiredText }).email({ message: "Digite um e-mail válido" }),
    password: z.string({ message: requiredText }),
});

export type signInUserFormData = z.infer<ReturnType<typeof signInUserFormSchema>>;

export function useSignInForm() {
    const { t } = useTranslation();
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<signInUserFormData>({
        resolver: zodResolver(signInUserFormSchema(
            {
                requiredText: t("inputRequired")
            }
        ))
    });

    return {
        handleSubmit,
        errors,
        control
    };
}
