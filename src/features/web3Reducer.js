import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     token: null,
     contract: null,
     provider: null,
}

const web3Api = createSlice({
    name: 'web3Api',
    initialState,
    reducers: {
        initWeb3: (state, action) => {
            state.token = action.payload.token;
            state.contract = action.payload.contract;
            state.provider = action.payload.provider;

            console.log("state changed : ", {...state});
        }
    }
})
export const { initWeb3 } = web3Api.actions;
export default web3Api.reducer;