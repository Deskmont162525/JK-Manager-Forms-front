
import { requireAuthentication } from "../../../HOC/authHOC";
import Banner from "../../../content/elements/baner";
import FormSolicitarSoporte from "../../../content/elements/solicitarSoporteT";
import Menu from "../../../content/utils/Sidebar";
import { menuItemsAd, rutaAdmin } from "../../../data/objets";
import Layout from "../../../layout/layout";
import nookies from 'nookies';

const SolicitarFormPage = ({decodeData}) => {
    return ( 
        <Layout>
            <Menu items={menuItemsAd}/>
            <Banner title="Solicitar Soporte" position="1" url={rutaAdmin?.url} />
            <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
            <FormSolicitarSoporte data={decodeData?.data} />
            </div>
        </Layout>
     );
};
 
export async function getServerSideProps(context) {
    const cookies = nookies.get(context);
    const decodeData = cookies?.userJKMF ? JSON.parse(cookies.userJKMF) : '';
          
      return {
          props: {decodeData}
      };
  };
export default requireAuthentication(SolicitarFormPage);