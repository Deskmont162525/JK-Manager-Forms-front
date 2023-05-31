import CardsAhorros from '../../../content/components/cardsAhorros';
import TableAhorros from '../../../content/components/tableAhorros';
import Banner from '../../../content/elements/baner';
import Menu from '../../../content/utils/Sidebar';
import { menuItems, rutaUser } from '../../../data/objets';
import Layout from '../../../layout/layout';

const MisAhorrosPage = ({ data }) => {
    return (
        <Layout>
            <Menu items={menuItems} />
            <Banner title="Mis Ahorros" position="1" url={rutaUser?.url} />
            <div className="content-wrap">
                <div className="main">
                    {data && (
                        <div className="container-fluid container-in">
                            <CardsAhorros />
                            <TableAhorros />
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

export default MisAhorrosPage;
