import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../pages/Footer/Footer';
import Home from '../components/Home/Home';
import CountriesList from '../components/Сountries/CountriesList';
import Country from '../components/Country/Country';

import Route404 from './Route404';


function Layout(props) {
  return (
    <BrowserRouter>
      <header>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/countries" element={ <CountriesList/> } />
          <Route path="/countries/:officialCountryName/:translation?" element={ <Country /> } />
          <Route path="*" element={ <Route404/> }></Route>
        </Routes>
      </main>

      <footer>
        <Footer/>
      </footer>
      
    </BrowserRouter>
  );
}

export default Layout;