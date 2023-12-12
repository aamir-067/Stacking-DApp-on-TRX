import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    massage : "",
    isActive : false,
    type : "",
}

const toastStatus = createSlice({
    name: 'toastStatus',
    initialState,
    reducers: {
        setToastStatus : (state, action)=>{
            state.isActive = action.payload.isActive;
            state.massage = action.payload.massage;
            state.type = action.payload.type;
        }
    }
})
export const { setToastStatus } = toastStatus.actions;
export default toastStatus.reducer;