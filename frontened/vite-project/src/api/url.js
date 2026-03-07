
import axios from 'axios'

const BACKENF_URL = axios.create({
    baseURL:" http://localhost:3000/noteapp/"
})


export default BACKENF_URL