import React from 'react'
import check from '../img/cheque.svg'

import './styles/check.css'
import Swal from 'sweetalert2'





function Check (props){
  function validando(e) {
   if(props.total.length > 0){
     props.setPopupOpen(true)
   }else{
    Swal.fire('Por favor arme su pizza antes de guardar')
   }
  }

 
    return (
        <div className='check'>
          <img className='imgCheck' src={check}  onClick={validando} alt='imagen'/>
  </div>
    )
}

export default Check