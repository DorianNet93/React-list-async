import React from 'react';

import Box from '@mui/material/Box';

import './style.css'

import CountryForm from '../CountryForm/CountryForm';

function Home(props) {
  return (
    <div className='home__wrapper'>
      <Box sx={{bgcolor:'#e2e2e2', borderRadius: '5px'}}>
        <h2 className='form__tittle'>Home Component 🏡</h2>
      </Box>
      <CountryForm />
    </div>
  );
}

export default Home;