import React from 'react';
import NavbarHeader from '../components/NavbarHeader';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarHeader isSignedIn={false} />

        <div className="container-fluid">
          Hello World!
        </div>
      </div>
    );
  }
}

export default App
