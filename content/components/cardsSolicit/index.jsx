const CardsSolicitudes = () => {
    return (
        <>
            <div id="main-content">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card bg-warning">
                            <div className="stat-widget-six">
                                <div className="stat-icon">
                                    <i className="ti-stats-up"></i>
                                </div>
                                <div className="stat-content">
                                    <div className="text-left dib">
                                        <div className="stat-heading">Daily sales</div>
                                        <div className="stat-text">Total: 765</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card bg-primary">
                            <div className="stat-widget-six">
                                <div className="stat-icon">
                                    <i className="ti-bolt-alt"></i>
                                </div>
                                <div className="stat-content">
                                    <div className="text-left dib">
                                        <div className="stat-heading">Bandwidth</div>
                                        <div className="stat-text">167.32 GB/s</div>
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

export default CardsSolicitudes;
