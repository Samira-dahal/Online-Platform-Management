import { Status } from "@/lib/types/type"

export interface IUserData {
    username: string;
    token: string;
}

export interface IRegisterData {
    username: string;
    email: string;
    password: string; 
}

export interface IInitialState {
    user: IUserData | null; 
    status: Status;
}