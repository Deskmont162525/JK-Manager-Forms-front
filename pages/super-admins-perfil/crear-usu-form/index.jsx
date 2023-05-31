import { requireAuthentication } from '../../../HOC/authHOC';
import CreateUserForm from '../../../content/components/formsCrearUsuSA';
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
                <CreateUserForm />
            </div>
            <AppFooter />
        </>
    );
};

export default requireAuthentication(CrearUsuPage);
