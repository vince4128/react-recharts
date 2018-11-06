import axios from 'axios';
import {
    FETCH_MEASUREMENTS
} from './types';

const uri = 'https://api.openaq.org/v1/measurements';

export const fetchMeasurements = () => {
    const response = axios.get(`${uri}`);

    response.then((r) => {
        console.log("MEASUREMENTS loaded", r);
    })

    return {
        type:FETCH_MEASUREMENTS,
        payload:response
    }
}