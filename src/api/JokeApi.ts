import axios from "axios";
import type { Joke } from "../models/Joke";

const API_URL = import.meta.env.VITE_API_URL

// crée une instance axios 
const api = axios.create({
    baseURL: API_URL
})

// intercepte les réponses
api.interceptors.response.use(
    res => res,
    err => {
        console.error("Erreur API :", err);
        return Promise.reject(err);
    }
);

// intercepteur de requetes
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

console.log("API_URL:", API_URL);

const getAllJokes = () => api.get<Joke[]>(`/jokes`);

const oneJoke = (id: string) => api.get<Joke>(`/joke/${id}`);

const displayRandomJoke = () => api.get<Joke>(`/random`);

const addJoke = (joke: { question: string; answer: string; author: string }) =>
    api.post(`/jokes`, joke);

export default {
    getAllJokes,
    addJoke,
    oneJoke,
    displayRandomJoke
};