import React from 'react';
import ReactDOM from 'react-dom';

import styles from './App.scss';

import Poem from '../Poem/Poem';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <Poem />
      </div>
    )

  }
}

export default App;
