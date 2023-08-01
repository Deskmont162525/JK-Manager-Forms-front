import { requireAuthentication } from '../../../HOC/authHOC';
import CardsAhorros from '../../../content/components/cardsAhorros';
import TableAhorros from '../../../content/components/tableAhorros';
import Banner from '../../../content/elements/baner';
import Menu from '../../../content/utils/Sidebar';
import { menuItems, rutaUser } from '../../../data/objets';
import Layout from '../../../layout/layout';
import nookies from 'nookies';
import { AdminService } from '../../../services/AdminService';

const MisAhorrosPage = ({ dataUser }) => {
    return (
        <Layout>
            <Menu items={menuItems} />
            <Banner title="Mis Ahorros" position="1" url={rutaUser?.url} />
            <div className="content-wrap">
                <div className="main">
                    {dataUser?.result?.length !== 0 && (
                        <div className="container-fluid container-in">
                            <CardsAhorros dataUser={dataUser?.result ? dataUser?.result : []}/>
                            <TableAhorros dataUser={dataUser} />
                        </div>
                    )}
                    {dataUser?.result?.length === 0 && (
                        <div id="project">
                            <h2>Estamos trabajando para que puedas ver reflejada tu información</h2>
                            <p>Próximamente...</p>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export async function getServerSideProps(context) {

    const cookies = nookies.get(context);
    const decodeData = cookies?.userJKMF ? JSON.parse(cookies.userJKMF) : '';
      const [dataUser] = await Promise.all([AdminService.getDataStadoCuentaById(decodeData?.data?.numero_documento, decodeData?.token)]);
    //   console.log("dataUser", decodeData?.data?.numero_documento);
    return { props: {dataUser} };
}
export default requireAuthentication(MisAhorrosPage);
