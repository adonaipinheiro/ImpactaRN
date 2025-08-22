import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "@locales"
import { useForm } from "react-hook-form";
import { z } from "zod";

const signInUserFormSchema = ({ requiredText, emailErrorText }: { requiredText: string, emailErrorText: string }) => z.object({
    email: z.string({ message: requiredText }).email({ message: emailErrorText }),
    password: z.string({ message: requiredText }),
})

export type signInUserFormData = z.infer<ReturnType<typeof signInUserFormSchema>>

export function useSignInForm() {
    const { t } = useTranslation();
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<signInUserFormData>({
        resolver: zodResolver(signInUserFormSchema(
            {
                requiredText: t("inputRequired"),
                emailErrorText: t("emailInputError")
            }
        ))
    })

    return {
        handleSubmit,
        errors,
        control
    }
}
