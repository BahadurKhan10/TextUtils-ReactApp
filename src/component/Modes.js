import React from 'react'
import { useState } from 'react'

export default function Modes(props) {
    const [mode, setMode] = useState('light')
    
    const toggleModey = () => {
        if (mode === 'light' || mode=== 'dark' || mode=== 'Red' || mode=== 'Blue' || mode=== 'Green') {
          setMode('Yellow');
          document.body.style.backgroundColor='#efff10'

        }
        
      }

      const toggleModeb = () => {
        if (mode === 'light' || mode=== 'dark' || mode=== 'Red' || mode=== 'Yellow' || mode=== 'Green') {
          setMode('Blue');
          document.body.style.backgroundColor='#080052'
        }
        
      }

      const toggleModer = () => {
        if (mode === 'light' || mode=== 'dark' || mode=== 'Blue' || mode=== 'Yellow' || mode=== 'Green') {
          setMode('Red');
          document.body.style.backgroundColor='#7c0303'
        }
        
      }

      const toggleModeg = () => {
        if (mode === 'light' || mode=== 'dark' || mode=== 'Red' || mode=== 'Yellow' || mode=== 'Blue') {
          setMode('Green');
          document.body.style.backgroundColor='#4CAF50'
        }
        
      }

      const buttondis = () => {
        if (mode === 'light') {
          const button1 = document.getElementById("2b");
          button1.disabled = false;
          const button2 = document.getElementById("3r");
          button2.disabled = false; 
        }
        
        else if(mode==='dark'){
          const button3 = document.getElementById("1y");
          button3.disabled = false;
          const button4 = document.getElementById("4g");
          button4.disabled = false; 
        }
      }  
      



  return (
    
    <div>
      <button type="button" id='1y' buttondis={buttondis} onClick={toggleModey} className="buttony" >Yellow mode</button>
      <button type="button" id='2b' buttondis={buttondis} onClick={toggleModeb} className="buttonb" >Blue mode</button>
      <button type="button" id='3r' buttondis={buttondis} onClick={toggleModer} className="buttonr" >Red mode</button>
      <button type="button" id='4g' buttondis={buttondis} onClick={toggleModeg} className="buttong" >Green mode</button>


    </div>
  )
}
