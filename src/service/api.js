import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-fernando-vuhe.onrender.com'
})

export default api