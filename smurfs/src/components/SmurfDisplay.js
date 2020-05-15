import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

const SmurfDisplay = () => {
    const { smurf } = useContext(SmurfContext)
    console.log(smurf)
   return(
       <div>
           
       </div>
   ) 
}
export default SmurfDisplay;