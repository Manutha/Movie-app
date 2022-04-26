import axios from 'axios';

export const AXIOS_API = axios.create({
    baseURL:'https://wookie.codesubmit.io/movies',
    headers:{'Authorization':'Bearer Wookie2019'}
})