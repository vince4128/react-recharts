import {
    FETCH_CITIES
} from '../actions/types';

export default function(state = {}, action){
    switch(action.type){

        case FETCH_CITIES:
            const data = action.payload.data.results;
            return data;

        default: return state;

    }
}