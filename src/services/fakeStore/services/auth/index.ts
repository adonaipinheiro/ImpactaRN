import { fakeStoreApi } from "services/fakeStore/api";

import { AuthGetUserRequestType, AuthRequestType, AuthResponseType } from "./types";
import { User } from "../users/types";

export async function authRequest(params: AuthRequestType) {
    return await fakeStoreApi.post<AuthResponseType>("auth/login", params)
        .then(r => r.data)
}

export async function authGetUserRequest(params: AuthGetUserRequestType) {
    return await fakeStoreApi.get<User>("auth/profile", {
        headers: {
            Authorization: `Bearer ${params.access_token}`
        }
    })
        .then(r => r.data)
}
