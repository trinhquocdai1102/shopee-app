import axios from 'axios';

const Instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { 'content-type': 'application/json' },
});

Instance.interceptors.request.use(async (config: any) => {
    return config;
});

Instance.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        throw error;
    }
);
export default Instance;
