import { useTranslation } from "@locales";

export function useSignIn() {
    const { t } = useTranslation();

    return {
        t
    }
}
