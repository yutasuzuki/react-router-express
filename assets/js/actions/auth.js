import { createAction } from "redux-actions";

export const SIGN_IN = "SIGN_IN";
export const signIn = createAction(SIGN_IN);

export const SIGN_OUT = "SIGN_OUT";
export const signOut = createAction(SIGN_OUT);
