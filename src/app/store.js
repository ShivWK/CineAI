import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import loginReducer from "../features/loginSlice";

const store = configureStore({
    reducer : {
        login: loginReducer
    }
});

setupListeners(store.dispatch);
export default store;