import { Calendar } from 'primereact/calendar';
import { useStylesInputDate } from './inputDate.style';

export const InputDate = ({ name, label, value, setValue, error, required }) => {
    const classes = useStylesInputDate();   
    return (   
        <div className="col-md-12">
            <label htmlFor={name} className={`form-label ${error !== undefined ? (error === true ? classes.errorLabel : '') : ''}`}>
                {label}
            </label>
            <Calendar style={{height: "45px !important"}} 
            className={`form-control ${error !== undefined ? error === true ? "is-invalid": 'is-valid':""}`}
            name={name} value={value} onChange={setValue} id={name} required={required} showIcon />
            <div id={name} className="invalid-feedback">
                campo obligatorio*
            </div>
        </div>
    );
};
