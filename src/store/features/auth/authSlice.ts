import { createSlice } from "@reduxjs/toolkit";

interface IAuthInitialState {
  token: string | undefined;
  token_type: string | undefined;
  expires_in: string | undefined;
  user: {
    uuid: string | undefined;
    name: string | undefined;
    email: string | undefined;
    status: boolean;
  };
}

const initialState: IAuthInitialState = {
  token: undefined,
  token_type: undefined,
  expires_in: undefined,
  user: {
    uuid: undefined,
    name: undefined,
    email: undefined,
    status: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { token, token_type, expires_in, user } = action.payload.data;

      state.token = token;
      state.token_type = token_type;
      state.expires_in = expires_in;
      state.user.uuid = user.uuid;
      state.user.name = user.name;
      state.user.email = user.email;
      state.user.status = user.status;
    },
    clearAuth: state => {
      state.token = undefined;
      state.token_type = undefined;
      state.expires_in = undefined;
      state.user.uuid = undefined;
      state.user.name = undefined;
      state.user.email = undefined;
      state.user.status = false;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
