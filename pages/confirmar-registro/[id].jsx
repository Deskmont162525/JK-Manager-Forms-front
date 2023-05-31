import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { InfoUserService } from '../../services/UserService';
import React from 'react';

const url = process.env.NEXT_PUBLIC_BASE_PATH;
const PageFormIFV2 = ({ dataClienteUser }) => {
    const [message, setMessage] = React.useState('');

    React.useEffect(() => {
        if (dataClienteUser && dataClienteUser.code === 500) {
            setMessage(dataClienteUser.message + ' Intenta de nuevo mas tarde o comunicate con la admin');
        } else if (dataClienteUser && dataClienteUser.code === 404) {
            setMessage(dataClienteUser.message + ' Intenta de nuevo desde el link de tu correo o comunicate con la admin');
        } else {
            setMessage(dataClienteUser.message);
        }
    }, [dataClienteUser]);

    const router = useRouter();

    const handleClick = () => {
        // Aquí puedes especificar la URL a la que deseas redirigir
        const url = '/';
        router.push(url);
    };
    return (
        <div className="grid grid-nogutter surface-0 text-800" style={{backgroundColor: '#e9ecef'}}>
            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                <section>
                    <span className="block text-6xl font-bold mb-1">{dataClienteUser && dataClienteUser.code === 500 ? 'Disculpa' : 'Gracias'}</span>
                    <div className="text-6xl text-primary font-bold mb-3">{dataClienteUser && dataClienteUser.code === 200 && dataClienteUser.user.username} <br/>{message} </div>
                    {dataClienteUser && dataClienteUser.code === 200 && <p className="mt-0 mb-4 text-700 line-height-3">ya puedes iniciar sesión y acceder a todos los servicios que tenemos para ti.</p>}
                    {dataClienteUser && dataClienteUser.code === 200 && <Button label="Iniciar Sesion" type="button" className="mr-3 p-button-raised" onClick={handleClick} />}
                </section>
            </div>
            <div className="col-12 md:col-6 overflow-hidden">
                <img src={`/${url}/layout/images/logo-dark.png`} alt="hero-1" style={{ clipPath: 'polygon(0, 100% 0%, 100% 100%, 0 100%)', objectFit: 'cover', width: '100%', height: '100%' }} />
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const codigo = context?.params?.id;
    const [dataClienteUser] = await Promise.all([InfoUserService.getAcriveUsuById(codigo)]);
    return {
        props: { dataClienteUser }
    };
}

export default PageFormIFV2;
