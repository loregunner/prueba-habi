import React, { useEffect, useState } from "react";
import Header from "../components/header";
import "../styles/cocina.css";
import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import firebaseConfig from '../firebaseConfig'
import pedido from "../img/pedido.jpg";
const firebaseApp = firebase.initializeApp(firebaseConfig)

let db = firebaseApp.firestore()

function Dashboard(props) {
  const [listData, setListData] = useState([])
  let list = [];
  const entrarItem = async () => {
    let list = [];
    const response = await db.collection("Pedidos").get();
    response.forEach(document => {
      list.push(document.data())
    })
    setListData(list)
  }
  useEffect(() => {
    entrarItem();
  }, [])
  listData.forEach((e) => {
    list.push(
      <React.Fragment key={e.id} >
        <div className='botonesPrincipal'>
          <li className='lista'>
            <div className='pedidoData'>
              <div>Usuario: {e.nombre}</div>
              <div>Telefono usuario: {e.celular}</div>
              <div>Fecha: {e.fecha}</div>
              <div>Precio: {e.precio}</div>
              <div>Nombre de la pizza: {e.pizzaNombre !== '' ? e.pizzaNombre : 'La pizza no tiene nombre'}</div>
            </div>
          </li>
        </div>
      </React.Fragment>
    )
  })

  return (
    <React.Fragment>
      <Header />
      <div className='Container2'>
        <div className='card-body-pedido'>
          <div><img className='img' src={pedido} alt='imagen' /></div>
          <div>        <p>Pedidos realizados</p>
            <ul className="list-unstyled">
              {list}
            </ul></div>
        </div>
      </div>
    </React.Fragment>
  );

}

export default Dashboard;