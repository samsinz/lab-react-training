import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  let imgSrc = `/${props.type}.png`;
  return (
    <div className="CreditCard" style={{ backgroundColor: props.bgColor }}>
      <img src={imgSrc} alt='info' id="cardType" />
      <div id="cardNb">•••• •••• •••• {props.number.slice(12, 16)}</div>
      <div id="expireDateAndBank">
        Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
      </div>
      <div id="userName">{props.owner}</div>
    </div>
  );
}

export default CreditCard;
