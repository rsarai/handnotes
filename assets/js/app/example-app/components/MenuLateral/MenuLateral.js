import React from 'react';

import './style.scss';


function menuLateral() {
  return (
    <div className="tab-item-special col-2">
      <h5><a href="##" className="lateral-menu">
        <i className="fa fa-tasks" /> <b>Tarefas</b></a></h5>
      <h5><a href="##" className="lateral-menu">
        <i className="fa fa-sticky-note-o" /> Notas</a></h5>
      <h5><i className="fa fa-calendar-o" /> Calendário</h5>
    </div>);
}

export default menuLateral;
