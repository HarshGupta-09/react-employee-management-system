import { createSlice } from "@reduxjs/toolkit";
import { getEmployees } from "./employeeThunk";
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
        builder.addCase(getEmployees.pending,(state)=>{
                state.loading = true; 
                state.error = null;
        })
        builder.addCase(getEmployees.fulfilled
            ,(state,action)=>{
                state.employees = action.payload;
                state.loading = false;
                
        })
         builder.addCase(getEmployees.rejected,(state,action)=>{
                   state.loading = false;
                   state.error = action.payload;
        })
    }

})

export const {} = employeeSlice.actions;
export default employeeSlice.reducer;