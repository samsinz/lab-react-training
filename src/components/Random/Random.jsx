import React from 'react';
import './Random.css';

const Random = ({ min, max }) => {
  let randomNum = Math.floor(Math.random() * (max - min) + min)
  return (
    <div className="Random">
      <p>Random value between {min} and {max} = {randomNum}</p>
    </div>
  );
};

export default Random;
