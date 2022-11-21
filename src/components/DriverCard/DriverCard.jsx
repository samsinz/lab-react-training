import React from 'react';
import './DriverCard.css';

function DriverCard(props) {

  return (
	<div className='DriverCard'>
		<img src={props.img} alt="" />
		<div id='info'>
			<p>{props.name}</p>
			<p>{'★'.repeat(Math.round(props.rating))}{'☆'.repeat(5-Math.round(props.rating))}</p>
			<p>{props.car.model} - {props.car.licensePlate}</p>
		</div>

	</div>
  );
}

export default DriverCard;
