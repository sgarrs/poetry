import React from 'react';
import ReactDOM from 'react-dom';

import styles from './App.scss';
import Poem from '../Poem/Poem';

const data = require('../../data.json');
import PoemModel from '../../models/PoemModel';
        
        
class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <Poem poem={new PoemModel(data)} />
      </div>
    )

  }
}

export default App;
