import axios from "axios";

export const photosapi = axios.create({
    baseURL: 'https://via.placeholder.com/600'
})