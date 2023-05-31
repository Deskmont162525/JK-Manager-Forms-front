import React from 'react';
import { dataSiNo, dataTipoCuenta } from '../../../data/arrays';
import { onChangeInput } from '../../../data/functions';
import { ImputTextA } from '../../utils/InputTexArea';
import { ImputType } from '../../utils/InputType';
import Ratios from '../inputsRatios';

const FormDinamico3 = ({stateTemp2, setStateTemp2, error, setError}) => {
    React.useEffect(() => {
        window.scrollTo(0, 0); // Establece el foco al inicio de la página
    }, []);
    const onChangeInputForm = (e) => {
        onChangeInput(e, { error, setError }, stateTemp2, setStateTemp2);
    };
    return (
        <div className="col-12">
            <div className="card">
                <div className="p-fluid formgrid grid">
                    <form className="row g-3">
                        <Ratios key="2" name="trans_moneda_e" label="¿Realiza transacciones en moneda extranjera? *" array={dataSiNo} error={error} value={stateTemp2?.trans_moneda_e} setValue={onChangeInputForm} />
                        <ImputTextA
                            type="text"
                            name="detalle_trans_moneda_e"
                            label="En caso de que si realice transacciones en moneda extranjera, especifique: Tipo de transacción, entidad y moneda; de lo contrario escriba NO APLICA"
                            value={stateTemp2?.detalle_trans_moneda_e}
                            setValue={onChangeInputForm}
                            error={error?.detalle_trans_moneda_e}                        
                            placeHolder="Ingresa texto aqui"
                            required={stateTemp2?.trans_moneda_e === "si" ? true:false}
                        />
                        <ImputType type="text" name="empresa_usuario" label="Empresa usuaria (Empresa donde laboras actualmente) *" value={stateTemp2?.empresa_usuario} setValue={onChangeInputForm} error={error?.empresa_usuario} placeHolder="Ingresa tu empresa" />
                        <ImputType type="text" name="empresa_contratante" label="Empresa Contratante (Empresa con la que firmaste tu contrato) *" value={stateTemp2?.empresa_contratante} setValue={onChangeInputForm} error={error?.empresa_contratante} placeHolder="Ingresa tu empresa contratante" />
                        <ImputType type="text" name="cargo" label="Cargo *" value={stateTemp2?.cargo} setValue={onChangeInputForm} error={error?.cargo} placeHolder="Ingresa tu cargo" />
                        <ImputType type="number" name="salario_basico" label="Salario Básico *" value={stateTemp2?.salario_basico} setValue={onChangeInputForm} error={error?.salario_basico} placeHolder="Ingresa tu salario basico" />
                        <ImputType type="number" name="otros_ingresos" label="Otros Ingresos" value={stateTemp2?.otros_ingresos} setValue={onChangeInputForm} error={error?.otros_ingresos} placeHolder="Ingresa otros ingresos" />
                        <Ratios name="recusos_publicos" key="3" label="Por su cargo o actividad ¿Maneja recursos públicos? *" array={dataSiNo} error={error?.recusos_publicos}  value={stateTemp2?.recusos_publicos} setValue={onChangeInputForm} />
                        <ImputType type="text" name="banco" label="Banco ¿En qué banco tienes tu cuenta de nómina? *" value={stateTemp2?.banco} setValue={onChangeInputForm} error={error?.banco} placeHolder="Ingresa nombre de tu banco" />
                        <Ratios name="tipo_cuenta" key="4" label="Tipo de cuenta bancaria *" array={dataTipoCuenta} error={error?.tipo_cuenta}  value={stateTemp2?.tipo_cuenta} setValue={onChangeInputForm} />
                        <ImputType type="text" name="num_cuenta" label="Número de Cuenta *" value={stateTemp2?.num_cuenta} setValue={onChangeInputForm} error={error?.num_cuenta} placeHolder="Ingresa tu numero de cuenta" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormDinamico3;
