import React from 'react';
import ReactDOM from 'react-dom';

import styles from './App.scss';
import Poem from '../Poem/Poem';
import LineCounter from '../LineCounter/LineCounter';

const data = require('../../data.json');
import PoemModel from '../../models/PoemModel';
const poemData = new PoemModel(data);

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <Poem poem={poemData} />
      </div>
    )

  }
}

export default App;
