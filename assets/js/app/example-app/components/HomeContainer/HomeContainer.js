import React from 'react';

import Navbar from '../Navbar';
import MenuLateral from '../MenuLateral';
import AgendaWrapper from '../AgendaWrapper';

import './style.scss';


function HomeContainer() {
  return (
    <div>
      <Navbar />
      <div className="container-padding">
        <div className="row">
          <MenuLateral />
          <AgendaWrapper />
        </div>
      </div>
    </div>);
}

export default HomeContainer;
