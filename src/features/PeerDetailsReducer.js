import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    history : [],
    inWallet : -1,
    total : 0,
    reward : 0
}

const peerDetails = createSlice({
    name : "peer details",
    initialState,
    reducers : {
        setPeerDetails : (state, action) => {

            state.history = action.payload.history;
            state.inWallet = action.payload.inWallet;
            state.total = action.payload.total;
            state.reward = action.payload.reward;

            console.log("details set successfully : ");
        },
        resetPeerDetails: (state)=>{
            state.history = [];
            state.inWallet = -1;
            state.total = 0;
            state.reward = 0;
        }
    }
});

export default peerDetails.reducer;
export const {setPeerDetails , resetPeerDetails} = peerDetails.actions;