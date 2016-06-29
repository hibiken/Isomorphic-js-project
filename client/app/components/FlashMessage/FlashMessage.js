import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

class FlashMessage extends React.Component {
  render() {
    if (!this.props.message) { return null; }

    const alertClass = classNames({
      'alert': true,
      'alert-danger': this.props.flashType === 'error',
      'alert-success': this.props.flashType === 'success',
    });
    
    return(
      <div className={alertClass}>
        <strong>{this.props.message}</strong>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.flashMessage.message,
  flashType: state.flashMessage.flashType,
});

export default connect(
  mapStateToProps
)(FlashMessage);
