import axios from "axios";

const url = "https://staging.algym.com/api/v1"

const API = axios.create({baseURL: url});

export const gymList = (lat , long) => API.get(`/gyms?lat=${lat}&long=${long}&page_number=1&page_size=10`)

export const getGym = (id) => API.get(`/gyms/${id}`)