import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

import Smurf from './Smurf';

const SmurfDisplay = () => {
    const { smurf } = useContext(SmurfContext)
    
   return(
       <div className='smurfDisplay'>
           {smurf.map(smurf => {
              return <Smurf key={smurf.id} smurf={smurf}/>
           })}
       </div>
   ) 
}
export default SmurfDisplay;