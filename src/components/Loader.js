import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader-container">
      <BallTriangle color="#00BFFF" height={50} width={50} />
    </div>
  );
};

export default Loader;
