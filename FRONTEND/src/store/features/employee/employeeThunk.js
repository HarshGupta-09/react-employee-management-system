import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axiosInstance";



export const getEmployees = createAsyncThunk(
    'employee/getEmployees',
    async (_,{rejectWithValue})=>{
        try {
            const res = await  api.get('employee')
           
      
        return res.data;
        } catch (error) {
            return rejectWithValue("Something Went Wrong")
        }
        

    }
)

export const postEmployees = createAsyncThunk(
    'employee/postEmployees',
    async (details,{rejectWithValue,dispatch})=>{
        try {
            const res = await  api.post('employee',details)
            dispatch(getEmployees())
      
        return res.data;
        } catch (error) {
            return rejectWithValue("Something Went Wrong")
        }
        

    }
)

export const deleteEmployees = createAsyncThunk(
    'employee/deleteEmployees',
    async (id,{rejectWithValue,dispatch})=>{
        try {
            const res = await  api.delete(`employee/${id}`)
            dispatch(getEmployees())
      
        return res.data;
        } catch (error) {
            return rejectWithValue("Something Went Wrong")
        }
        

    }
)
// update
export const updateEmployees = createAsyncThunk(
    'employee/updateEmployees',
    async ({id , details},{rejectWithValue,dispatch})=>{
        try {
            const res = await  api.put(`employee/${id}`,details)
            dispatch(getEmployees())
      
        return res.data;
        } catch (error) {
            return rejectWithValue("Something Went Wrong")
        }
        

    }
)