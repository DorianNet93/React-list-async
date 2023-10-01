const SET_COUNTRIES_DATA = "SET_COUNTRIES_DATA";
const DELETE_COUNTRY = 'DELETE_COUNTRY';

const setCountriesData = (countriesData) => ({
  type: SET_COUNTRIES_DATA,
  payload: countriesData,
});

const deleteCountry = (countryName) => ({
  type: DELETE_COUNTRY,
  payload: countryName,
});


export {
  SET_COUNTRIES_DATA,
  DELETE_COUNTRY,
  setCountriesData,
  deleteCountry,
}