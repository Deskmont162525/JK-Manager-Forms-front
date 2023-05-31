import Banner from '../../content/elements/baner';
import Menu from '../../content/utils/Sidebar';
import { menuItemsAd, rutaAdmin } from '../../data/objets';
import Layout from '../../layout/layout';
import PageAdminIni from '../../content/components/pageIniAdmin';
import nookies from 'nookies';
import { requireAuthentication } from '../../HOC/authHOC';
import { AdminService } from '../../services/AdminService';

const IndexAdmin = ({ dataClientesA }) => {
    return (
        <Layout>
            <Menu items={menuItemsAd} />
            <Banner title="Perfil" position="0" url={rutaAdmin?.url} />
            <PageAdminIni data={dataClientesA?.code === 404 ? [] : dataClientesA?.datosCompletos}/>
        </Layout>
    );
};

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const decodeData = cookies?.userJKMF ? JSON.parse(cookies.userJKMF) : '';
 
    const [dataClientesA] = await Promise.all([AdminService.getDataUserFormularioAById(decodeData?.data?.idUser, decodeData.token)]);
    return {
        props: {dataClientesA}
    };
}

export default requireAuthentication(IndexAdmin);
