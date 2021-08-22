import React from 'react';
import styles from './Card.module.css';
import earth from '../../img/earth.jpg';
import jupiter from '../../img/jupiter.jpg';
import mars from '../../img/mars.jpg';
import mercury from '../../img/mercury.jpg';
import neptune from '../../img/neptune.jpg';
import saturn from '../../img/saturn.jpg';
import sun from '../../img/sun.jpg';
import uranus from '../../img/uranus.jpg';
import venus from '../../img/venus.jpg';

function Card(props) {
  const { handleClick, planet } = props;
  const plantes = {
    earth,
    jupiter,
    mars,
    mercury,
    neptune,
    saturn,
    sun,
    uranus,
    venus,
  };

  return (
    <div
      className={styles.card}
      role="button"
      tabIndex={0}
      onClick={(e) => handleClick(e, planet)}
      onKeyDown={handleClick}
    >
      <img src={plantes[planet]} alt={planet} />
      <p>{planet}</p>
    </div>
  );
}

export default Card;
