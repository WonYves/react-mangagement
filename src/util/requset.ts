import axios from "axios"

const request = axios.create({
    baseURL: '',
    timeout: 30000,
})


export default request