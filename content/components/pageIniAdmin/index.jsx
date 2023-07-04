import CardAdminF from '../../elements/cardAdminForms';

const PageAdminIni = ({data}) => {
    return (
        <div className="surface-0 container-in">
            <div className="text-900 font-bold text-6xl mb-4 text-center">Tus Formularios</div>
            <div className="text-700 text-xl mb-6 text-center line-height-3">Si deseas agregar más formularios, ve al menú y solicita los.</div>

            <div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
                <div className="grid">
                    {data?.map((item) => (
                        <CardAdminF key={item._doc._id} id={item._doc._id} name={item._doc.nombre} description={item._doc.descripcion} nameForm={item._doc?.nameForm} count={item.formularioCount} url="admins-perfil/vista-pdf" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageAdminIni;
