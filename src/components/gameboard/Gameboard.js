import React from 'react';
import styles from './Gameboard.module.css';
import Card from '../card/Card';

function Gameboard(props) {
  const { handleClick, cards } = props;

  // oof, found on stackoverflow
  function shuffleArray(array) {
    const randomizedArray = array;
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomizedArray[i], randomizedArray[j]] = [
        randomizedArray[j],
        randomizedArray[i],
      ];
    }
    return randomizedArray;
  }

  const keys = Object.keys(cards);
  const randomKeys = shuffleArray(keys);
  const playableCards = randomKeys.map((item) => (
    <Card handleClick={handleClick} planet={item} />
  ));
  return <div className={styles.gameboard}>{playableCards}</div>;
}

export default Gameboard;
