import React from 'react';
import Navigation from '../../components/Navigation/Navigation'; 

import './style.css'
import { Box } from '@mui/material';


export default function Header(props) {
  return (
    <Box sx={{m: '10px'}}>
      <Navigation /> 
    </Box>
  );
}
