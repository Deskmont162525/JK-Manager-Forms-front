import React, { useRef } from 'react';
import { InputFileArchivo } from '../../utils/InputFileArchivo';
import { Toast } from 'primereact/toast';

const url = process.env.NEXT_PUBLIC_URL_BACK;
const CargarInfoForms = () => {
    const [error, setError] = React.useState({});
    const [isUploading, setIsUploading] = React.useState(false);
    const toastRef = useRef(null);
    const inputFileRef = useRef(null);

    const handleFileUpload = async (event) => {
        const file = event.files[0];
        if (!file) {
            setError({
                name: 'archivo',
                status: true,
                mensaje: 'Debes seleccionar un archivo'
            });
        } else {
            try {
                const formdata = new FormData();
                formdata.append('archivo', file);

                const requestOptions = {
                    method: 'POST',
                    body: formdata,
                    redirect: 'follow'
                };
                setIsUploading(true);
                const response = await fetch(`${url}/data_importar/archivo`, requestOptions);
                const result = await response.json();
                if (result?.code === 200) {
                    setIsUploading(false);
                    setError({
                        name: 'archivo',
                        status: false,
                        mensaje: ''
                    });
                    toastRef.current.show({ severity: 'success', summary: 'Éxito', detail: 'El archivo se cargó correctamente' });
                    inputFileRef.current.clear();
                } else {
                    setIsUploading(false);
                    setError({
                        name: 'archivo',
                        status: true,
                        mensaje: result?.mensaje || 'Ocurrió un error al cargar el archivo'
                    });
                    toastRef.current.show({ severity: 'error', summary: 'Error', detail: result?.mensaje || 'Ocurrió un error al cargar el archivo' });
                }
            } catch (error) {
                setIsUploading(false);
                setError({
                    name: 'archivo',
                    status: true,
                    mensaje: 'Ocurrió un error en el servidor. Inténtalo de nuevo más tarde'
                });
                // console.log('error', error);
                toastRef.current.show({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error en el servidor. Inténtalo de nuevo más tarde' });
            }
        }
    };

    return (
        <>
            <div className="col-12">
                <div className="card" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="col-12">
                        <form className="row g-">
                            <InputFileArchivo ref={inputFileRef} name="archivo" label="Adjuntar archivo" error={error} isUploading={isUploading} handleFileUpload={handleFileUpload} accept=".xlsx, .xls" />
                        </form>
                    </div>
                </div>
            </div>
            <Toast ref={toastRef} />
        </>
    );
};

export default CargarInfoForms;


