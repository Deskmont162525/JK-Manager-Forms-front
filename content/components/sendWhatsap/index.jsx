import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import Dropzone from 'react-dropzone';

const FormularioSendW = () => {
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            numbers: '' // Agregar numbers aquí
        }
    });
    const [phoneNumbers, setPhoneNumbers] = useState([]);

    const onDrop = (acceptedFiles) => {
        console.log(acceptedFiles);
    };

    const onSubmit = async (data) => {
        console.log(data);
    };

    //  const handleAddPhoneNumber = () => {
    //       const newPhoneNumber = document.getElementById('numbers').value;
    //       setPhoneNumbers((prevPhoneNumbers) => [...prevPhoneNumbers, newPhoneNumber]);
    //       document.getElementById('numbers').value = '';
    //   };

    const handleAddPhoneNumber = () => {
        const newPhoneNumber = watch('numbers');
        const isValid = validatePhoneNumber(newPhoneNumber);
        console.log('newPhoneNumber', newPhoneNumber);

        if (isValid) {
            setPhoneNumbers((prevPhoneNumbers) => [...prevPhoneNumbers, newPhoneNumber]);
            reset('numbers');
        } else {
            setError('numbers', { type: 'manual', message: 'Número de teléfono inválido, Deben ser solo numeros y debe tener 10 caracteres' });
        }
    };

    const validatePhoneNumber = (phoneNumber) => {
      console.log("lo que recibe validar ", phoneNumber);

        const regex = /^\d{10},$/; // Expresión regular que valida que el número tenga exactamente 10 dígitos y que el caracter 11 sea una coma
        if (!regex.test(phoneNumber)) {
          console.log("endonde entra 1 ", !regex.test(phoneNumber))
            return false;
        }

        const numberOnly = phoneNumber.replace(',', ''); // Elimina la coma del final del número
        if (numberOnly.length !== 10) {
          console.log("endonde entra 2 ", !regex.test(numberOnly.length))
            return false;
        }

        if (!/^\d+$/.test(numberOnly)) {
            // Valida que solo tenga dígitos del 0-9
            console.log("endonde entra 3 ", !/^\d+$/.test(numberOnly))
            return false;
        }

        return true;
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-field">
                <label htmlFor="from-phone">Número de teléfono desde donde se enviará</label>
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-phone"></i>
                    </span>
                    <InputText
                        id="from-phone"
                        type="tel"
                        placeholder="Ingrese el número de teléfono"
                        {...register('fromPhone', {
                            required: 'Este campo es requerido',
                            pattern: {
                                value: /^\d+$/,
                                message: 'Ingresa un número de teléfono válido'
                            }
                        })}
                        className={errors.fromPhone ? 'p-invalid' : ''}
                    />
                </div>
                {errors.fromPhone && <small className="p-error">{errors.fromPhone.message}</small>}
            </div>
            <div className="p-field">
                <label htmlFor="numbers">Números de teléfono a los que se enviará el mensaje (separados por coma)</label>
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-phone"></i>
                    </span>
                    {/* <InputText
                        id="numbers"
                        type="text"
                        placeholder="Ingrese los números de teléfono separados por coma"
                        {...register('numbers', {
                            required: 'Este campo es requerido',
                            pattern: {
                                value: /^(\d+,)*\d+$/,
                                message: 'Ingresa los números de teléfono separados por coma'
                            }
                        })}
                        className={errors.numbers ? 'p-invalid' : ''}
                    />
                     {errors.numbers && <small className="p-error">{errors.numbers.message}</small>}
                    <Button type="button" icon="pi pi-plus" className="p-button-outlined" onClick={handleAddPhoneNumber} /> */}
                    <InputText
                        id="numbers"
                        type="text"
                        placeholder="Ingrese los números de teléfono separados por coma"
                        {...register('numbers', {
                            required: 'Este campo es requerido',
                            pattern: {
                                value: /^(\d+,)*\d+$/,
                                message: 'Ingresa los números de teléfono separados por coma'
                            },
                            validate: validatePhoneNumber // Función de validación personalizada
                        })}
                        className={errors.numbers ? 'p-invalid' : ''}
                    />

                    <Button type="button" icon="pi pi-plus" className="p-button-outlined" onClick={handleAddPhoneNumber} />
                </div>
                {errors.numbers && <small className="p-error">{errors.numbers.message}</small>}
                <ul>
                    {phoneNumbers.map((phoneNumber, index) => (
                        <li key={index}>{phoneNumber}</li>
                    ))}
                </ul>
            </div>
            <div className="p-field">
                <label htmlFor="message">Mensaje</label>
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-comment"></i>
                    </span>
                    <InputTextarea
                        id="message"
                        type="text"
                        placeholder="Ingrese su mensaje"
                        rows={5}
                        {...register('message', {
                            required: 'Este campo es requerido'
                        })}
                        className={errors.message ? 'p-invalid' : ''}
                    />
                </div>
                {errors.message && <small className="p-error">{errors.message.message}</small>}
            </div>
            <div className="p-field">
                <label htmlFor="file">Adjuntar documento</label>
                <Dropzone onDrop={onDrop} accept=".pdf,.doc,.docx,.txt">
                    {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps()} className="p-inputgroup">
                            <input {...getInputProps()} />
                            <Button icon="pi pi-upload" label="Seleccionar archivo" className="p-button-outlined" />
                        </div>
                    )}
                </Dropzone>
            </div>
            <Button type="submit" label="Enviar por WhatsApp" className="p-button-raised p-button-primary" />
        </form>
    );
};

export default FormularioSendW;
