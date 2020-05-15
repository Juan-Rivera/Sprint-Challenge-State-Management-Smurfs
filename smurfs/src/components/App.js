import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { SmurfContext } from '../contexts/SmurfContext';

import SmurfDisplay from './SmurfDisplay';
import SmurfForm from "./SmurfForm";

const url = 'http://localhost:3333/smurfs';
function App() {
  const [smurf, setSmurf] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setSmurf(res.data)
      })
  }, [])

    return (
      <div className="App">
        <SmurfContext.Provider value={{ smurf }}>
          <SmurfForm />
          <SmurfDisplay />
        </SmurfContext.Provider>
      </div>
    );

}

export default App;
