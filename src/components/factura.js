import React, { useState } from "react";

import "./styles/factura.css";
import Check from "../components/check";
import menos from "../img/signo-menos.svg";
import Swal from 'sweetalert2'

function Factura(props) {
  let [pizzaTotal, setPizzaTotal] = useState(10 * 1000)

  const eliminarFactura = (index) => {
    let nuevoArray = props.acaVacontador.filter((item, indice) => indice !== index)

    props.setItemsMenu(nuevoArray)
  };

  let total = 0;

  props.acaVacontador.forEach((element) => {
    const multiplica = (a) => {
      return a * 1000;
    }
    pizzaTotal += (multiplica(total) + multiplica(element.price))
  });
  
  return (
    <div className="factura1">
      <div className="title">Factura:</div>
      <div className="resumenFactura" id="rFactura">
        <ul>
          <li className="listFactr">
            Base masa: $ 10000
            <img
              className="imgMenos"
              src={menos}
              alt="imagen"
              onClick={() => {
                Swal.fire('No se puede eliminar la base, es obligatoria')
              }}
            />
          </li>
          {props.acaVacontador.map((item, index) => (
            <li className="listFactr" key={index}>
              {item.name}: $ {item.price * 1000}
              <img
                className="imgMenos"
                src={menos}
                alt="imagen"
                onClick={() => {
                  eliminarFactura(index);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="total">Total: $ {pizzaTotal}  <Check total={props.acaVacontador} setPopupOpen={props.setPopupOpen}/></div>
    </div>
  );
  //}
}

export default Factura;
