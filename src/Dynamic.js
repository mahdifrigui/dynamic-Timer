import React, { Component } from 'react';
import './Dynamic.css';

const MsTime = ms => {
   var ms= 1000000;
   const heurs = Math.floor(ms / (1000 * 60 * 60));

   const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
 
   const seconds = Math.floor(((ms % (1000 * 60 * 60)) % (1000 * 60)) / 1000);
   return (
      heurs + ":" +minutes+ ":" +seconds 
   )
}






const DynamicTime =({ ms }) =>
      
        <div className="Timer">
           <div className="time">{MsTime(ms)}</div>
              <div className="words">
                 <p>Hour</p>
                 <p>Minute</p>
                 <p>Second</p>
              </div> 
        
        
        
        </div>


export default DynamicTime;