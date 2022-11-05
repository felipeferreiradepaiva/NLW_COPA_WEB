import axios from 'axios';

export const baseURL = 'http://0.0.0.0:3333/'

export const api = axios.create({
    baseURL: 'http://0.0.0.0:3333/'
})