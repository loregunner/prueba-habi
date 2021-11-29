import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import SelectPizza from './select';
import ReactDatePicker from 'react-datepicker';
import guardarPedidosfs from"../firebaseguardarpedido"
import "./styles/check.css";
import Swal from 'sweetalert2';

function Popup({ onClose, ...props }) {

  const total = props.resultado
  
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);

  const [data, setData] = useState('')
  const initialValuesForm = { precio: total, nombre: '', celular: '', pizzaNombre: data, fecha: hoy.toLocaleDateString() };
  const [formValues, setFormValues] = useState(initialValuesForm);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleChangeSelect = (event) => {
    setData(event.target.value)
  };

  function validando() {

    let dataFirebase 
      dataFirebase = formValues
      guardarPedidosfs(dataFirebase) 
  }

  const handleSubmit = (e, values) => {
    console.log(formValues);
    e.preventDefault();
    if (formValues.nombre === '' && formValues.celular === '' || formErrors.nombre && formErrors.celular) {
      props.setPopupOpen(true);
    } else { setFormValues(initialValuesForm); props.setPopupOpen(false) 
     validando();
     Swal.fire('se realizo el pedido con exito');
    };

    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };
  

  const validate = (values) => {
    let errors = {};
    const regexNum = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!values.nombre) {
      errors.nombre = '*Campo obligatorio';
    } else if (values.nombre.length < 7) {
      errors.nombre = 'El nombre debe tener mas de 7 caracteres';
    }
    if (!values.celular) {
      errors.celular = '*Campo obligatorio';
    } else if (!regexNum.test(values.celular)) {
      errors.celular = 'Numero invalido';
    }
    return errors;
  };


  return (
    <Dialog
      aria-labelledby='simple-dialog-title'
      open={props.visible}
      fullWidth={true}
      disableEnforceFocus
      maxWidth='xs'>
      <DialogTitle id='simple-dialog-title' className='ingresa'>Enviar pedido</DialogTitle>
      <DialogContent dividers>
        <form onSubmit={handleSubmit} noValidate>
          <div className='popup'>
            {props.popupOpenFooter !== true ? (
              <div className='form-row' >
                <label htmlFor='nombre'>Nombre</label>
                <input
                  type='nombre'
                  name='nombre'
                  id='nombre'
                  value={formValues.nombre}
                  onChange={handleChange}
                  className={formErrors.nombre && 'input-error'}
                />
                {formErrors.nombre && (
                  <span className='error'>{formErrors.nombre}</span>
                )}
              </div>
            ) : null}
            {props.popupOpenFooter !== true ? (
              <div className='form-row-precio'>
                <label htmlFor='celular'>Celular</label>
                <input
                  type='celular'
                  name='celular'
                  id='celular'
                  value={formValues.celular}
                  onChange={handleChange}
                  className={formErrors.celular && 'input-error'}
                />
                {formErrors.celular && (
                  <span className='error'>{formErrors.celular}</span>
                )}
              </div>
            ) : null}
            <div className='form-row'>
              <SelectPizza options={props.itemsMenu} data={data} setData={setData} handleChangeSelect={handleChangeSelect} />
            </div>
            {props.popupOpenFooter !== true ? (
              <div className='form-row' >
                <label htmlFor='precio'>Precio</label>
                <input
                  type='text'
                  name='precio'
                  id='precio'
                  value={total}
                  onChange={handleChange}
                  disabled
                />
              </div>
            ) : null}
            {props.popupOpenFooter !== true ? (
              <div className='form-row' >
                <label htmlFor='date'>Fecha</label>
                <ReactDatePicker selected={hoy} dateFormat='dd/MM/yyyy' disabled  />
              </div>
            ) : null}
            <button type='submit' className='buttonSubmit'>
              Enviar
            </button>
          </div>
        </form>

      </DialogContent>
    </Dialog>
  );
}

Popup.propTypes = {
  visible: PropTypes.bool,
};

export default Popup;