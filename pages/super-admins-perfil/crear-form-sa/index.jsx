import { requireAuthentication } from '../../../HOC/authHOC';
import CreateFormSA from '../../../content/components/formCrearFomrSA';
import BannerSA from '../../../content/elements/banerSA';
import LayoutSA from '../../../content/elements/layoutSa';
import Menu from '../../../content/utils/Sidebar';
import { menuItemsSuAd, rutaSuperAdmin } from '../../../data/objets';
import AppFooter from '../../../layout/AppFooter';

const CrearUsuPage = () => {
    return (
        <>
            <LayoutSA />
            <Menu items={menuItemsSuAd} />
            <BannerSA title="Formulario Crear Usuarios" position="1" url={rutaSuperAdmin?.url} />
            <div className="div-container-sa">
                <CreateFormSA />
            </div>
            <AppFooter />
        </>
    );
};
// export default CrearUsuPage;

export default requireAuthentication(CrearUsuPage);
