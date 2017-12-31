import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const moment = require('moment');


const TaskDisplay = (props) => {
  const { title, date, isDone } = props;

  return (
    <table className="fill-item">
      <tbody>
        <tr>
          <td className="checker table-icons-width">
            <div className="checkbox">
              <input
                type="checkbox"
                id="checkbox"
              />
            </div>
          </td>
          <td><span>{title}</span></td>
          <td className="table-date"><span>{date}</span></td>
          <td className="table-icons-width">
            <i className="fa fa-clock-o labels" aria-hidden="true" />
          </td>
          <td className="table-icons-width"><a href="##" className="lateral-menu">
            <i className="fa fa-pencil-square-o labels" aria-hidden="true" />
          </a></td>
          <td className="table-icons-width"><a href="##" className="lateral-menu">
            <i className="fa fa-trash-o labels" aria-hidden="true" />
          </a></td>
        </tr>
      </tbody>
    </table>
  );
};

TaskDisplay.defaultProps = {
  title: 'Comprar leite',
  date: moment().format('MMM D'),
  isDone: false,
};

TaskDisplay.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  isDone: PropTypes.boolean,
};

export default TaskDisplay;
