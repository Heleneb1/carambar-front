import axios from "axios";
import type { Joke } from "../models/Joke";



const API_URL = import.meta.env.VITE_API_URL;
console.log("API_URL:", API_URL);

const getAllJokes = () => axios.get<Joke[]>(`${API_URL}/jokes`);

const oneJoke = (id: string) => axios.get<Joke>(`${API_URL}/joke/${id}`);

const displayRandomJoke = () => axios.get<Joke>(`${API_URL}/random`);

const addJoke = (joke: { question: string; answer: string; author: string }) =>
    axios.post(`${API_URL}/jokes`, joke);

export default {
    getAllJokes,
    addJoke,
    oneJoke,
    displayRandomJoke
};