import TableStadoCuentaUsu from "../../elements/tableAhorroU";

const TableAhorros = ({dataUser}) => {
    return (
        <>
            <div className="unix-invoice">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div id="invoice" className="effect2">
                                    <div id="project">
                                        <h2>Historial Anual de Ahorros</h2>
                                        <p>en esta tabla puedesver un historial por año.</p>
                                    </div>

                                    <div id="invoice-bot">
                                        <div id="invoice-table">
                                            <div className="table-responsive">
                                                <TableStadoCuentaUsu ProductService={dataUser?.result} />
                                            </div>
                                        </div>

                                        <div id="legalcopy">
                                            <p className="">
                                            Tu opinión es importante para nosotros. Si tienes alguna duda, queja o reclamo, te invitamos a comunicarte con nuestro equipo de administradores. Estamos aquí para escucharte y trabajar juntos en encontrar soluciones. Tu satisfacción es nuestra prioridad. ¡No dudes en contactarnos
                                                <strong> Gracias!</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableAhorros;
