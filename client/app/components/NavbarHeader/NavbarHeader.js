import React from 'react';

class NavbarHeader extends React.Component {
  _renderNavItems() {
    if (this.props.isSignedIn) {
      return (
        <ul className="nav navbar-nav">
          <li className="nav-item">Sign Out</li>
        </ul>
      );
    } else {
      return (
        <ul className="nav navbar-nav">
          <li className="nav-item">Sign In</li>
          <li className="nav-item">Sign Up</li>
        </ul>
      );
    }
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
