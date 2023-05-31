import { InputText } from "primereact/inputtext";
import { useStilesInputNumber } from "./inputN.style";
import React from "react";

export const NumberInput = ({ name, label, value, setValue, required, placeHolder }) => {
    const classes = useStilesInputNumber();
    const [error, setError] = React.useState({})
    const handleChange = (event) => {
        const newValue = event.target.value;
        const regex = /^[0-9]{7}[a-zA-Z0-9]*$/; 
        console.log("desde ", value, newValue);
        if (newValue === '') {
          setError(prevError => ({
            ...prevError,
            name: true,
            msg: 'No se permite el campo vacío, Campo obligatorio*'
          }));
        } else if (!regex.test(newValue)) {
          setError(prevError => ({
            ...prevError,
            name: true,
            msg: 'Ingresa solo números en los primeros 7 caracteres'
          }));
        } else if (newValue.length > 15) {
          setError(prevError => ({
            ...prevError,
            name: true,
            msg: 'No se permiten más de 15 caracteres'
          }));
        } else if (newValue.length < 7) {
            setError((prevError) => ({
                ...prevError,
                name: true,
                msg: 'No se permiten menos de 7 caracteres'
            }));
        } else {
          setError(prevError => ({
            ...prevError,
            name: false
          }));
          
        }
          setValue(event);        
      };
      
      
    return (
        <div className="col-md-12">
            <label htmlFor={name} className={`form-label ${error.name === true ? classes.errorLabel : ''}`}>
                {label}
            </label>
            <InputText name={name} id={name} className={`form-control ${error.name !== undefined ? (error.name === true ? 'is-invalid' : 'is-valid') : ''}`} onChange={handleChange} value={value} placeholder={placeHolder} required={required}  maxLength={16} />
            <div id={name} className="invalid-feedback">
                Por favor, {error?.msg ? error?.msg : 'No se permite el campo vacío, Campo obligatorio*'} 
            </div>
        </div>
    );
};
