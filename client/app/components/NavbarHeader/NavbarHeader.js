import React from 'react';
import { Link } from 'react-router';

class NavbarHeader extends React.Component {
  _renderNavItems() {
    if (this.props.isSignedIn) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item" onClick={this.props.onSignOut}>
            <a>Sign Out</a>
          </li>
        </ul>
      );
    }
    return (
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item">
          <Link to="/signin">Sign In</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Isomorphic JS</Link>
          </div>

          {this._renderNavItems()}
        </div>
      </nav>
    );
  }
}

NavbarHeader.propTypes = {
  isSignedIn: React.PropTypes.bool.isRequired,
  onSignOut: React.PropTypes.func.isRequired,
};

export default NavbarHeader;
