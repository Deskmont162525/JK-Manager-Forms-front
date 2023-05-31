import React, { useState, useEffect } from 'react';
import { Steps, Button } from 'react-step-builder';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import axios from 'axios';
import EditFormStep from '../../elements/stepDinami';
import FieldList from '../../elements/listaCampos';

const EditForm = () => {
    const router = useRouter();
    const [fields, setFields] = useState([]);

    useEffect(() => {
        const fetchFields = async () => {
            const res = await axios.get(`/api/forms/${router.query.formId}`);
            setFields(res.data.fields);
        };
        fetchFields();
    }, []);

    const handleFieldDelete = (fieldId) => {
        setFields(fields.filter((field) => field.id !== fieldId));
    };

    const handleFormSave = async () => {
        try {
            await axios.put(`/api/forms/${router.query.formId}`, { fields });
            toast.success('Formulario guardado exitosamente');
        } catch (error) {
            toast.error('Ocurrió un error al guardar el formulario');
        }
    };

    return (
        <div className="container">
            <h1>Editar Formulario</h1>
            <Steps>
                <EditFormStep fields={fields} setFields={setFields} />
            </Steps>
            <FieldList fields={fields} onDelete={handleFieldDelete} />
            <Button onClick={handleFormSave}>Guardar Formulario</Button>
        </div>
    );
};

export default EditForm;
