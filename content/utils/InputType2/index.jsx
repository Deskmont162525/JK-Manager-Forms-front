import { InputText } from 'primereact/inputtext';

export const InputType2 = ({ name, label, type, massageError, error }) => {
    return (
        <div className="field p-fluid">
            <label htmlFor={name} className={error?.name && error?.status === true ? "p-error" :"p-no-error"}>{label}</label>
            <InputText id={name} type={type} style={{padding: 10.5}} className={error?.name === name ? (error?.status === true ? 'form-control is-invalid' : 'form-control is-valid') : ''} aria-describedby={name} />
            {error?.name === name && error?.status === true && (
                <small id={name} className="p-error" style={{fontSize: '14px !important'}}>
                    {massageError}
                </small>
            )}
        </div>
    );
};
