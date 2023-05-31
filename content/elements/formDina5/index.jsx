import React, { useState } from 'react';
import { InputFile } from '../../utils/InputFile';
import FormFirma from '../formFirma';
import ImageIcon from '@material-ui/icons/Image';
const url = process.env.NEXT_PUBLIC_URL_BACK;
const FormDinamico5 = ({ stateTemp4, setStateTemp4, error, setError }) => {
    React.useEffect(() => {
        window.scrollTo(0, 0); // Establece el foco al inicio de la página
    }, []);
    const [step, setStep] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const handleFileUpload2 = async (event) => {
        const file = event.files[0];

        if (!file) {
            setError({
                ...error,
                image1: true
            });
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
                const response = await fetch(`${url}/info_5/info-images/${stateTemp4?.id_usuario}`, requestOptions);
                const result = await response.json();

                if (result?.code === 200) {
                    setIsUploading(false);
                    setStep(2);
                    setError({
                        ...error,
                        image1: false
                    });
                    setStateTemp4({
                        ...stateTemp4,
                        image1: result?.result
                    });
                } else {
                    setError({
                        ...error,
                        image1: true
                    });
                }
            } catch (error) {
                setIsUploading(false);
                setError({
                    ...error,
                    image1: true
                });
                console.log('error', error);
            }
        }
    };

    const handleFileUpload = async (event) => {
        const file = event.files[0];

        if (!file) {
            setError({
                ...error,
                image: true
            });
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
                const response = await fetch(`${url}/info_5/info-images/${stateTemp4?.id_usuario}`, requestOptions);
                const result = await response.json();
                if (result?.code === 200) {
                    setIsUploading(false);
                    setStep(1);
                    setError({
                        ...error,
                        image: false
                    });
                    setStateTemp4({
                        ...stateTemp4,
                        image: result?.result
                    });
                } else {
                    setError({
                        ...error,
                        image: true
                    });
                }
            } catch (error) {
                setIsUploading(false);
                setError({
                    ...error,
                    image: true
                });
                console.log('error', error);
            }
        }
    };

    // console.log('que pasa 5', error, stateTemp4);

    return (
        <div className="col-12">
            <div className="card">
                <h1>Son 3 imágenes requeridas, estas irán apareciendo a medida que vayas avanzando</h1>
                <h4>Utiliza los botones + para seleccionar UPLOAD para guardar tu imagen y CANCELAR para iniciar de nuevo con el proceso</h4>
                <h3>
                    <ImageIcon style={{ width: 60, height: 60 }} />
                    {step + 1} de 3
                </h3>

                <div className="p-fluid formgrid">
                    <form className="row g-">
                        {step === 0 && <InputFile name="image" label="Adjunta la foto de cara frontal de tu documento de identidad *" handleFileUpload={handleFileUpload} error={error?.image} isUploading={isUploading} />}
                        {step === 1 && <InputFile name="image1" label="Adjunta la foto de cara posterior de tu documento de identidad *" handleFileUpload={handleFileUpload2} error={error?.image1} isUploading={isUploading} />}
                        {step === 2 && <FormFirma stateTemp4={stateTemp4} setStateTemp4={setStateTemp4} error={error?.image2} setError={setError} isUploading={isUploading} setIsUploading={setIsUploading} />}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormDinamico5;
