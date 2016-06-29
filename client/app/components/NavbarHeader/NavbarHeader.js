import React from 'react';
import { Link } from 'react-router';

class NavbarHeader extends React.Component {
  _renderNavItems() {
    if (this.props.isSignedIn) {
      return (
        <ul className="nav navbar-nav">
          <li className="nav-item">Sign Out</li>
        </ul>
      );
    }
    return (
      <ul className="nav navbar-nav">
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
      <nav className="navbar navbar-light">
        {this._renderNavItems()}
      </nav>
    );
  }
}

NavbarHeader.propTypes = {
  isSignedIn: React.PropTypes.bool.isRequired,
};

export default NavbarHeader;
