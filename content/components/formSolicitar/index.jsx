import { useState } from 'react';
import { Steps } from 'primereact/steps';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';

const fields = [
    {
        name: 'name',
        label: 'Nombre',
        type: 'text',
        required: true
    },
    {
        name: 'email',
        label: 'Correo electrónico',
        type: 'text',
        required: true
    },
    {
        name: 'newsletter',
        label: 'Recibir boletín de noticias',
        type: 'checkbox',
        required: false
    }
];

const steps = [
    { label: 'Sección 1', fields: ['name', 'lastName', 'email', 'phone', 'address'] },
    { label: 'Sección 2', fields: [] },
    { label: 'Sección 3', fields: [] }
];

const DynamicFormSection1 = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const currentFields = steps[currentStep].fields;
    const [formValues, setFormValues] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues); // Aquí se puede manejar la lógica de envío del formulario
    };

    return (
        <>
            <h2>
                Formulario de la sección {currentStep + 1}: {steps[currentStep].label}
            </h2>
            <form onSubmit={handleSubmit}>
                {currentFields.map((fieldName) => (
                    <div key={fieldName} className="p-field">
                        <label htmlFor={fieldName}>{fieldName}</label>
                        <InputText id={fieldName} name={fieldName} value={formValues[fieldName]} onChange={handleInputChange} required />
                    </div>
                ))}
                <div className="p-d-flex p-jc-between">
                    {currentStep > 0 && <Button label="Atrás" onClick={handlePrevStep} />}
                    {currentStep < steps.length - 1 && <Button label="Siguiente" onClick={handleNextStep} />}
                    {currentStep === steps.length - 1 && <Button type="submit" label="Enviar" />}
                </div>
            </form>
        </>
    );
};

const DynamicFormSection2 = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [fieldsAdded, setFieldsAdded] = useState(false);
    const [formData, setFormData] = useState([]);

    const handleAddField = (field) => {
        setFormData([...formData, field]);
        setFieldsAdded(true);
    };

    const handleRemoveField = (field) => {
        setFormData(formData.filter((f) => f.name !== field.name));
    };

    const handleNext = () => {
        if (currentStep === fields.length - 1) {
            console.log(formData); // Aquí se puede manejar la lógica de envío del formulario
        } else {
            setCurrentStep(currentStep + 1);
            setFieldsAdded(false);
        }
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    return (
        <>
            <DynamicFormSection1 />
            <h2>Formulario de la sección 2</h2>
            <div className="p-d-flex p-flex-column">{fieldsAdded ? <DynamicFormFields fields={fields} onAddField={handleAddField} /> : <Button label="Agregar campo" onClick={() => setFieldsAdded(true)} />}</div>
            <h2>Steps</h2>
            <Steps model={fields} activeIndex={currentStep} />
            <form>
                {formData.map((field) => (
                    <div key={field?.name}>
                        {field?.type === 'text' && (
                            <InputText
                                id={field?.name}
                                name={field?.name}
                                label={field?.label}
                                required={field?.required}
                                value={field?.value}
                                onChange={(e) => setFormData(formData.map((f) => (f.name === field.name ? { ...f, value: e.target.value } : f)))}
                            />
                        )}
                        {field?.type === 'checkbox' && (
                            <Checkbox id={field?.name} name={field?.name} label={field?.label} checked={field?.value} onChange={(e) => setFormData(formData.map((f) => (f.name === field.name ? { ...f, value: e.checked } : f)))} />
                        )}
                        <Button label="Eliminar" className="p-button-secondary" onClick={() => handleRemoveField(field)} />
                    </div>
                ))}
                {fieldsAdded && (
                    <>
                        <Button label="Anterior" className="p-button-secondary" onClick={handlePrev} />
                        {currentStep === fields.length - 1 ? <Button label="Enviar" onClick={handleNext} /> : <Button label="Siguiente" onClick={handleNext} />}
                    </>
                )}
            </form>
        </>
    );
};

export default DynamicFormSection2;
