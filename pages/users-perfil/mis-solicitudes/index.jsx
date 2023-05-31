import CardsSolicitudes from '../../../content/components/cardsSolicit';
import TableSolicitudes from '../../../content/components/tableSolicitudes';
import Banner from '../../../content/elements/baner';
import Menu from '../../../content/utils/Sidebar';
import { menuItems, rutaUser } from '../../../data/objets';
import Layout from '../../../layout/layout';

const MisSolicitudesPage = ({data}) => {
    return (
        <Layout>
            <Menu items={menuItems} />
            <Banner title="Mis Solicitudes" position="1" url={rutaUser?.url} />
            <div className="content-wrap">
                <div className="main">
                    {data && (
                        <div className="container-fluid container-in">
                            <CardsSolicitudes />
                            <TableSolicitudes />
                        </div>
                    )}
                    {!data && (
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

export default MisSolicitudesPage;
