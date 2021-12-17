import React, {useState} from 'react';
import './App.css';
import Inicio from './components/Inicio'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Rechazado from './Pages/Rechazado';
import Aceptado from './Pages/Aceptado';



function App() {

  const [pregunta1,setPregunta1] = useState(false);

  const {condicion} = useParams();
  return (
   
   
    <BrowserRouter>
      
    <Routes>
      <Route path="/" element={<Inicio pregunta1={pregunta1} setPregunta1="{setPregunta1}"/>} />
      <Route path="/siingresa/:condicion" element={<Aceptado />} />
      <Route path="/noingresa/:condicion" element={< Rechazado/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
