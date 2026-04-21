import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:3000/api-docs/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosClient;