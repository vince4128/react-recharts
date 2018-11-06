import {
    FETCH_COUNTRIES
} from '../actions/types';

export default function(state = {}, action){
    switch(action.type){

        case FETCH_COUNTRIES:
            const data = action.payload;
            return data;

        default: return state;

    }
}