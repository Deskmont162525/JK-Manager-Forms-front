import StepsFormDinami from '../../../content/components/steps-forms';
import { v4 as uuidv4 } from 'uuid';
import { destroyCookie, setCookie } from 'nookies';
import Layout from '../../../layout/layout';
import { requireNoAuthentication } from '../../../HOC/noAuthHOC';
import { AuthService } from '../../../services/AuthService';
const querystring = require('querystring');

const PageFormIFV2 = () => {
    return (
        <Layout>
            <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                <StepsFormDinami title="Afiliación Fondo de Empleados FOET" subTitle="Formulario de vinculación y deducción de descuentos del asociado NIT-809.005.199-4" />
            </div>
        </Layout>
    );
};

export async function getServerSideProps(context) {
    const oneDayInSeconds = 86400; // segundos en un día
    const expires = new Date();
    expires.setTime(expires.getTime() + oneDayInSeconds * 1000); // calcula fecha de expiración en un día

    const parsedIds = querystring.parse(context.query.ids);
    const { codigo, idform } = parsedIds; // Obtiene los parámetros de la URL

    const dataSend = {
        id: idform
    };
    const dataForm = {
        codigo: codigo,
        idform: idform,
        idUserInvi: `${process.env.NEXT_PUBLIC_CODE}${uuidv4()}`
    };
    const cookieValue = JSON.stringify(dataForm);
    if (codigo || idform) {
        const codeValid = await AuthService.postValidarCF(dataSend, codigo);
        if (codeValid?.code === 200) {            
            // convierte el objeto a una cadena en formato JSON
            setCookie(context, 'usuario_invitado', cookieValue, {
                path: '/' // establece la ruta de la cookie
            });
        } else {
            setCookie(context, 'usuario_invitado', JSON.stringify({codigo: 500}), {
                path: '/' // establece la ruta de la cookie
            });
        }
    } else {
        setCookie(context, 'usuario_invitado', JSON.stringify({codigo: 500}), {
            path: '/' // establece la ruta de la cookie
        });
    }

    return { props: {} };
}
// url http://localhost:3005/app-foet/forms/formIFV2/codigo=$2a$10$VKysE8WMzdBajAm1pWpUDu.8j6C9Xt9CyChKa0LilF0nQPItoVkIK&idform=6467a7d0ac2f9fb2d20c36a7
// url http://localhost:3005/app-foet/forms/formIFV2/codigo=$2a$10$VKysE8WMzdBajAm1pWpUDu.8j6C9Xt9CyChKa0LilF0nQPItoVkIK&idform=643f26689152a4a4261fd33e
export default requireNoAuthentication(PageFormIFV2);
