import React from 'react';
import NavbarHeader from '../components/NavbarHeader';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarHeader isSignedIn={false} />
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.any,
};

export default App;
