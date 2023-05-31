import React from 'react';
import BannerSA from '../../../content/elements/banerSA';
import Menu from '../../../content/utils/Sidebar';
import { menuItemsSuAd, rutaSuperAdmin } from '../../../data/objets';
import LayoutSA from '../../../content/elements/layoutSa';
import AppFooter from '../../../layout/AppFooter';
import nookies from 'nookies';
import { SuperAdminService } from '../../../services/SuperAdminService';
import { requireAuthentication } from '../../../HOC/authHOC';
import TableDetailsClientsForms from '../../../content/componentsSA/detalleDataFormUser';

const PageIniSuperAd = ({dataFormsClientesSA}) => {
    return (
        <>
            <LayoutSA />
            <Menu items={menuItemsSuAd} />
            <BannerSA title="Perfil" position="0" url={rutaSuperAdmin?.url} />
            <div className="div-container-sa">
                <TableDetailsClientsForms dataFormsClientesSA={dataFormsClientesSA?.code === 404 ? [] : dataFormsClientesSA} />
                </div>
            <AppFooter />
        </>
    );
};

export async function getServerSideProps(context) {
    const codigo = context?.params?.id;
    const cookies = nookies.get(context);
    const decodeData = cookies?.userJKMF ? JSON.parse(cookies.userJKMF) : '';

    const [dataFormsClientesSA] = await Promise.all([
        SuperAdminService.getDataUserFormularioSAById(codigo, decodeData.token)
    ]);

    return {
        props: {
            dataFormsClientesSA
        }
    };
}

export default requireAuthentication(PageIniSuperAd);
