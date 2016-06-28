import React from 'react';

import styles from '../styles/Greeter.scss';

class Greeter extends React.Component {
  render() {
    return (
      <div className="root">
        Hi Ken! Let's create an awesome app!
        Where are we gonna start? Redux + React!
      </div>
    );
  }
}

export default Greeter;
