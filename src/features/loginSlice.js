import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
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

export const {
    setToast,
    setAuthLoading,
} = loginSlice.actions;