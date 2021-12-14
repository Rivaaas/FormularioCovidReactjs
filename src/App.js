import React, {useState} from 'react';
import './App.css';
import Inicio from './components/Inicio'


function App() {

  const [pregunta1,setPregunta1] = useState(false);


  return (
    <div className="App">
      <Inicio pregunta1={pregunta1} setPregunta1="{setPregunta1}"/>
    </div>
  );
}

export default App;
