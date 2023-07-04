import { CircularProgress } from '@material-ui/core';
import { FileUpload } from 'primereact/fileupload';
import React from 'react';
import { Toast } from 'primereact/toast';
import { ListBox } from 'primereact/listbox';
import { ScrollPanel } from 'primereact/scrollpanel';

const url = process.env.NEXT_PUBLIC_URL_BACK;

export const InputFileMultiple = ({ name, label, stateTemp, setStateTemp }) => {
    const [isUploading, setIsUploading] = React.useState(false);    

    const inputFileRef = React.useRef(null);
    const toastRef = React.useRef(null);

    const handleFileUpload = async (event) => {
        setIsUploading(true);

        const file = event.files[0];
        if (!file) {
        } else {
            try {
                const formdata = new FormData();
                formdata.append('image', file);

                const requestOptions = {
                    method: 'POST',
                    body: formdata,
                    redirect: 'follow'
                };
                setIsUploading(true);
                const response = await fetch(`${url}/info_5/info-images/${stateTemp?.id_usuario}`, requestOptions);
                const result = await response.json();
                if (result?.code === 200) {
                    setIsUploading(false);
                    setStateTemp((prevState) => ({
                        ...prevState,
                        archivosAdjuntos: prevState.archivosAdjuntos.concat(result?.result)
                    }));
                    // setArchivosAdjuntos(stateTemp?.archivosAdjuntos)
                    toastRef.current.show({ severity: 'success', summary: 'Éxito', detail: result?.mensaje });
                    inputFileRef.current.clear();
                } else {
                    setIsUploading(false);
                    toastRef.current.show({ severity: 'error', summary: 'Error', detail: result?.mensaje || 'Ocurrió un error al cargar el archivo' });
                }
            } catch (error) {
                setIsUploading(false);
                console.log('error', error);
                toastRef.current.show({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error en el servidor. Inténtalo de nuevo más tarde' });
            }
        }
    };
    return (
        <>
            <div className="col-md-12">
                {isUploading && (
                    <div className="spinner-container">
                        <CircularProgress className="spinner" style={{ color: 'white', margin: '0px' }} size={29} />
                        <span className="spinner-text">Estamos guardando tu imagen, cuando termine aparecerá la siguiente para guardar</span>
                    </div>
                )}
                <FileUpload
                    ref={inputFileRef}
                    name={name}
                    chooseLabel={label}
                    onUpload={handleFileUpload}
                    customUpload={true}
                    uploadHandler={handleFileUpload}
                    className="custom-file-upload"
                    accept="image/*" // Añadimos la validación para que solo se acepten imágenes
                    emptyTemplate={<p className="m-0">{label}</p>}
                    uploadLabel="Cargar"
                    cancelLabel="Cancelar"
                    chooseOptions={{ label: 'Seleccionar Archivo', icon: 'pi pi-upload' }}
                />
            </div>
            {stateTemp?.archivosAdjuntos.length !== 0 &&(
                <div className="col-md-12">
                <h5>Archivos adjuntos:</h5>
                <ScrollPanel style={{ height: '200px' }}>
                    <ListBox options={stateTemp?.archivosAdjuntos} optionLabel="original_filename" style={{ width: '100%' }} />
                </ScrollPanel>
            </div>
            )}
            
            <Toast ref={toastRef} />
        </>
    );
};
