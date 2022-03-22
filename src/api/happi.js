import axios from 'axios';

const instance = axios.create({
    baseURL: ' https://api.happi.dev/v1/',
});

export default instance;
