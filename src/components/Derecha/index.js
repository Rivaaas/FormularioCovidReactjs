import React from "react";
import { useParams } from "react-router";

const Derecha = () => {
  const {respuesta} = useParams();

  return (
    <>
      <div className="paddingtexto">
        <center>
          <h1>FORMULARIO PARA SABER SI SE PUEDE ENTRAR AL ESTABLECIMIENTO {respuesta}</h1>
        </center>
      </div>
    </>
  );
};

export default Derecha;
