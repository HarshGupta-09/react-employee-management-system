import { createSlice } from "@reduxjs/toolkit";
import { deleteEmployees, getEmployees,postEmployees, updateEmployees } from "./employeeThunk";
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
        // Post postEmployees
        builder.addCase(postEmployees.pending,(state)=>{
                state.loading = true; 
                state.error = null;
        })
        builder.addCase(postEmployees.fulfilled
            ,(state,action)=>{
              
                state.loading = false;
                
        })
         builder.addCase(postEmployees.rejected,(state,action)=>{
                   state.loading = false;
                   state.error = action.payload;
        })
        // delete
        builder.addCase(deleteEmployees.pending,(state)=>{
                state.loading = true; 
                state.error = null;
        })
        builder.addCase(deleteEmployees.fulfilled
            ,(state,action)=>{
              
                state.loading = false;
                
        })
         builder.addCase(deleteEmployees.rejected,(state,action)=>{
                   state.loading = false;
                   state.error = action.payload;
        })
        // update
        builder.addCase(updateEmployees.pending,(state)=>{
                state.loading = true; 
                state.error = null;
        })
        builder.addCase(updateEmployees.fulfilled
            ,(state,action)=>{
              
                state.loading = false;
                
        })
         builder.addCase(updateEmployees.rejected,(state,action)=>{
                   state.loading = false;
                   state.error = action.payload;
        })
    }

})

export const {} = employeeSlice.actions;
export default employeeSlice.reducer;