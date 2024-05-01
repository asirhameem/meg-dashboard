export const selectAuthUser = (state: any) => state.auth.user;
export const selectAuthStatus = (state: any) => state.auth.user.status;
export const selectAuthToken = (state: any) : string => state.auth.token;
