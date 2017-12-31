import React from 'react';
import ReactModal from 'react-modal';

import './style.scss';


function FooterBar() {
  return (<div className="tab-item icons">
    <a href="##"><i className="fa fa-calendar-plus-o fa-1x icons" /></a>
    <a href="##"><i className="fa fa-camera fa-1x icons" /></a>
    <i className="fa fa-bell-o fa-1x icons" />
    <i className="fa fa-plus-circle fa-1x icons" />

    <ReactModal
      isOpen={false}
      contentLabel="Minimal Modal Example"
    >
      <button>Close Modal</button>
    </ReactModal>
  </div>);
}

export default FooterBar;
