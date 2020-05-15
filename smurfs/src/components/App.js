import React, { useState } from "react";
import "./App.css";
import { SmurfContext } from '../contexts/SmurfContext';

import SmurfDisplay from './SmurfDisplay';


function App() {
  const [smurf, setSmurf] = useState([]);

    return (
      <div className="App">
        <SmurfContext.Provider value={{smurf}}>
          <SmurfDisplay />
        </SmurfContext.Provider>
      </div>
    );

}

export default App;
