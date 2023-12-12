import {configureStore} from "@reduxjs/toolkit";
import { web3Reducer, peerDetailsReducer, toastStatus } from "../features";

export const store = configureStore({
    reducer : {
        web3Api : web3Reducer,
        peerDetails : peerDetailsReducer,
        toastStatus : toastStatus
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    })
});