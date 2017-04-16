import { createAction } from "redux-actions";

export const GET_ALL_USERS = "GET_ALL_USERS";
export const getAllUsers = createAction(GET_ALL_USERS);

export const GET_USER = "GET_USER";
export const getUser = createAction(GET_USER);
