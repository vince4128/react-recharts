import {
    FETCH_MEASUREMENTS
} from '../actions/types';

export default function(state = {}, action){
    switch(action.type){

        case FETCH_MEASUREMENTS:
            const data = action.payload.data.results;
            return data;

        default: return state;

    }
}