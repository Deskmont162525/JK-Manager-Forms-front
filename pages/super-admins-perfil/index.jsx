import React from 'react';
import BannerSA from '../../content/elements/banerSA';
import Menu from '../../content/utils/Sidebar';
import { menuItemsSuAd, rutaSuperAdmin } from '../../data/objets';
import LayoutSA from '../../content/elements/layoutSa';
import AppFooter from '../../layout/AppFooter';
import TableClientsForms from '../../content/components/tableClientsSA';
import nookies from 'nookies';
import { SuperAdminService } from '../../services/SuperAdminService';
import { requireAuthentication } from '../../HOC/authHOC';

const PageIniSuperAd = ({ dataClientesSA }) => {
    return (
        <>
            <LayoutSA />
            <Menu items={menuItemsSuAd} />
            <BannerSA title="Perfil" position="0" url={rutaSuperAdmin?.url} />
            <div className="div-container-sa">
                <TableClientsForms dataClientesSA={dataClientesSA?.code === 3003 ? [] : dataClientesSA} />
            </div>
            <AppFooter />
        </>
    );
};

export async function getServerSideProps(context) {
    const cookies = nookies.get(context);
    const decodeData = cookies?.userJKMF ? JSON.parse(cookies.userJKMF) : '';
    const [dataClientesSA] = await Promise.all([SuperAdminService.getDataUsersSA(decodeData.token)]);
    return {
        props: {
            dataClientesSA
        }
    };
}

export default requireAuthentication(PageIniSuperAd);
