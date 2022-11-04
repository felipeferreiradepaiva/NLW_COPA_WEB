import axios from 'axios';

export const baseURL = 'http://127.0.0.1:3333/'

export const api = axios.create({
    baseURL: 'http://127.0.0.1:3333/'
})