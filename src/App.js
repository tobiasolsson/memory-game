import React, { useState } from 'react';

import Title from './components/title/Title';
import Gameboard from './components/gameboard/Gameboard';

// [
//   {
//     planet: 'sun',
//     clicked: false,
//     image: '',
//   },
//   {
//     planet: 'mercury',
//     clicked: false,
//     image: '',
//   },
//   {
//     planet: 'venus',
//     clicked: false,
//     image: '',
//   },
//   {
//     planet: 'earth',
//     clicked: false,
//     image: '',
//   },
//   {
//     planet: 'mars',
//     clicked: false,
//     image: '',
//   },
//   {
//     planet: 'jupiter',
//     clicked: false,
//     image: '',
//   },
//   {
//     planet: 'saturn',
//     clicked: false,
//     image: '',
//   },
//   {
//     planet: 'uranus',
//     clicked: false,
//     image: '',
//   },
//   {
//     planet: 'neptune',
//     clicked: false,
//     image: '',
//   },
// ];

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState({
    sun: false,
    mercury: false,
    venus: false,
    earth: false,
    mars: false,
    jupiter: false,
    saturn: false,
    uranus: false,
    neptune: false,
  });

  function resetGame() {
    setScore(0);
    Object.keys(cards).forEach((key) => {
      setCards((prev) => ({ ...prev, [key]: false }));
    });
  }

  function handleClick(e, planet) {
    // check if card has been clicked already:
    // if it has, setHighScore(score)
    // and reset all images clicked staus
    // else setScore(+1) and set img to clicked
    if (!cards[planet]) {
      setCards((prev) => ({ ...prev, [planet]: true }));
      setScore((prev) => prev + 1);
    } else if (score > highScore) {
      setHighScore(score);
      resetGame();
    } else if (score <= highScore) {
      resetGame();
    }
  }
  return (
    <div>
      <Title score={score} highScore={highScore} />
      <Gameboard cards={cards} handleClick={handleClick} />
    </div>
  );
}

export default App;
