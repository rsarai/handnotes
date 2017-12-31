import React from 'react';
import FooterBar from '../FooterBar';
import TaskDisplay from '../TaskDisplay';

import './style.scss';


function AgendaWrapper() {
  return (<div className="tab-item-spec col-10">
    <h3 className="view-header">Tarefas</h3>
    <div className="section-tasks">
      <ul className="items section-separator">
        <li className="unit-task task-item">
          <TaskDisplay
            title="Comprar leite no mercado"
            date="Dec 28"
          />
        </li>
        <li className="unit-task task-item">
          <TaskDisplay />
        </li>
        <li className="unit-task task-item">
          <TaskDisplay />
        </li>
      </ul>
    </div>
    <FooterBar />
  </div>);
}

export default AgendaWrapper;
