import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axiosInstance";



export const getEmployees = createAsyncThunk(
    'employee/getEmployees',
    async (_,{rejectWithValue})=>{
        try {
            const res = await  api.get('employee')
            console.log(res)
      
        return res.data;
        } catch (error) {
            return rejectWithValue("Something Went Wrong")
        }
        

    }
)