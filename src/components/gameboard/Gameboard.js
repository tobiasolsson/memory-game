import React from 'react';

import Card from '../card/Card';

function Gameboard(props) {
  const { handleClick, cards } = props;
  const playableCards = Object.keys(cards).map((item) => (
    <Card handleClick={handleClick} planet={item} />
  ));
  return <div>{playableCards}</div>;
}

export default Gameboard;
