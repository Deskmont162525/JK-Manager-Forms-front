import { CircularProgress } from '@material-ui/core';
import { FileUpload } from 'primereact/fileupload';

export const InputFile = ({ name, label, handleFileUpload, error, isUploading }) => {
    return (
        <div className="col-md-12">
            {isUploading && (
                <div className="spinner-container">
                    <CircularProgress className="spinner" style={{ color: 'white', margin: '0px' }} size={29} />
                    <span className="spinner-text">Estamos guardando tu imagen, cuando termine aparecerá la siguiente para guardar</span>
                </div>
            )}
            <FileUpload
                name={name}
                chooseLabel={label}
                onUpload={handleFileUpload}
                className={error?.name === name ? (error?.status === true ? 'form-control is-invalid' : 'form-control is-valid') : ''}
                accept="image/*" // Añadimos la validación para que solo se acepten imágenes
                emptyTemplate={<p className="m-0">{label}</p>}
                customUpload={true}
                uploadHandler={handleFileUpload}
                uploadLabel="Cargar"
                cancelLabel="Cancelar"
            />

            {error && (
                <small id={name} className="p-error" style={{ fontSize: '14px !important' }}>
                    Campo obligatorio*
                </small>
            )}
        </div>
    );
};
