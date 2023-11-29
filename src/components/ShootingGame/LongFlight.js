import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import sketch from '@components/ShootingGame/sketch';

const LongFlight = () => {
  return (
    <div className="App">
      <ReactP5Wrapper sketch={sketch}></ReactP5Wrapper>
    </div>
  );
}

export default LongFlight;