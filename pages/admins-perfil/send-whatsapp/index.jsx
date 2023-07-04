import FormularioSendW from "../../../content/components/sendWhatsap";
import Banner from "../../../content/elements/baner";
import Menu from "../../../content/utils/Sidebar";
import { menuItemsAd, rutaAdmin } from "../../../data/objets";
import Layout from "../../../layout/layout";

const PageSendWhasapp = () => {
    return ( 
        <>
        <Layout>
            <Menu items={menuItemsAd}/>
            <Banner title="Envio Masivo Whatsapp" position="1" url={rutaAdmin?.url} />
            <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
            {/* <FormularioSendW /> */}
            </div>
        </Layout>
        
        </>
     );
}
 
export default PageSendWhasapp;