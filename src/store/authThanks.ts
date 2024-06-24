import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase,
  signOut as signOutFirebase,
} from "firebase/auth";
import { auth } from "../Firebase";
import { setLoading, setUser } from "./slices/appSlice";

export const signInWithEmailAndPassword =
  (email: string, password: string) =>
  async (dispatch: Dispatch<AnyAction>) => {
    dispatch(setLoading(true));
    try {
      const userCredential = await signInWithEmailAndPasswordFirebase(
        auth,
        email,
        password
      );
      dispatch(setUser(userCredential.user));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const signOut = () => async (dispatch: any) => {
  dispatch(setLoading(true));

  await signOutFirebase(auth);
  dispatch(setUser(null));
  dispatch(setLoading(false));
};
