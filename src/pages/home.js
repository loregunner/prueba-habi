import React from "react";
import '../styles/home.css'
import logo from "../img/logo.png";

export default function Home() {
 
    return (
      <div>
        <div className="Container0">
          <div className="card-body1">
          <img className="logo" src={logo} alt="Logo" />
            <div className="grid1">
            <span className="font">PizzaQueen</span>
            <div className="nombre">
            </div>
           <a className='botonEntrar' href='/cocina'>Realizar pedido</a> 
            </div>
          </div>
        </div>
      </div>
    );
  }