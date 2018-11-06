import axios from 'axios';
import {
    FETCH_RAW_DATA
} from './types';

//const server = 'http://localhost:3000':
const server = '../data/data.json';

export const fetchRawData = () => {
    const response = axios.get(`${server}`);

    response.then((r)=>{
        console.log("json chargé", r);
    })

    return {
        type:FETCH_RAW_DATA,
        payload:response
    }
}
