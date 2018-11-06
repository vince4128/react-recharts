import axios from 'axios';
import {
    FETCH_COUNTRIES
} from './types';

const uri = 'https://api.openaq.org/v1/countries';

export const fetchCountries = () => {
    const response = axios.get(`${uri}`);

    response.then((r) => {
        console.log("COUNTRIES loaded", r);
    })

    return {
        type:FETCH_COUNTRIES,
        payload:response
    }
}