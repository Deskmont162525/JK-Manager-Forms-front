import { requireAuthentication } from '../../HOC/authHOC';
import PanelDeControl from '../../content/components/conten-UP';
import Banner from '../../content/elements/baner';
import Menu from '../../content/utils/Sidebar';
import { menuItems } from '../../data/objets';
import Layout from '../../layout/layout';
import nookies from 'nookies';
import { AdminService } from '../../services/AdminService';

const IndexUsersP = ({dataUser}) => {   
    return (
        <Layout>
        <Menu items={menuItems}/>
            <Banner title="Perfil" position="0"/>
            <PanelDeControl dataUser={dataUser !== null ? dataUser : {}}/>
        </Layout>
    );
};

export async function getServerSideProps(context) {

    const cookies = nookies.get(context);
    const decodeData = cookies?.userJKMF ? JSON.parse(cookies.userJKMF) : '';
      const [dataUser] = await Promise.all([AdminService.getDataUserFormularioById(decodeData?.data?.temp_id, decodeData?.token)]);
    return { props: {dataUser} };
}
export default requireAuthentication(IndexUsersP);
