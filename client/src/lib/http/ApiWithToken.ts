

import axios from "axios"

const APIWITHTOKEN = axios.create({
    baseURL : "http://localhost:4000/api/", 
    headers : {
        "Authorization" : typeof window !== 'undefined' ? localStorage.getItem("token") : null,
        "Content-Type" : "application/json",  
        "Accept" : "application/json"
    }
})


export default APIWITHTOKEN