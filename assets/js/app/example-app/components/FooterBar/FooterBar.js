import React from 'react';
import TaskModal from '../TaskModal';

import './style.scss';


function FooterBar() {
  return (<div className="tab-item icons">
    <TaskModal />
    <a href="##"><i className="fa fa-camera fa-1x icons" /></a>
    <i className="fa fa-bell-o fa-1x icons" />
    <i className="fa fa-plus-circle fa-1x icons" />
  </div>);
}

export default FooterBar;
