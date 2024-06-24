import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { AuthState } from "../../types";

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

interface CreateUser {
  email: string;
  password: string;
}

const appSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setUser, setLoading, setError } = appSlice.actions;
export default appSlice.reducer;
