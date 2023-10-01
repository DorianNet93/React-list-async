import React from 'react';
import { Outlet } from 'react-router-dom';


function Main(props) {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default Main;