import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    userName: "",
    userEmail: "",
    userId: null,
    accessToken: null,
    refreshToken: null,
    showToast: false,
    toastMessage: "",
    toastError: false,
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setToast: (state, action) => {
            const { message, error, show } = action.payload;

            state.showToast = show;
            state.toastMessage = message;
            state.toastError = error;
        },

        setAuthDetails: (state, action) => {
            const { name, email, userId, accessT, refreshT, } = action.payload;

            state.userName = name;
            state.userEmail = email;
            state.userId = userId;
            state.accessToken = accessT;
            state.refreshToken = refreshT;
        },

        setLoggedInStatus: (state, action) => {
            state.isLoggedIn = action.payload;
        }
    }
});

export default loginSlice.reducer;

export const selectToast = createSelector(
    [
        state => state.login.showToast,
        state => state.login.toastMessage,
        state => state.login.toastError,
    ],
    (show, message, error) => ({ show, message, error })
)

export const selectUserDetails = createSelector(
    [
        state => state.login.userName,
        state => state.login.userEmail,
        state => state.login.userId,
    ],
    (name, email, id) => ({ name, email, id })
)

export const selectSessionTokens = createSelector(
    [
        state => state.login.accessToken,
        state => state.login.refreshToken
    ],
    (accessToken, refreshToken) => ({
        accessToken,
        refreshToken
    })
)

export const selectLoginStatus = state => state.login.isLoggedIn;

export const {
    setToast,
    setAuthLoading,
    setAuthDetails,
    setLoggedInStatus
} = loginSlice.actions;