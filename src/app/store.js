import {configureStore} from "@reduxjs/toolkit";
import { web3Reducer, peerDetailsReducer } from "../features";

export const store = configureStore({
    reducer : {
        web3Api : web3Reducer,
        peerDetails : peerDetailsReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    })
});