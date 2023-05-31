import React from 'react';
import { FormDinamicoFamiliar } from '../../elements/formFamil';
import { Button } from 'primereact/button';

export const FormsDinamicosFamiliars = ({ stateTemp3, familiares, setStateTemp3, error, setError, errorF, setErrorF }) => {
    const [familiaresList, setFamiliaresList] = React.useState(familiares);

    const agregarFamiliar = () => {
        if (familiaresList.length < 4) {
            const nuevoFamiliar = {
                nombre: '',
                cedula: '',
                parente: '',
                porcent: ''
            };
            setFamiliaresList([...familiaresList, nuevoFamiliar]);
            setStateTemp3({
                ...stateTemp3,
                familiares: [...familiaresList, nuevoFamiliar]
            });
        }
    };

    const eliminarFamiliar = (index) => {
        const nuevaListaFamiliares = [...familiaresList];
        nuevaListaFamiliares.splice(index, 1);

        const tieneCamposVacios = Object.values(nuevaListaFamiliares[0]).some((valor) => !valor);
        if (!tieneCamposVacios) {
            setError({ ...error, familiares: false });
        }
        setFamiliaresList(nuevaListaFamiliares);
        setStateTemp3({
            ...stateTemp3,
            familiares: nuevaListaFamiliares
        });
    };

    const handleChange = (event, campo, index) => {
        const { value } = event.target;
        const newFamiliaresList = [...familiaresList];
        const newFamiliar = { ...newFamiliaresList[index], [campo]: value };
        newFamiliaresList[index] = newFamiliar;
        setFamiliaresList(newFamiliaresList);

        // Validar campo y actualizar errores
        const newError = { ...errorF[index] };
        if (!value) {
            newError[campo] = true;
        } else {
            newError[campo] = false;
        }
        setErrorF({ ...errorF, [index]: newError });

        setStateTemp3({
            ...stateTemp3,
            familiares: newFamiliaresList
        });

        setError({
            ...error,
            familiares: false
        });
    };

    return (
        <div className="familiar-list-form">
            {familiaresList.map((familiar, index) => (
                <div className="familiar-form-container" key={`familiar-${index}`}>
                    <FormDinamicoFamiliar error={errorF} value={familiar} handleChange={(e, campo) => handleChange(e, campo, index)} index={index} num={index + 1} />
                    {index !== 0 && (
                        <div style={{ margin: '20px 7px' }}>
                            <Button label="Eliminar Familiar" className="form-container__button--secondary" onClick={() => eliminarFamiliar(index)} />
                        </div>
                    )}
                </div>
            ))}
            {familiaresList.length < 4 && (
                <div style={{ margin: '20px 7px' }}>
                    <Button type="button" label="Agregar Familiar" className="form-container__button--primary" onClick={agregarFamiliar} />
                </div>
            )}
        </div>
    );
};
