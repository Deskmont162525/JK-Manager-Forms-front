import { Button } from 'primereact/button';
import { InfoUserService } from '../../services/UserService';

const url = process.env.NEXT_PUBLIC_BASE_PATH;
const PageFormIFV2 = ({ dataClienteUser }) => {
    return (
        <div className="grid grid-nogutter surface-0 text-800">
            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                <section>
                    <span className="block text-6xl font-bold mb-1">!{dataClienteUser.code === 200 ? dataClienteUser?.user?.username : dataClienteUser?.message}¡</span>
                    {dataClienteUser.code === 200 && (
                        <>
                            <span className="block text-6xl font-bold mb-1">Has completado el formulario</span>
                            <div className="text-6xl text-primary font-bold mb-3">Te invitamos a estar pendiente de tu correo.</div>
                            <p className="mt-0 mb-4 text-700 line-height-3">A este, te hemos enviado el link para activar tu cuenta y poder disfrutar de nuestros servicios.</p>
                        </>
                    )}
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
    const [dataClienteUser] = await Promise.all([InfoUserService.getGraciasUsuById(codigo)]);
    return {
        props: { dataClienteUser }
    };
}

export default PageFormIFV2;
