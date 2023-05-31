import { ImputType } from '../../utils/InputType';

export const FormDinamicoFamiliar = ({ value, error, num, index, handleChange}) => {
    return (
        <div className="col-12">
            <div className="text-700 text-left">
                <div className="text-600 font-bold text-3xl mb-3">Datos Familiar {num}</div>
            </div>
            <ImputType type="text" name="nombre" label="Nombre " value={value?.nombre} setValue={(e) => handleChange(e, 'nombre')} error={error[index]?.nombre}  placeHolder="" />
            <ImputType type="text" name="cedula" label="Cedula " value={value?.cedula} setValue={(e) => handleChange(e, 'cedula')} error={error[index]?.cedula} placeHolder="" />
            <ImputType type="text" name="parente" label="Parentezco " value={value?.parente} setValue={(e) => handleChange(e, 'parente')} error={error[index]?.parente} placeHolder="" />
            <ImputType type="number" name="porcent" label="Debes colocar en múltiplos menores a 100% Autorizado " value={value?.porcent} setValue={(e) => handleChange(e, 'porcent')}  error={error[index]?.porcent} placeHolder="" />
        </div>
    );
};

