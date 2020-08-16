import axios from 'axios';

export const baseRequest = axios.create({
    baseURL: 'https://api-search.win.gg/search'
});

export { getSportsTournaments } from './sports-tournaments';