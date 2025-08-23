export type User = {
    email: string;
    password: string;
    name: string;
    avatar: string;
    role: string;
    id: number;
};

export type AddNewUserRequestType = {
    name: string;
    email: string;
    password: string;
    avatar: string;
};

export type AddNewUserResponseType = User;
