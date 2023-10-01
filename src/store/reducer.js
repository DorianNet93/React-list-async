import { SET_COUNTRIES_DATA, DELETE_COUNTRY } from './action';

const INITIAL_STATE = {
  countriesData: null,
};

const countriesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES_DATA:
      return {
        ...state,
        countriesData: payload,
      };
    case DELETE_COUNTRY:
      const updatedCountries = state.countriesData.filter((country) => country.name.official !== payload);
      return {
        ...state,
        countriesData: updatedCountries,
      };
    default:
      return state;
  }
};

export default countriesReducer;