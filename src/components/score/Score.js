import React from 'react';
import styles from './Score.module.css';

function Score(props) {
  const { score, highScore } = props;
  return (
    <ul className={styles.list}>
      <li>Score: {score}</li>
      <li>
        High Score: <span className={styles.high}>{highScore}</span>
      </li>
    </ul>
  );
}

export default Score;
