const CardsAhorros = () => {
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
                                    <div className="stat-text">Total Profit</div>
                                    <div className="stat-digit">1,012</div>
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
                                    <div className="stat-text">New Customer</div>
                                    <div className="stat-digit">961</div>
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
                                    <div className="stat-text">Active Projects</div>
                                    <div className="stat-digit">770</div>
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
