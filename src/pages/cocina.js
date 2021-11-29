import React , { useState}from "react";
import Header from "../components/header";
import "../styles/cocina.css";
import BadgesList from "../components/botonesItems";
import Factura from "../components/factura";
import Popup from "../components/popup";

function PrincipalMesero (props) {
  let [totalPizza, setTotalPizza] = useState(10 * 1000)

  const [itemsMenu, setItemsMenu] = useState([])
  const [showDash, setshowDash] = useState(false)
  const [popupOpen, setPopupOpen] = React.useState(false);
  console.log(itemsMenu);
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  let total = 0;

  itemsMenu.forEach((element) => {
    const multiplica = (a) => {
      return a * 1000;
    }
    totalPizza += (multiplica(total) + multiplica(element.price))
    console.log(totalPizza);
  });
   
    return (
      <React.Fragment>
         <Header/>
      <div className= 'Container1'>
          <div className='card-body'>
              <BadgesList contador={itemsMenu} setContador={setItemsMenu} setItemsMenu={setItemsMenu} />
              <Factura acaVacontador={itemsMenu} setItemsMenu={setItemsMenu} setPopupOpen={setPopupOpen} totalPizza={totalPizza} setTotalPizza={setTotalPizza}/>
          </div>
          <Popup
            tittle='Enviar pedido'
            visible={popupOpen}
            togglePopup={togglePopup}
            setPopupOpen={setPopupOpen}
            itemsMenu={itemsMenu}
            setItemsMenu={setItemsMenu}
            resultado={totalPizza}
            popupOpen={popupOpen}></Popup>
        </div>
      </React.Fragment>
    );

}

export default PrincipalMesero;