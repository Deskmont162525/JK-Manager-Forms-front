import { InputTextarea } from 'primereact/inputtextarea';
import { useStilesInputType } from './inputT.style';

export const ImputTextA = ({ name, label, value, type, setValue, error, placeHolder }) => {
    const classes = useStilesInputType();
    
    return (
        <div className="col-md-12">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <InputTextarea style={{height: "45px !important"}} name={name} type={type} 
            className={`form-control ${error !== undefined ? error === true ? "": 'is-valid':""}`}
            onChange={setValue} value={value} placeholder={placeHolder} />

            {/* <div id={name} className="invalid-feedback">
                Por favor, elije un nombre de usuario. campo obligatorio
            </div> */}
        </div>
    );
};
