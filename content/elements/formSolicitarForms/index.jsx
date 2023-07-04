import React, { useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { ImputTextA } from '../../utils/InputTexArea';
import { ImputType } from '../../utils/InputType';
import { Button } from 'primereact/button';
import { solicitarFormsState } from '../../../states/solicitarFormState';
import { tiposDeCampo } from '../../../data/arrays';
import { onChangeCampoReque, onChangeCampoRequeTipo, onChangeInput, validarFormularioSF } from '../../../data/functions';
import { crearSolicitudForms } from '../../../actions/adminActions';
import { Toast } from 'primereact/toast';
import { CircularProgress } from '@material-ui/core';
import { InputFileMultiple } from '../../utils/InputFileMultiple';

const FormSolicitarForms = ({ data }) => {
    const [stateTemp, setStateTemp] = React.useState(solicitarFormsState);
    const [isUploading, setIsUploading] = React.useState(false);
    const [error, setError] = React.useState({});
    const toastRef = useRef(null);
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

    // Función para agregar un campo requerido al formulario
    const agregarCampoRequerido = (event) => {
        event.preventDefault();
        setStateTemp((prevState) => ({
            ...prevState,
            camposRequeridos: [...prevState.camposRequeridos, { label: '', tipo: '' }]
        }));
    };

    // Función para eliminar un campo requerido del formulario
    const eliminarCampoRequerido = (event, index) => {
        event.preventDefault();
        setStateTemp((prevState) => {
            const nuevosCamposRequeridos = prevState.camposRequeridos.filter((_, i) => i !== index);
            return {
                ...prevState,
                camposRequeridos: nuevosCamposRequeridos
            };
        });
    };

    // Función para manejar el cambio de valor en un campo requerido
    const onChangeCampoRequerido = (index, value) => {
        onChangeCampoReque(index, value, { error, setError }, stateTemp, setStateTemp);
    };
    const onChangeCampoRequeridoTipo = (index, value) => {
        onChangeCampoRequeTipo(index, value, { error, setError }, stateTemp, setStateTemp);
    };

    const enviarSolicitud = async (event) => {
        event.preventDefault();
        // Validar los campos del formulario antes de enviar la solicitud
        setIsUploading(true);
        const validar = validarFormularioSF(stateTemp, setError);

        if (validar) {
            const response = await crearSolicitudForms(stateTemp);
            if (response?.code === 200) {
                toastRef.current.show({ severity: 'success', summary: 'Éxito', detail: response?.mensaje });

                setStateTemp((prevState) => ({
                    ...prevState,
                    nombreFormulario: '',
                    descripcionFormulario: '',
                    camposRequeridos: [{ label: '', tipo: '' }],
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
    return (
        <>
            <div className="col-12">
                <div className="card">
                    <div className="p-fluid formgrid grid">
                        <form className="row g-3">
                            <ImputType type="text" name="nombreFormulario" label="Nombre del formulario" value={stateTemp?.nombreFormulario} setValue={onChangeInputForm} error={error?.nombreFormulario} />

                            <ImputTextA name="descripcionFormulario" label="Descripción del formulario" value={stateTemp?.descripcionFormulario} setValue={onChangeInputForm} error={error?.descripcionFormulario} />

                            <div className="col-12">
                                <h5>Campos requeridos</h5>
                                <div className="col-md-12">
                                    {stateTemp?.camposRequeridos.map((campo, index) => (
                                        <div key={index} className="form-item">
                                            <div className="form-item-input">
                                                <ImputType type="text" value={campo.label} setValue={(e) => onChangeCampoRequerido(index, e.target.value)} placeholder="Etiqueta" error={error?.[`label_${index}`]} />
                                            </div>
                                            <div className="form-item-select">
                                                <Dropdown
                                                    value={campo.tipo}
                                                    options={tiposDeCampo}
                                                    onChange={(e) => onChangeCampoRequeridoTipo(index, e.value)}
                                                    placeholder="Tipo de campo"
                                                    className={`form-control ${error?.[`tipo_${index}`] !== undefined ? (error?.[`tipo_${index}`] === true ? 'is-invalid' : 'is-valid') : ''}`}
                                                />
                                                <div className="invalid-feedback">Campo obligatorio*</div>
                                            </div>
                                            <div className="form-item-button">
                                                <Button icon="pi pi-trash" className="p-button-danger" onClick={(e) => eliminarCampoRequerido(e, index)} />
                                            </div>
                                        </div>
                                    ))}

                                    <Button label="Agregar campo requerido" icon="pi pi-plus" className="p-button-rounded p-button-success" onClick={agregarCampoRequerido} />
                                </div>
                            </div>
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

export default FormSolicitarForms;
