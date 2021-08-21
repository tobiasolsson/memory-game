import React from 'react';

function Score(props) {
  const { score, highScore } = props;
  return (
    <ul>
      <li>Score: {score}</li>
      <li>Best Score: {highScore}</li>
    </ul>
  );
}

export default Score;
