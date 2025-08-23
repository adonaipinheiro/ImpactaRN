import { useMutation } from "@tanstack/react-query";

import { useTranslation } from "@locales";
import { coordinator } from "@routes";
import { authGetUserRequest, AuthGetUserRequestType, authRequest, AuthRequestType, productsGetRequest } from "@services";
import { useAuthStore, useUserStore } from "@store";

import { signInUserFormData } from "./useSignInForm";

export function useSignIn() {
    const { t } = useTranslation();
    const setTokens = useAuthStore(state => state.setTokens)
    const setUser = useUserStore(state => state.setUser)

    const {
        mutateAsync: productsGetMutateAsync,
        isPending: productsGetIsPending
    } = useMutation({
        mutationKey: ["productsGetRequest"],
        mutationFn: productsGetRequest,
    })

    const {
        mutateAsync: authGetUserMutateAsync,
        isPending: authGetUserIsPending
    } = useMutation({
        mutationKey: ["authGetUserRequest"],
        mutationFn: (params: AuthGetUserRequestType) => authGetUserRequest(params),
        onSuccess: params => {
            setUser(params)
        }
    })

    const {
        mutateAsync: authMutateAsync,
        isPending: authIsPending
    } = useMutation({
        mutationKey: ["authRequest"],
        mutationFn: (params: AuthRequestType) => authRequest(params),
        onSuccess: async params => {
            await productsGetMutateAsync()
            await authGetUserMutateAsync(params)
                .then(() => {
                    setTokens(params)
                })
        }
    })

    const onSubmit = async (data: signInUserFormData) => {
        await authMutateAsync(data)
    }

    function handleGoToSignUp() {
        coordinator.gotToSignUp()
    }

    return {
        t,
        onSubmit,
        isPending: authGetUserIsPending || authIsPending || productsGetIsPending,
        handleGoToSignUp
    }
}
