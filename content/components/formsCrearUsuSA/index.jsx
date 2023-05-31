import { useState, useRef, useContext } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { userContext } from '../../../context/userContext';
import { onChangeInput, validateSectionSA } from '../../../data/functions';
import { permisosOptions, tipoPagoOptions, tipoUsuarioOptions } from '../../../data/arrays';
import { crearUsersSA } from '../../../actions/superAdminActions';
import { useRouter } from 'next/router';
import { authContext } from '../../../context/authContext';
import { MultiSelect } from 'primereact/multiselect';
import { CircularProgress } from '@material-ui/core';

const CreateUserForm = () => {
    const router = useRouter();
    const { dispatchAuth } = useContext(authContext);
    const { userStep } = useContext(userContext);
    const [userstateTemp, setUserstateTemp] = useState(userStep);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [repeatPassword, setRepeatPassword] = useState('');
    const toast = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;
        setLoading(true)
        valid = validateSectionSA(userstateTemp, setError, repeatPassword);
        if (valid.hasErrors) {
            toast.current.show({ severity: 'error', summary: 'Error', detail: valid.message });
            setLoading(false);
        }
        if (!valid.hasErrors) {
            // resto del código para enviar los datos al servidor
            const response = await crearUsersSA(userstateTemp, { dispatchAuth, router });
            if (response.code === 201) {        
                toast.current.show({ severity: 'success', summary: 'Success', detail: response.message });
            } else {
                toast.current.show({ severity: 'error', summary: 'Error', detail: response.message });
            }   
            setLoading(false)         
            setUserstateTemp({
                username: '',
                correo: '',
                password: '',
                tipo_pago: 'mes',
                tipo_usuario: 'Cliente',
                permisos: ["Modulos Cliente"]
            });
            setRepeatPassword('');
        }
    };

    const onChangeInputForm = (e) => {
        onChangeInput(e, { error, setError }, userstateTemp, setUserstateTemp);
    };

    const onChangePassword2 = (e) => {
        if (e.target.value !== '') {
            if (userstateTemp?.password !== e.target.value) {
                setError({
                    ...error,
                    [e.target.name]: true
                });
                toast.current.show({ severity: 'error', summary: 'Error', detail: 'Las contraseñas no coinciden' });
            } else {
                setError({
                    ...error,
                    [e.target.name]: false
                });
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Las contraseñas coinciden' });
            }
        } else {
            setError({
                ...error,
                [e.target.name]: true
            });
        }

        setRepeatPassword(e.target.value);
    };
    return (
        <div className="card">
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="username">Username</label>
                    <InputText id="username" name="username" value={userstateTemp?.username} onChange={(e) => onChangeInputForm(e)} />
                    {error?.username && <small className="p-error">Campo requerido*</small>}
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="correo">Email</label>
                    <InputText id="correo" name="correo" value={userstateTemp?.correo} onChange={(e) => onChangeInputForm(e)} />
                    {error?.correo && <small className="p-error">Campo requerido*</small>}
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="password">Password</label>
                    <Password id="password" name="password" value={userstateTemp?.password} onChange={(e) => onChangeInputForm(e)} />
                    {error?.password && <small className="p-error">Campo requerido*</small>}
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="repeatPassword">Repeat password</label>
                    <Password id="repeatPassword" name="repeatPassword" value={repeatPassword} onChange={(e) => onChangePassword2(e)} />
                    {error?.repeatPassword && <small className="p-error">Campo requerido* o Las contraseñas no coinciden</small>}
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="tipo_pago">Payment type</label>
                    <Dropdown id="tipo_pago" name="tipo_pago" options={tipoPagoOptions} value={userstateTemp?.tipo_pago} onChange={(e) => onChangeInputForm(e)} />
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="tipo_usuario">Tipo de usuario</label>
                    <Dropdown id="tipo_usuario" name="tipo_usuario" options={tipoUsuarioOptions} value={userstateTemp?.tipo_usuario} onChange={(e) => onChangeInputForm(e)} />
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label htmlFor="permisos">Permisos</label>
                    <MultiSelect id="permisos" name="permisos" options={permisosOptions} value={userstateTemp?.permisos} onChange={(e) => setUserstateTemp({ ...userstateTemp, permisos: e.value })} />
                </div>
                <div className="p-field p-col-12" style={{ marginTop: 50 }}>
                    <Button label={loading ? <CircularProgress style={{ color: 'white', margin: '0px' }} size={29} /> : 'Crear Usuario'} onClick={handleSubmit} />
                </div>
                <Toast ref={toast} />
            </div>
        </div>
    );
};

export default CreateUserForm;
