import React from 'react';
import './Greetings.css';


function FrenchGreeting({children}){
  return <p className='Greetings'>Bonjour, {children}</p>
}

function GermanGreeting({children}){
  return <p className='Greetings'>Hallo, {children}</p>
}

function Greetings ({lang, children}) {
  if (lang === 'de'){
    return <GermanGreeting>{children}</GermanGreeting>
  } else if (lang === 'fr'){
    return <FrenchGreeting>{children}</FrenchGreeting>
  }};

export default Greetings;
