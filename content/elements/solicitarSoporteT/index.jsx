import { ImputType } from '../../utils/InputType';
import { Button } from 'primereact/button';
import React from 'react';
import { onChangeInput, onchangeInputEmail, validarFormularioSS } from '../../../data/functions';
import { Toast } from 'primereact/toast';
import { CircularProgress } from '@material-ui/core';
import { formularioSolicitudSoporteState } from '../../../states/solicitarSoporteState';
import { crearSolicitudSoporte } from '../../../actions/adminActions';
import { InputFileMultiple } from '../../utils/InputFileMultiple';

const FormSolicitarSoporte = ({ data }) => {
    const [stateTemp, setStateTemp] = React.useState(formularioSolicitudSoporteState);
    const [error, setError] = React.useState({});
    const [isUploading, setIsUploading] = React.useState(false);
    const toastRef = React.useRef(null);
    React.useEffect(() => {
        if (data?.idUser) {
            setStateTemp((prevState) => ({
                ...prevState,
                id_usuario: data.idUser
            }));
        }
    }, [data]);
    // Función para manejar el cambio de valor en los campos del formulario
    const onChangeInputForm = (e) => {
        onChangeInput(e, { error, setError }, stateTemp, setStateTemp);
    };

    const onChangeEmail = (e) => {
        onchangeInputEmail(e, { setError }, stateTemp, setStateTemp);
    };

    const enviarSolicitud = async (event) => {
        event.preventDefault();
        // Validar los campos del formulario antes de enviar la solicitud
        const validar = validarFormularioSS(stateTemp, error, setError);
        if (validar) {
            const response = await crearSolicitudSoporte(stateTemp);
            if (response?.code === 200) {
                toastRef.current.show({ severity: 'success', summary: 'Éxito', detail: response?.mensaje });

                setStateTemp((prevState) => ({
                    ...prevState,
                    nombreFormulario: '',
                    correoElectronico: '',
                    descripcionProblema: '',
                    archivosAdjuntos: [],
                    estado: false
                }));
            } else {
                toastRef.current.show({ severity: 'error', summary: 'Error', detail: response?.mensaje });
            }
            setIsUploading(false);
        } else {
            setIsUploading(false);
        }
    };
    // console.log("que paso",stateTemp);
    return (
        <>
            <div className="col-12">
                <div className="card">
                    <div className="p-fluid formgrid grid">
                        <form className="row g-3">
                            <ImputType type="text" name="nombreFormulario" label="Nombre del formulario" value={stateTemp?.nombreFormulario} setValue={onChangeInputForm} error={error?.nombreFormulario} />

                            <ImputType type="email" name="correoElectronico" label="Correo electrónico" value={stateTemp?.correoElectronico} setValue={onChangeEmail} error={error?.correoElectronico} />

                            <ImputType type="textarea" name="descripcionProblema" label="Descripción del problema" value={stateTemp?.descripcionProblema} setValue={onChangeInputForm} error={error?.descripcionProblema} />

                            <InputFileMultiple name="archivo" label="Adjuntar archivo" error={error}  multiple={false} stateTemp={stateTemp} setStateTemp={setStateTemp} />

                            {isUploading && (
                                <div className="spinner-container">
                                    <CircularProgress className="spinner" style={{ color: 'white', margin: '0px' }} size={29} />
                                    <span className="spinner-text">Estamos guardando tu solicitud...</span>
                                </div>
                            )}
                            <Button label="Enviar solicitud" onClick={enviarSolicitud} />
                        </form>
                    </div>
                </div>
            </div>
            <Toast ref={toastRef} />
        </>
    );
};

export default FormSolicitarSoporte;
