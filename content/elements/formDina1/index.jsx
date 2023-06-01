import React from 'react';
import { dataDocumento, dataEstadoC } from '../../../data/arrays';
import { formattedDate, onChangeInput } from '../../../data/functions';
import { InputDate } from '../../utils/InputDate';
import { ImputSelect } from '../../utils/InputSelect';
import { ImputType } from '../../utils/InputType';
import { InputText } from 'primereact/inputtext';
import { NumberInput } from '../../utils/InputNumber';

const FormDinamico1 = ({ stateTemp, setStateTemp, error, setError }) => {
    React.useEffect(() => {
        window.scrollTo(0, 0); // Establece el foco al inicio de la página
      }, []);
    const onChangeInputForm = (e) => {
        onChangeInput(e, { error, setError }, stateTemp, setStateTemp);
    };
    return (
        <div className="col-12">
            <div className="card">
                <div className="p-fluid formgrid grid">
                    <form className="row g-3">
                        <ImputType type="text" name="ciudad" label="Ciudad *" value={stateTemp?.ciudad} setValue={onChangeInputForm} error={error?.ciudad} placeHolder="Ingresa el nombre de la ciudad o municipio actual" required={true} />
                        <div className="p-inputgroup">
                            <InputText value={formattedDate} readOnly />
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-calendar"></i>
                            </span>
                        </div>
                        <ImputType type="text" name="nombres" label="Nombre/s*" value={stateTemp?.nombres} setValue={onChangeInputForm} error={error?.nombres} placeHolder="Ingresa tu nombre/s" required={true} />
                        <ImputType type="text" name="apellidos" label="Apellido/s *" value={stateTemp?.apellidos} setValue={onChangeInputForm} error={error?.apellidos} placeHolder="Ingresa tu apellido/s" required={true} />
                        <ImputSelect name="tipo_documento" label="Tipo de Documento *" value={stateTemp?.tipo_documento} setValue={onChangeInputForm} dataS={dataDocumento} error={error?.tipo_documento} placeHolder="Selecciona una opción" />
                        <NumberInput
                            name="numero_documento"
                            label="Número de tu documento de identidad *"
                            value={stateTemp?.numero_documento}
                            setValue={onChangeInputForm}
                            error={error?.numero_documento}
                            placeHolder="Ingresa tu número de documento"
                            setError={setError}
                            required={true}
                        />
                        <InputDate name="fecha_expedi_docu" label="Fecha de expedición del documento *" value={stateTemp?.fecha_expedi_docu} setValue={onChangeInputForm} error={error?.fecha_expedi_docu} required={true} />
                        <ImputType
                            type="text"
                            name="ciudad_expedi_docu"
                            label="Ciudad de expedición del documento *"
                            value={stateTemp?.ciudad_expedi_docu}
                            setValue={onChangeInputForm}
                            error={error?.ciudad_expedi_docu}
                            placeHolder="Ingresa tu ciudad de expedición del documento"
                            required={true}
                        />
                        <InputDate name="fecha_naci" label="Fecha de Nacimiento *" value={stateTemp?.fecha_naci} setValue={onChangeInputForm} error={error?.fecha_naci} required={true} />
                        <ImputSelect name="estado_civil" label="Estado Civil *" value={stateTemp?.estado_civil} setValue={onChangeInputForm} dataS={dataEstadoC} error={error?.estado_civil} placeHolder="Selecciona una opción" />
                        <ImputType type="email" name="email" label="Email *" value={stateTemp?.email} setValue={onChangeInputForm} error={error?.email} placeHolder="Ingresa tu email" />
                        <ImputType
                            type="text"
                            name="profecion_ocupacion"
                            label="Profesión y/o Ocupación *"
                            value={stateTemp?.profecion_ocupacion}
                            setValue={onChangeInputForm}
                            error={error?.profecion_ocupacion}
                            placeHolder="Ingresa tu Profesión y/o Ocupación"
                            required={true}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormDinamico1;
