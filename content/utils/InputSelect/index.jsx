import { Dropdown } from 'primereact/dropdown';
import { useStulesInputSelect } from './inputSelec.style';

export const ImputSelect = ({ name, label, value, setValue, required, dataS, error, placeHolder }) => {
    const classes = useStulesInputSelect();
    return (
        <div className="col-md-12">
            <label htmlFor={name} className={`form-label ${error !== undefined ? (error === true ? classes.errorLabel : '') : ''}`}>
                {label}
            </label>           
            <Dropdown style={{height: "45px !important"}} 
            className={`form-control ${error !== undefined ? error === true ? "is-invalid": 'is-valid':""}`}
            name={name} id={name} options={dataS} value={value} onChange={setValue} optionLabel="name" placeholder={placeHolder} required={required}></Dropdown>
            <div id={name} className="invalid-feedback">
                Campo obligatorio *
            </div>           
        </div>
    );
};
