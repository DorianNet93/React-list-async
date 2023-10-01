import { setCountriesData } from "./action";
import countriesAxios from "../services/countriesAxios";


export const fetchCountriesData = () => {
  return async (dispatch) => {
    try {
      const response = await countriesAxios.get();
      const countriesData = response 
        .slice(0, 5)
        .map((country) => {
          const {capital, translations, name, flag, currencies, languages, region, subregion } = country;
          const firstThreeTranslations = Object.keys(translations).slice(0, 3);
          return {
            capital,
            translations: firstThreeTranslations.reduce((obj, key) => {
              obj[key] = translations[key];
              return obj;
            }, {}),
            name,
            flag, 
            currencies, 
            languages, 
            region, 
            subregion 
          }
        });
      dispatch(setCountriesData(countriesData));
    } catch (error) {
      console.log(error);
    }
  };
};










