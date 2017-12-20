import React from 'react';

import './style.scss';


class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="handNotes">
            <i className="fa fa-sticky-note-o fa-1x" /> HandNotes
          </div>
          <div className="handNotes">
            <i className="fa fa-bars fa-1x" />
          </div>
        </div>
        <div className="navbar-time">
          <div className="row handNotes">
            <div className="col">
              <i className="fa fa-arrow-left fa-1x" />
            </div>
            <div className="col">
              Time
            </div>
            <div className="col">
              <i className="fa fa-arrow-right fa-1x" />
            </div>
          </div>
        </div>
        <div className="container tasks-wrapper">
          <div>
            <h2>Tarefas</h2>
          </div>
          <div className="icons">
            <i className="fa fa-calendar-plus-o fa-2x icons" />
            <i className="fa fa-bell-o fa-2x icons" />
            <i className="fa fa-camera fa-2x icons" />
            <i className="fa fa-plus-circle fa-2x icons" />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
