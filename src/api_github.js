const axios = require("axios");
require('dotenv').config();

const api = axios.create({
    baseURL: process.env.GITHUB_API_URL
});

api.interceptors.request.use(async config => {
    config.headers = {
        Accept: 'application/vnd.github.v3+json'
    };
    return config;
});


module.exports =  api ;