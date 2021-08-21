import React from 'react';

import Score from '../score/Score';

function Title(props) {
  const { score, highScore } = props;
  return (
    <div>
      <h1>Solarsystem Memory Game</h1>
      <p>
        Get points by clicking on an image but don&#39;t click on any picture
        more than once!
      </p>
      <Score score={score} highScore={highScore} />
    </div>
  );
}

export default Title;
