import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export const FormularioCampos = ({ campos, quitarCampo }) => {
    return (
        <form>
            {campos.map((campo, index) => (
                <div className="p-field" key={index}>
                    <label htmlFor={`campo-${index}`}>{campo.tipo}</label>
                    <InputText id={`campo-${index}`} name={`campo-${index}`} />
                    <Button icon="pi pi-trash" className="p-button-danger p-button-outlined" onClick={() => quitarCampo(index)} />
                </div>
            ))}
        </form>
    );
};
