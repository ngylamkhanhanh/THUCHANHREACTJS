import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://thuchanhreactjs-4ovg.vercel.app/api/v1',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;