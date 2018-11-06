import axios from 'axios';
import {
    FETCH_CITIES
} from './types';

const uri = 'https://api.openaq.org/v1/cities';

export const fetchCities = () => {
    const response = axios.get(`${uri}`);

    response.then((r) => {
        console.log("cities loaded", r);
    })

    return {
        type:FETCH_CITIES,
        payload:response
    }
}