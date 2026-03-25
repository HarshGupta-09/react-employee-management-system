
import axios from "axios";

const api = axios.create({
    baseURL : "https://69c3b032b780a9ba03e79771.mockapi.io/",
    
    timeout : 5000,
    headers : {
        "Content-Type" : 'application/json'
    }

})
export default api;
