import {
    FETCH_RAW_DATA
} from '../actions/types';

export default function(state = {}, action){
    switch(action.type) {

        case FETCH_RAW_DATA:
            const data = action.payload;
            return data;

        default: return state;

    }
}