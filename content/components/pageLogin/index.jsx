import React, { useContext, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { CircularProgress } from '@material-ui/core';
import { signIn } from '../../../actions/authActions';
import { useRouter } from 'next/router';
import { authContext } from '../../../context/authContext';
import { routes } from '../../../data/routes';

const Login = () => {
    const toast = useRef(null);
    const router = useRouter();
    const { dispatchAuth } = useContext(authContext);
    const [formData, setFormData] = useState({ correo: '', password: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        setLoading(true);
        if (formData.correo && formData.password) {
            // Realiza la autenticación aquí
            const response = await signIn({ formData, router, dispatchAuth });
            if (response?.code === 200){
                if (response.data.tipo_usuario) {
            
            switch (response.data.tipo_usuario) {
                case 'SuperAdmin':
                    router.push(`${routes.routeSuperAdmin}`);
                    break;
                case 'Admin':
                    router.push(`${routes.routeAdmin}`);
                    break;
                default:
                    router.push(`${routes.routeCliente}`);
            }
        }
            }
            if (response?.code !== 200) {
                setLoading(false);
                toast.current.show({ severity: 'error', summary: 'Error', detail: response?.message });
            }
        }
    };

    return (
        <div className="p-d-flex p-jc-center p-ai-center p-mt-6" style={{ height: '100vh' }}>
            <div className="card p-shadow-5" style={{ width: '30rem' }}>
                <h2 className="p-text-center">Iniciar sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="p-fluid">
                        <div className="p-field">
                            <label htmlFor="correo">Correo electrónico</label>
                            <InputText id="correo" name="correo" type="correo" value={formData.correo} onChange={handleChange} className={classNames({ 'p-invalid': submitted && !formData.correo })} />
                            {submitted && !formData.correo && <small className="p-error">El correo electrónico es obligatorio.</small>}
                        </div>
                        <div className="p-field" style={{ marginTop: 20 }}>
                            <label htmlFor="password">Contraseña</label>
                            <Password id="password" name="password" value={formData.password} onChange={handleChange} className={classNames({ 'p-invalid': submitted && !formData.password })} />
                            {submitted && !formData.password && <small className="p-error">La contraseña es obligatoria.</small>}
                        </div>
                        <div className="p-field p-text-center" style={{ marginTop: 20 }}>
                            <Button type="submit" label={loading ? <CircularProgress style={{ color: 'white', margin: '0px' }} size={29} /> : 'Iniciar Sesión'} />
                        </div>
                    </div>
                </form>
            </div>
            <Toast ref={toast} />
        </div>
    );
};

export default Login;
