import React from 'react';
import './Rating.css';

function Rating({ children }) {
  const rating = Math.round(children);
  let finalRating = [];
  for(let i = 0; i < rating; i++){
		finalRating.push(<span>★</span>)
	}
	for(let i = rating; i < 5; i++){
		finalRating.push(<span>☆</span>)
	}


  return (
	<div>{finalRating}</div>
  );
}

export default Rating;
