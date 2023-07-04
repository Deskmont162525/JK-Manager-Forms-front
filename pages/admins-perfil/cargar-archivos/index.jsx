
import ContainCargarInfo from "../../../content/components/formsSolicitarF";
import Banner from "../../../content/elements/baner";
import Menu from "../../../content/utils/Sidebar";
import { menuItemsAd, rutaAdmin } from "../../../data/objets";
import Layout from "../../../layout/layout";

const CargaInfoPage = () => {
    return ( 
        <Layout>
            <Menu items={menuItemsAd}/>
            <Banner title="Solicitar Soporte" position="1" url={rutaAdmin?.url} />
            <div className="surface-section px-4 py-8 md:px-6 lg:px-12" style={{display: 'flex', alignItems: 'center'}}>
           
            <ContainCargarInfo />
            </div>
        </Layout>
     );
}
 
export default CargaInfoPage;