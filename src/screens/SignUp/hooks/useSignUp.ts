import { useMutation } from "@tanstack/react-query";

import { useTranslation } from "@locales";
import { coordinator } from "@routes";
import { addNewUserRequest, AddNewUserRequestType, authRequest, AuthRequestType, productsGetRequest } from "@services";
import { useAuthStore, useUserStore } from "@store";

import { signUpUserFormData } from "./useSignUpForm";

export function useSignUp() {
    const { t } = useTranslation();
    const setTokens = useAuthStore(state => state.setTokens);
    const setUser = useUserStore(state => state.setUser)

    const {
        mutateAsync: productsGetMutateAsync,
        isPending: productsGetIsPending
    } = useMutation({
        mutationKey: ["productsGetRequest"],
        mutationFn: productsGetRequest,
    })

    const {
        mutateAsync: authMutateAsync,
        isPending: authIsPending
    } = useMutation({
        mutationKey: ["authRequest"],
        mutationFn: (params: AuthRequestType) => authRequest(params),
        onSuccess: async params => {
            await productsGetMutateAsync()
            setTokens(params)
        }
    })

    const {
        mutateAsync: addNewUserMutateAsync,
        isPending: addNewUserIsPending
    } = useMutation({
        mutationKey: ["addNewUserRequest"],
        mutationFn: (params: AddNewUserRequestType) => addNewUserRequest(params),
        onSuccess: (params) => {
            setUser(params)
            authMutateAsync({ email: params.email, password: params.password })
        }
    })

    const onSubmit = async (data: signUpUserFormData) => {
        await addNewUserMutateAsync({
            ...data,
            avatar: "https://picsum.photos/800"
        })
    }

    function handleGoBack() {
        coordinator.goBack()
    }

    return {
        t,
        onSubmit,
        isPending: addNewUserIsPending || authIsPending || productsGetIsPending,
        handleGoBack
    }
}
