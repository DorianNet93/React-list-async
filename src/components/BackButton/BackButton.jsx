import React from "react";
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';

import './style.css'

export default function BackButton({ path, text }) {
  const navigation = useNavigate();
  const handleClick = () => navigation(path);
  return <Button sx={{ml: `10px`, mt:'10px', color: 'black', borderColor:'black'}} variant="outlined"
    className="button--black"
    onClick={handleClick}>
      {text}
    </Button>;
}