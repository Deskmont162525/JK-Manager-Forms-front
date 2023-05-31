import { useState, useRef, useContext } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { onChangeInput, validateSectionSA2 } from '../../../data/functions';
import { CircularProgress } from '@material-ui/core';
import { authContext } from '../../../context/authContext';
import { crearFormsSA } from '../../../actions/superAdminActions';
import { useRouter } from 'next/router';

const CreateFormSA = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        id_usuario: ''
    });
    const { dispatchAuth } = useContext(authContext);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const toast = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;
        setLoading(true);
        valid = validateSectionSA2(formData, setError);
        if (!valid?.hasErrors) {
            toast.current.show({ severity: 'error', summary: 'Error', detail: valid.message });
            setLoading(false);
        } else {
            // Resto del código para enviar los datos al servidor
            const response = await crearFormsSA(formData, { dispatchAuth, router });
            if (response.code === 201) {
                toast.current.show({ severity: 'success', summary: 'Success', detail: response.message });
                setLoading(false);
            } else {
                setLoading(false);
                toast.current.show({ severity: 'error', summary: 'Error', detail: response.message });
            }

            setFormData({
                nombre: '',
                descripcion: '',
                id_usuario: ''
            });
        }
    };
    const onChangeInputForm = (e) => {
        onChangeInput(e, { error, setError }, formData, setFormData);
    };

    return (
        <div className="card">
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12">
                    <label htmlFor="nombre">Nombre</label>
                    <InputText id="nombre" name="nombre" value={formData.nombre} onChange={onChangeInputForm} />
                    {error.nombre && <small className="p-error">Campo requerido*</small>}
                </div>
                <div className="p-field p-col-12">
                    <label htmlFor="descripcion">Descripción</label>
                    <InputText id="descripcion" name="descripcion" value={formData.descripcion} onChange={onChangeInputForm} />
                    {error.descripcion && <small className="p-error">Campo requerido*</small>}
                </div>
                <div className="p-field p-col-12">
                    <label htmlFor="id_usuario">ID de usuario</label>
                    <InputText id="id_usuario" name="id_usuario" value={formData.id_usuario} onChange={onChangeInputForm} />
                    {error.id_usuario && <small className="p-error">Campo requerido*</small>}
                </div>
                <div className="p-field p-col-12" style={{ marginTop: 50 }}>
                    <Button label={loading ? <CircularProgress style={{ color: 'white', margin: '0px' }} size={29} /> : 'Crear Formulario'} onClick={handleSubmit} />
                </div>
                <Toast ref={toast} />
            </div>
        </div>
    );
};

export default CreateFormSA;
