import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import CanvasDraw from 'react-canvas-draw';
import { CircularProgress } from '@material-ui/core';
import DinamicModalFinal from '../../utils/modalFinal';
import { InfoFormService } from '../../../services/infoFormService';
import { InfoUserService } from '../../../services/UserService';
const url = process.env.NEXT_PUBLIC_URL_BACK;
const FormFirma = ({ stateTemp4, setStateTemp4, error, setError, isUploading, setIsUploading }) => {
    const [showModal, setshowModal] = useState(false);
    const canvasRef = useRef(null);
    const stateError3 = {
        title: '¡Felicitaciones por completar el formulario de registro en nuestro aplicativo del Fondo de Empleados!',
        message:
            'Ahora solo falta un último paso: revisar tu correo electrónico para activar tu cuenta. Una vez activada, podrás iniciar sesión y disfrutar de todas las funcionalidades. Si no encuentras el correo de activación, revisa tu bandeja de spam. ¡Estamos emocionados de tenerte en nuestra comunidad! Cualquier pregunta, estamos aquí para ayudarte.',
        status: 'success'
    };
    const handleSave = async (event) => {
        event.preventDefault();

        const canvas = canvasRef.current.canvasContainer.children[1];
        const image = new Image();
        image.src = canvas.toDataURL();
        // Verifica si el canvas está vacío
        if (image.src.length <= 7486) {
            setError({
                ...error,
                image2: true
            });
        } 
        else {
            // Espera a que la imagen se cargue
            await new Promise((resolve) => {
                image.onload = resolve;
            });

            // Crea un nuevo elemento canvas para redimensionar la imagen si es necesario
            const resizedCanvas = document.createElement('canvas');
            resizedCanvas.width = image.width;
            resizedCanvas.height = image.height;
            const ctx = resizedCanvas.getContext('2d');
            ctx.drawImage(image, 0, 0, image.width, image.height);

            // Convierte el nuevo canvas en una imagen nuevamente
            const finalImage = resizedCanvas.toDataURL();

            // Crea un nuevo FormData
            const formData = new FormData();
            formData.append('image', dataURItoBlob(finalImage), 'image.png');

            const requestOptions = {
                method: 'POST',
                body: formData,
                redirect: 'follow'
            };
            setIsUploading(true);
            const response = await fetch(`${url}/info_5/info-images/${stateTemp4?.id_usuario}`, requestOptions);
            const result1 = await response.json();
            const result = await InfoFormService.postInfo_images(stateTemp4, result1?.result);
            if (result1?.code === 200 && result?.code === 200) {
                setIsUploading(false);
                setshowModal(true);
                setError({
                    ...error,
                    image2: false
                });
                setStateTemp4({
                    ...stateTemp4,
                    image2: result1?.result
                });
                const result = await InfoUserService.getSendEmailById(stateTemp4?.id_usuario);
            } else {
                setError({
                    ...error,
                    image2: true
                });
            }
        }
    };

    // Función auxiliar para convertir una cadena base64 en un objeto Blob
    function dataURItoBlob(dataURI) {
        const byteString = atob(dataURI.split(',')[1]);
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    }

    const handleClear = (e) => {
        e.preventDefault();
        canvasRef.current.clear();
    };

    return (
        <div className="form-firma">
            <div className="canvas-wrapper">
                <h1>Tu firma *</h1>
                <CanvasDraw ref={canvasRef} brushRadius={3} lazyRadius={0} style={{ width: '100%', background: '#c7d2fe' }} />
            </div>
            <div className="button-wrapper">
                <Button label="Limpiar" icon="pi pi-times" className="p-button-secondary" onClick={handleClear} />
                <Button label="Guardar" icon="pi pi-check" className="p-button-primary" onClick={handleSave} />
            </div>
            {isUploading && (
                <div className="spinner-container" style={{ marginTop: 20 }}>
                    <CircularProgress className="spinner" style={{ color: 'white', margin: '0px' }} size={29} />
                    <span className="spinner-text">Estamos guardando tu imagen</span>
                </div>
            )}
            {error && (
                <small id={name} className="p-error" style={{ fontSize: '14px !important' }}>
                    Campo obligatorio*
                </small>
            )}
            <DinamicModalFinal title={stateError3?.title} message={stateError3?.message} status={stateError3?.status} openModal={showModal} idUser={stateTemp4?.id_usuario} />
        </div>
    );
};

export default FormFirma;
