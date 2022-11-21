import React from 'react';
import './BoxColor.css';


function BoxColor ({r,g,b}) {
  return <div className='BoxColor' style={{
				backgroundColor: `rgb(${r},${g},${b}`,
			}}>rgb({r},{g},{b})</div>
}

export default BoxColor;
