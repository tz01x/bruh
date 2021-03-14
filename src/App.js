import React, { useEffect } from 'react';

import './App.css';

function App() {

  function playsound(){
    const a= document.createElement('audio');
    a.src='./bruh_sound_effect.mp3';
    a.play();
  }
  function play(e){
    playsound();
   e.target.classList.toggle('down');
  }

  useEffect(()=>{
    playsound();
  },[]);

  return (
    <div className="centers"> 
         <div className="mj" id="btn" onClick={play} >Bruh!!!!</div>
    </div>
  ) ;

      
  }

export default App;