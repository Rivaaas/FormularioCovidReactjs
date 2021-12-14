import React, {useState} from "react";

const Form = ({title}) => {

  const [pregunta,setPregunta] = useState({
    pregunta1: "false",
    pregunta2: "false",
    pregunta3: "false",
    pregunta4: "false",
    pregunta5: "false"
  });

  const onClick1 = (e) => {
      setPregunta(
        {
          ...pregunta,
          [e.target.name] : e.target.value
        }
      ) 
  }

  const onSubmitForm = (e) => {

    let cont = 0;
    for (const preg in pregunta) {
      if(pregunta[preg] === "true") {
        cont++;
      }    
    }

    if(cont >= 2){
      console.log("No puedes ingresar")
    }else{
      console.log("Permitido el ingreso")
    }

    
  }

  return (
    <>
      <div className="colorAzul">
        <h1>{title}</h1>
      </div>

      <form >
        <div className="rowradio">
          <div className="col-sm-8">
            <p>¿Ha tenido contacto estrecho con un caso Covid positivo?</p>
          </div>
          <div className="col-sm-4">
          <label>Si</label>
          <input id="pregunta1-si" type="radio" name="pregunta1" value="true"  onClick={onClick1}/>
          <label>No</label>
          <input id="pregunta1-no" type="radio" name="pregunta1" value="false" defaultChecked onClick={onClick1}/>
          </div>
        </div>

        <div className="rowradio">
          <div className="col-sm-8">
            <p>¿Ha presentado sintomas como: Fiebre,Tos,Malestar?</p>
          </div>
          <div className="col-sm-4">
          <label>Si</label>
          <input id="pregunta1-si" type="radio" name="pregunta2" value="true"  onClick={onClick1}/>
          <label>No</label>
          <input id="pregunta1-no" type="radio" name="pregunta2" value="false" defaultChecked onClick={onClick1}/>
          </div>
        </div>

        <div className="rowradio">
          <div className="col-sm-8">
            <p>¿Ha tenido un viaje fuera del pais en los ultimos 14 dias?</p>
          </div>
          <div className="col-sm-4">
          <label>Si</label>
          <input id="pregunta1-si" type="radio" name="pregunta3" value="true" onClick={onClick1} />
          <label>No</label>
          <input id="pregunta1-no" type="radio" name="pregunta3" value="false" defaultChecked onClick={onClick1}/>
          </div>
        </div>

        <div className="rowradio">
          <div className="col-sm-8">
            <p>¿Usted cree en el Covid-19?</p>
          </div>
          <div className="col-sm-4">
          <label>Si</label>
          <input id="pregunta1-si" type="radio" name="pregunta4" value="true"  onClick={onClick1}/>
          <label>No</label>
          <input id="pregunta1-no" type="radio" name="pregunta4" value="false" defaultChecked onClick={onClick1}/>
          </div>
        </div>

        <div className="rowradio">
          <div className="col-sm-8">
            <p>¿Declara decir la verdad?</p>
          </div>
          <div className="col-sm-4">
          <label>Si</label>
          <input id="pregunta1-si" type="radio" name="pregunta5" value="true"  onClick={onClick1}/>
          <label>No</label>
          <input id="pregunta1-no" type="radio" name="pregunta5" value="false" defaultChecked onClick={onClick1}/>
          </div>
        </div>

        <div className="btnEnviar">
          <label className="lblX" type="submit" value="Enviar" onClick={onSubmitForm}>Enviar </label>
        </div>
      </form>



    </>
  );
};

export default Form;
