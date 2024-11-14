export type TAuthState = {
  token?: string;
  token_type?: string;
  expires_in?: number;
  user?: TUser;
}

export type TUser = {
  uuid: string;
  name: string;
  email: string;
  status: boolean;
}

export type TAuthActions = {
  setAuth: (auth: TAuthState) => void;
  removeAuth: () => void;
}

export type TSignInResponse = TAuthState;