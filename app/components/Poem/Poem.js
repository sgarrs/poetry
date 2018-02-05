import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Poem.scss';

function Poem(props)  {
  // poem body should be an array of stanzas, which contain an array of lines
  let poemData = props.poem.body;

  // wrap each stanza array in a ul element
  let poemBody = poemData.map((stanza, index) => {
    return (
      // index as key should be fine (although in a multi-dimensional array, I'm not sure)
      // this list will always be static since they represent a monolithic work of literature
      <ul key={index}>
        {
          // wrap each line in a li element
          stanza.map((line, index) => {
            return <li key={index}>{line}</li>;
          })
        }
      </ul>
    );
  });

  return (
    <div className={styles.poem}>
      <h1>{props.poem.title}</h1>
      {poemBody}
    </div>
  );
}

export default Poem;
