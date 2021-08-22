import React from 'react';
import styles from './Title.module.css';

import Score from '../score/Score';

function Title(props) {
  const { score, highScore } = props;
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Solarsystem Memory Game</h1>
      <p className={styles.desc}>
        Get points by clicking on an image but don&#39;t click on any picture
        more than once!
      </p>
      <div className={styles.score}>
        <Score score={score} highScore={highScore} />
      </div>
    </div>
  );
}

export default Title;
