import Banner from '../../../content/elements/baner';
import Menu from '../../../content/utils/Sidebar';
import { menuItemsAd, rutaAdmin } from '../../../data/objets';
import Layout from '../../../layout/layout';
import nookies from 'nookies';
import { AdminService } from '../../../services/AdminService';
import { requireAuthentication } from '../../../HOC/authHOC';
import TableFormsUsersDetailAd from '../../../content/components/tableFormsUad';


const PageFormIFV2 = ({dataClientesA}) => {
    return (
        <Layout>
            <Menu items={menuItemsAd}/>
            <Banner title="Detalle Data Afiliado" position="1" url={rutaAdmin?.url} />
            <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                <TableFormsUsersDetailAd dataClientesA={dataClientesA?.code !== 404 ? [dataClientesA] : []} />
            </div>
        </Layout>
    );
};

export async function getServerSideProps(context) {
    const codigo = context?.params?.id;
    const cookies = nookies.get(context);
    const decodeData = cookies?.userJKMF ? JSON.parse(cookies.userJKMF) : '';
      const [dataClientesA] = await Promise.all([AdminService.getDataUserFormularioById(codigo, decodeData.token)]);
      return {
          props: {dataClientesA}
      };
  }
  
  export default requireAuthentication(PageFormIFV2);
// export default PageFormIFV2;
