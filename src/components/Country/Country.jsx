import React, { useEffect } from 'react';
import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountriesData } from '../../store/thunk';
import { renderObjectList } from '../../common/common';
import { deleteCountry } from '../../store/action';


import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import './style.css'
import BackButton from '../BackButton/BackButton';

const Country = () => {
  const { officialCountryName } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const translation = searchParams.get(`translation`);

  const countriesData = useSelector((state) => state.countries.countriesData);

  useEffect(() => {
    if (!countriesData) {
      dispatch(fetchCountriesData());
    }
  }, [dispatch, countriesData]);

  if (!countriesData) {
    return <p>Loading...</p>;
  }

  const handleDelete = (countryName) => {
    dispatch(deleteCountry(countryName));
    navigation("/countries");
  };

  const selectedCountry = countriesData.find((country) => country.name.official === officialCountryName);
  let translatedCountryName = selectedCountry.name.official;

  if (translation) {
    const translationObject = selectedCountry.translations[translation];
    if (translationObject) {
      translatedCountryName = translationObject.official;
    }
  }

  return (
    <div className='countryList__wrapper'>
      <div className='wrapper__country-card'>
        <h3>{translatedCountryName}</h3>
        {selectedCountry ? renderObjectList(selectedCountry) : null}
        <Button sx={{ml: `10px`, mt:'10px', color: 'black', borderColor:'black'}} variant="outlined"  startIcon={<DeleteIcon style={{ color: 'black' }} className='buttom--black' />}
          onClick={() => handleDelete(selectedCountry.name.official)}>
            Delete Country
        </Button>
      </div>
      <BackButton path="/countries" text="Back to Coutries" />
    </div>

  );
};

export default Country;
