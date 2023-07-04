import CargarInfoForms from '../../elements/formCargarI';

const ContainCargarInfo = () => {
    return (
        <div className="col-12">
            <div className="card">
                <div className="text-700 text-left">
                    <div className="text-600 font-bold text-3xl mb-3">INFORMACIÓN ADMINISTRATIVA</div>
                    <div className="text-700 text-1xl mb-2">Seleccióna la información que vas a cargar al aplicativo.</div>
                </div>
                <CargarInfoForms />
            </div>
        </div>
    );
};

export default ContainCargarInfo;
