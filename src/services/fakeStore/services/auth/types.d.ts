export type AuthRequestType = {
    email: string;
    password: string;
}

export type AuthResponseType = {
    access_token: string;
    refresh_token: string;
}

export type AuthGetUserRequestType = {
    access_token: string;
}
