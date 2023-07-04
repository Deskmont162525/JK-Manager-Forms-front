import { InputText } from 'primereact/inputtext';
import { useStilesInputType } from './inputT.style';

export const ImputType = ({ name, label, value, type, setValue, required, error, placeHolder }) => {
    const classes = useStilesInputType();
    return (
        <div className="col-md-12">
            <label htmlFor={name} className={`form-label ${error === true ? classes.errorLabel : ''}`}>
                {label}
            </label>
            <InputText
                name={name}
                style={{ padding: 12.2 }}
                id={name}
                type={type}
                className={`form-control ${error !== undefined ? (error === true ? 'is-invalid' : 'is-valid') : ''}`}
                onChange={setValue}
                value={value}
                placeholder={placeHolder}
                required={required}
                min={type === "number" ? 0 : ""}
                maxLength={type === "number" ? 10 : ""}
            />

            {name === 'email' ? (
                <div id={name} className="invalid-feedback">
                    Por favor, elije otro {label} este ya esta en uso o comunicate con el admin*
                </div>
            ) : (
                <div id={name} className="invalid-feedback">
                    Por favor, elije un {label} campo obligatorio*
                </div>
            )}
        </div>
    );
};
