import React from 'react';

import './style.scss';


function menuLateral() {
  return (
    <div className="tab-item-special col-2">
      <h5><a href="##" className="lateral-menu">
        <i className="fa fa-tasks" /> <b>Tasks</b></a></h5>
      <h5><a href="##" className="lateral-menu">
        <i className="fa fa-sticky-note-o" /> Notes</a></h5>
      <h5><i className="fa fa-calendar-o" /> Calendar</h5>
      <h5><i className="fa fa-calendar-o" /> Investiments</h5>
    </div>);
}

export default menuLateral;
