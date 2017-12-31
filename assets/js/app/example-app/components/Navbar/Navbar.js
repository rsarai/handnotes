import React from 'react';

import './style.scss';


function Navbar() {
  return (
    <div className="navbar">
      <div className="handNotes" />
      <div className="handNotes">
        <a href="##" className="navbar-link"><i className="fa fa-sticky-note-o"> HandNotes</i></a>
      </div>
      <div className="handNotes">
        <i className="fa fa-bars fa-1x" />
      </div>
    </div>);
}

export default Navbar;
