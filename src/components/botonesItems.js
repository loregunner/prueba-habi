import React from 'react';
//import { Link } from 'react-router-dom';
import items from '../items';
import './styles/botonesItems.css'

function BadgesList(props) {
  const list = [];
  const data = items;
 

  const agregarFactura = (e) => {
    if(e.type.includes('Principal')){
    let newObjetoPizza = {name: e.name, price: e.price, };
    props.setContador(oldArray => [...oldArray, newObjetoPizza]);
    }
    else{
    let newObjeto = {name: e.name, price: e.price};
    props.setContador(oldArray => [...oldArray, newObjeto]);
    }
}


        Object.values(data.data).forEach((e) => {
            if(e.type.includes('Principal')){
            list.push(
             <React.Fragment key={e.id} >
              <div className='botonesPrincipal'>
                <li className='lista'>
                 <img className='imgPrincipal' src={e.img} alt='imagen'/>
                    <button className='botonesClase' onClick={()=>{agregarFactura (e);}} > {e.name}   ${e.price*1000} </button>
                </li>
              </div>
            </React.Fragment>
            )
            }
                    })
                            
       return(
        <div className='prueba'>
          <p>Arma tu Pizza</p>
          <ul className="list-unstyled">
              {list}
          </ul>
          </div>
      );
    
  }
  
  export default BadgesList;
  