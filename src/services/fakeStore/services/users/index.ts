import { fakeStoreApi } from "services/fakeStore/api";

import { AddNewUserRequestType, AddNewUserResponseType } from "./types";

export async function addNewUserRequest(params: AddNewUserRequestType) {
    return await fakeStoreApi.post<AddNewUserResponseType>("users", {
        id: Symbol(params.email),
        ...params
    })
        .then(r => r.data);
}
