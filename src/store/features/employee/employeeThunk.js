import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axiosInstance";



export const getEmployees = createAsyncThunk(
    'employee/getEmployees',
    async ()=>{
        const res = api.get('employee')
        console.log(res)
    }
)