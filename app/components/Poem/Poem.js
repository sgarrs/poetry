import React from 'react';
import styles from './Poem.scss';

import LineCounter from '../LineCounter/LineCounter';

function Poem(props)  {
  // poem body should be an array of stanzas, which contain an array of lines
  let poemData = props.poem.body;
  let counter = 0;

  // wrap each stanza array in a ul element
  let poemBody = poemData.map((stanza, index) => {
    return (
      // index as key should be fine (although in a multi-dimensional array, I'm not sure)
      // this list will always be static since they represent a monolithic work of literature
      <ul className={styles.stanza} key={index}>
        {
          // wrap each line in a li element
          stanza.map((line, index) => {
            counter++;
            let lineStyle = {gridRow: counter, gridRowEnd: counter};
            return <li className={styles.line} style={lineStyle} key={index}>{line}</li>;
          })
        }
      </ul>
    );
  });

  return (
    <div className={styles.container}>
      <LineCounter poem={props.poem} />
      <div className={styles.poem}>
        <h1 className={styles.title}>{props.poem.title}</h1>
        <div className={styles.body}>{poemBody}</div>
      </div>
    </div>
  );
}

export default Poem;
