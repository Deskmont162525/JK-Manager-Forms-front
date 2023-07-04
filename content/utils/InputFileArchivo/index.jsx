import { CircularProgress, Button } from '@material-ui/core';
import { FileUpload } from 'primereact/fileupload';
import React from 'react';

export const InputFileArchivo = React.forwardRef(({ name, label, error, isUploading, handleFileUpload, accept }, ref) => {
    return (
        <div className="col-md-12">
            {isUploading && (
                <div className="spinner-container">
                    <CircularProgress className="spinner" style={{ color: 'white', margin: '0px' }} size={29} />
                    <span className="spinner-text">Estamos guardando tu información, cuando termine aparecerá la siguiente para guardar</span>
                </div>
            )}
            <FileUpload
                ref={ref}
                name={name}
                chooseLabel={label}
                onUpload={handleFileUpload}
                accept={accept}
                emptyTemplate={<p className="m-0">{label}</p>}
                customUpload={true}
                uploadHandler={handleFileUpload}
                uploadLabel="Cargar"
                cancelLabel="Cancelar"
                chooseOptions={{ label: 'Seleccionar Archivo', icon: 'pi pi-upload' }}
                className="custom-file-upload"
            />
        </div>
    );
});
