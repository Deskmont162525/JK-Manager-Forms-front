import React from 'react';
import nookies from 'nookies';
import Layout from '../../../layout/layout';
import Menu from '../../../content/utils/Sidebar';
import Banner from '../../../content/elements/baner';
import TableFormsDetail from '../../../content/components/tableFormsD';
import { menuItemsAd, rutaAdmin } from '../../../data/objets';
import { requireAuthentication } from '../../../HOC/authHOC';
import { AdminService } from '../../../services/AdminService';

const PageViewPdf = ({dataClientesA}) => {
    return (
        <>
            <Layout>
                <Menu items={menuItemsAd} />
                <Banner title="Vista Información" position="1" url={rutaAdmin?.url} />
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <TableFormsDetail dataClientesA={dataClientesA ? dataClientesA : []} />
                </div>
            </Layout>
        </>
    );
};

export async function getServerSideProps(context) {
    const codigo = context?.params?.id;
    const cookies = nookies.get(context);
    const decodeData = cookies?.userJKMF ? JSON.parse(cookies.userJKMF) : '';
   
      const [dataClientesA] = await Promise.all([AdminService.getDataFormularioById(codigo, decodeData.token)]);     
      return {
          props: {dataClientesA}
      };
  }
  
  export default requireAuthentication(PageViewPdf);
