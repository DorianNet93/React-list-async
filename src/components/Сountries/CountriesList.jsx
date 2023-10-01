import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCountry } from '../../store/action';
import { fetchCountriesData } from '../../store/thunk';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Card } from '@mui/material';


const CountriesList = () => {
  const countriesData = useSelector((state) => state.countries.countriesData);
  const dispatch = useDispatch();

  const handleDelete = (countryName) => {
    dispatch(deleteCountry(countryName));
  };

  useEffect(() => {
    if (!countriesData) {
      dispatch(fetchCountriesData());
    }
  }, [dispatch, countriesData]);

  return (
    <Card sx={{alignItems: 'center', bgcolor: '#e2e2e2' , p: '20px', margin: '0 auto', maxWidth: '600px'}}>
      <Typography variant="h5" gutterBottom>Countries List</Typography>
      {countriesData  && countriesData.length ? (
        <List>
          {countriesData.map((country, i) => (
            <ListItem key={i}>
              <Link to={`/countries/${country.name.official}`}>
                {country.flag} {country.name.official}
              </Link>
              <Button sx={{ml: `10px`}} variant="outlined" size='small' startIcon={<DeleteIcon />} 
                onClick={() => handleDelete(country.name.official)}>
                  Delete
              </Button>
            </ListItem>
          ))}
        </List>
      ) : null}
    </Card>
  ); 
};

export default CountriesList;

