import React from 'react';
import { connect } from 'react-redux';
import { signOutUser } from '../redux/modules/currentUser';
import NavbarHeader from '../components/NavbarHeader';

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <NavbarHeader isSignedIn={this.props.isSignedIn} onSignOut={this.props.signOutUser} />
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: React.PropTypes.any,
  isSignedIn: React.PropTypes.bool.isRequred,
};

const mapStateToProps = (state) => ({
  isSignedIn: state.currentUser.isSignedIn,
});

const mapDisptchToProps = (dispatch) => ({
  signOutUser: () => {
    dispatch(signOutUser());
  }
});

export default connect(
  mapStateToProps,
  mapDisptchToProps
)(MainLayout);
