import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  letterContainer: {
    overflow: 'auto',
    marginBottom: '10px'
  },
  letter: {
    float: 'left',
    padding: '10px 10px',
    background: '#c9e4ed',
    borderRadius: '5px',
    marginRight: '5px',
    cursor: 'pointer',
  },
}

function Tile(props) {
const handleClick=()=>{
props.onClick(props.letter);
};
  return (
    <button style={style.letter} onClick={handleClick}>{ props.letter }</button>
  );
}

function Application(props) {
const [outputString,setOutputString]=useState('')
const handleClick = (letter)=>{
setOutputString((prevOutputString)=>{
const lastThreeChars = prevOutputString.slice(-2);
if(lastThreeChars.split('').every((char)=>char === letter)){
return prevOutputString.slice(0,-2)+'_';
}else{
return prevOutputString + letter
}

})
}
const letters = Array.from({length:26},(_,i)=>String.fromCharCode(65+i));

  return (
    <section>
      <aside style={style.letterContainer} id="letterContainer">
   {
   letters.map((letter)=>{
   <Tile key={letter} letter={letter} onClick={handleClick}/>
   })
   }
      </aside>
      <div id="outputString">{outputString}</div>
    </section>
  );
}

