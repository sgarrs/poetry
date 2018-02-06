import React from 'react';
import styles from './LineCounter.scss';

function LineCounter(props)  {
  function createLineBody() {
    const poemData = props.poem.body;
    let counter = 0;

    let lineBody = poemData.map((stanza, index) => {
      return (
        <ul className={styles.stanza} key={index}>
          {
            stanza.map((line, index) => {
              counter++;
              let lineStyle = {gridRow: counter, gridRowEnd: counter};
              return <li className={styles.line} style={lineStyle} key={index}>{counter}</li>;
            })
          }
        </ul>
      );
    });

    return lineBody;
  }

  return (
    <div className={styles.linecounter}>
      {createLineBody()}
    </div>
  );
}

export default LineCounter;
