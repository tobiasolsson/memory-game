import React from 'react';

function Score(props) {
  const { score, highScore } = props;
  return (
    <ul>
      <li>Score: {score}</li>
      <li>High Score: {highScore}</li>
    </ul>
  );
}

export default Score;
