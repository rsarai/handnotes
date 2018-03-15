import React from 'react';
import PropTypes from 'prop-types';

import { ModalContainer, ModalDialog } from 'react-modal-dialog';

class TaskModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isShowingModal: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    this.setState({ isShowingModal: true });
  }

  handleClose() {
    this.setState({ isShowingModal: false });
  }

  render() {
    const { isLoading } = this.props;

    return (<div
      onClick={this.handleClick}
      role="button"
      tabIndex={0}
      className="fa fa-calendar-plus-o fa-1x icons"
    >
      {
        this.state.isShowingModal &&
        <ModalContainer onClose={this.handleClose}>
          {
            isLoading ? '' :
            <ModalDialog onClose={this.handleClose}>
              <h3>Adds task</h3>
              <p>More Content. Anything goes here</p>
            </ModalDialog>
          }
        </ModalContainer>
      }
    </div>);
  }
}

TaskModal.defaultProps = {
  isLoading: false,
};

TaskModal.propTypes = {
  isLoading: PropTypes.bool,
}

export default TaskModal;
