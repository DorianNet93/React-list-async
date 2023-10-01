import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountriesData } from "../../store/thunk";
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';

import './style.css'


const CountryForm = () => {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.countries.countriesData);
  const navigate = useNavigate();

  const [selectedCapital, setSelectedCapital] = useState('');
  const [selectedTranslation, setSelectedTranslation] = useState('');
  const [country, setCountry] = useState('');
  const [translationSelectKey, setTranslationSelectKey] = useState(0);

  useEffect(() => {
    if (!countriesData) {
      dispatch(fetchCountriesData());
    }
  }, [dispatch, countriesData]);

  useEffect(() => {
    if (countriesData && countriesData.length > 0) {
      setSelectedCapital(countriesData[0].capital[0] || '');
      setCountry(countriesData[0].name.official || '');
      const firstTranslation = countriesData[0]?.translations
        ? Object.keys(countriesData[0].translations)[0]
        : '';
      setSelectedTranslation(firstTranslation);
    }
  }, [countriesData]);

  useEffect(() => {
    if (countriesData) {
      const selectedCountry = countriesData.find((country) => country.capital[0] === selectedCapital);
      const translationKeys = selectedCountry ? Object.keys(selectedCountry.translations) : [];
      setSelectedTranslation(translationKeys[0] || '');

      setTranslationSelectKey((prevKey) => prevKey + 1);
    }
  }, [selectedCapital, countriesData]);

  const handleCapitalChange = (event) => {
    const newSelectedCapital = event.target.value;
    setSelectedCapital(newSelectedCapital);
    setSelectedTranslation('');
    
    const country = countriesData.find((country) => country.capital[0] === newSelectedCapital);
    if (country) {
      setCountry(country.name?.official || '');
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    const capital = selectedCapital || countriesData[0].capital[0];
    const translation = selectedTranslation || '';

    const selectedCountry = countriesData.find((country) => country.capital[0] === capital);
    if (selectedCountry) {
      navigate(`/countries/${selectedCountry.name.official}?translation=${translation}`);
    }
  };

  return countriesData && countriesData.length ? (
    <div className="form__wrapper">
      <h3> <strong>Capital Form Component</strong></h3>
      <form className="form-select__countries" onSubmit={handleFormSubmit}>
        <label className="bold--text" htmlFor='capital-form'>
          Select Capital
          <select id="capital-form" value={selectedCapital} onChange={handleCapitalChange}>
            {countriesData.map((country) => (
              <option key={country.capital[0]} value={country.capital[0]}>
                {country.flag} {country.capital[0]}
              </option>
            ))}
          </select>
        </label>
        <label className="bold--text" htmlFor='tranlation-form'>
          Select Translation
          <select
            id="tranlation-form"
            key={translationSelectKey}
            value={selectedTranslation}
            onChange={(e) => setSelectedTranslation(e.target.value)}>
            {Object.keys(countriesData.find((country) => country.capital[0] === selectedCapital)?.translations || {})
              .map((translationKey) => (
                <option key={translationKey} value={translationKey}>
                  {translationKey}
                </option>
              ))}
          </select>
        </label>
        <Button  variant="outlined" className="color__black" type="submit">Read more about country {country}</Button>
      </form>
    </div> 
  ) 
  : null; 
};

export default CountryForm;








