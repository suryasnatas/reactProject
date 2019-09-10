/**
 * @author Suryasnata Nayak
 * predefined libraries and Components
 */
import React, { Component } from 'react';
import '../styles/App.css';

/**
 * User defined Component
 * @Component Registration
 */
import Frontpage from '../components/frontPage/FrontPage';

class App extends Component {
  render() {
    return (
      <div>
        <Frontpage />
      </div>
    );
  }
}

export default App;