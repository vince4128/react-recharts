import { combineReducers } from 'redux';
import statReducer from './stat.reducer';
import openaqCitiesReducer from './openaqCities.reducer';
import openaqCountriesReducer from './openaqCountries.reducer';
import openaqMeasurementsReducer from './openaqMeasurements.reducer';

const rootReducer = combineReducers({
    stat:statReducer,
    openaqCities:openaqCitiesReducer,
    openaqCountries:openaqCountriesReducer,
    openaqMeasurements:openaqMeasurementsReducer
})

export default rootReducer;