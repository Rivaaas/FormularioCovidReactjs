import React from "react";
import Derecha from "../Derecha";
import Izquierda from "../Izquierda";
import Form from "../Form"
const Inicio = ({pregunta1,setPregunta1}) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-right">
            <Izquierda pregunta1={pregunta1} setPregunta1="{setPregunta1}"/>
          </div>
          <div className="col-left">
            <Derecha pregunta1={pregunta1} setPregunta1="{setPregunta1}"/>
          </div>
        </div>
        <Form title={"Formulario covito"}/>
      </div>
    </div>
  );
};

export default Inicio;
