import { RadioButton } from 'primereact/radiobutton';
import InputRatio from '../../utils/InputRatio';
import { useStylesInputsRatios } from './inputsRatios.style';
import React from 'react';

const Ratios = ({ label, array, name, error, value, setValue }) => {
    const classes = useStylesInputsRatios();

    const changeRatio = (e) => {
        let evento = {
            target: {
                name: name,
                value: e.target.name
            }
        };

        setValue(evento);
    };

    return (
        <div className="row align-items-start">
            <label className={`form-label ${error === true ? classes.errorLabel : ''}`}>{label}</label>
            {array &&
                array?.map((e,i) => {
                    return (
                        <React.Fragment key={i}>
                        <InputRatio name={e.name} label={e.label} value={value} setValue={changeRatio} checked={value === e.name} />
                      </React.Fragment>
                    );
                })}

            <div id={name} className="invalid-feedback">
                Por favor, elije un nombre de usuario. campo obligatorio
            </div>
        </div>
    );
};

export default Ratios;
