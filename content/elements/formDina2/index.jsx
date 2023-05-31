import React from 'react';
import { dataEstrato, dataTipoVivi } from '../../../data/arrays';
import { onChangeInput } from '../../../data/functions';
import { ImputSelect } from '../../utils/InputSelect';
import { ImputTextA } from '../../utils/InputTexArea';
import { ImputType } from '../../utils/InputType';
import Ratios from '../inputsRatios';

const FormDinamico2 = ({stateTemp1, setStateTemp1, error, setError}) => {
    React.useEffect(() => {
        window.scrollTo(0, 0); // Establece el foco al inicio de la página
    }, []);
    
    const onChangeInputForm = (e) => {
        onChangeInput(e, { error, setError }, stateTemp1, setStateTemp1);
    };
    // console.log("que pasa ", stateTemp1);
    return (
        <div className="col-12">
            <div className="card">
                <div className="p-fluid formgrid grid">
                    <form className="row g-3">
                        <ImputType type="number" name="telefono" label="Teléfono y/o Celular *" value={stateTemp1?.telefono} setValue={onChangeInputForm} error={error?.telefono} placeHolder="Ingresa tu número de cel o fijo" />
                        <ImputType type="text" name="cantidad_hijos" label="Cantidad hijos *" value={stateTemp1?.cantidad_hijos} setValue={onChangeInputForm} error={error?.cantidad_hijos} placeHolder="Ingresa cantidad de hijos" />
                        <ImputType type="text" name="ciudad_residencia" label="Ciudad de residencia *" value={stateTemp1?.ciudad_residencia} setValue={onChangeInputForm} error={error?.ciudad_residencia} placeHolder="Ingresa tu ciudad de residencia" />
                        <ImputType
                            type="text"
                            name="direccion_residencia"
                            label="Dirección de residencia *"
                            value={stateTemp1?.direccion_residencia}
                            setValue={onChangeInputForm}
                            error={error?.direccion_residencia}
                            placeHolder="Ingresa tu dirección (Si vive en una vereda, especifique el nombre)"
                        
                        />
                        <ImputSelect name="estrato" label="Estrato *" value={stateTemp1?.estrato} setValue={onChangeInputForm} dataS={dataEstrato} error={error?.estrato} placeHolder="Selecciona una opción" />

                        <div className="text-700 text-left">
                            <Ratios key="2" label="Tipo de Vivienda *" name="tipo_vivienda" array={dataTipoVivi} error={error?.tipo_vivienda} value={stateTemp1?.tipo_vivienda} 
                            setValue={onChangeInputForm} 
                            />
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormDinamico2;
