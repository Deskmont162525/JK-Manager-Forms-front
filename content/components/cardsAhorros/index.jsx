const CardsAhorros = ({ dataUser }) => {
    // Calcular el total del campo "saldo_credito"
    const totalSaldoCredito = dataUser?.reduce((total, dato) => total + dato.saldo_credito, 0);

    // Restar el total del campo "saldo_credito" al campo "saldo_ahorros"
    const total = dataUser[0]?.saldo_ahorros - totalSaldoCredito;
    return (
        <>
            <div id="main-content">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="stat-widget-one">
                                <div className="stat-icon dib">
                                    <i className="ti-money color-success border-success"></i>
                                </div>
                                <div className="stat-content dib">
                                    <div className="stat-text">Total Ahorrado hasta la fecha</div>
                                    <div className="stat-digit">{dataUser[0]?.saldo_ahorros.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="stat-widget-one">
                                <div className="stat-icon dib">
                                    <i className="ti-user color-primary border-primary"></i>
                                </div>
                                <div className="stat-content dib">
                                    <div className="stat-text">Total prestado hasta la fecha</div>
                                    <div className="stat-digit">{totalSaldoCredito.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="stat-widget-one">
                                <div className="stat-icon dib">
                                    <i className="ti-layout-grid2 color-pink border-pink"></i>
                                </div>
                                <div className="stat-content dib">
                                    <div className="stat-text">Total {total < 0 ? 'Adeudado' : 'Ahorrado'}</div>
                                    <div className="stat-digit">{total.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardsAhorros;
