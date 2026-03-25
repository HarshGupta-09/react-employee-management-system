import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees :[],
    error : null,
    loading : false,
} 


const employeeSlice = createSlice({
    name : "employee",
    initialState,
    reducers : {

    },
    extraReducers : (builder)=>{

    }

})

export const {} = employeeSlice.actions;
export default employeeSlice.reducer;