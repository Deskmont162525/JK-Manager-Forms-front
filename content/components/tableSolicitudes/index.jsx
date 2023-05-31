const TableSolicitudes = ({data}) => {
    return (
        <>
            <div className="unix-invoice">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div id="invoice" className="effect2">
                                    {data &&(<>
                                        <div id="project">
                                        <h2>Historial Anual de Solicitudes</h2>
                                        <p>En esta tabla puedesver un historial por año.</p>
                                    </div>

                                    <div id="invoice-bot">
                                        <div id="invoice-table">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <tr className="tabletitle">
                                                        <td className="table-item">
                                                            <h2>Item Description</h2>
                                                        </td>
                                                        <td className="Hours">
                                                            <h2>Hours</h2>
                                                        </td>
                                                        <td className="Rate">
                                                            <h2>Rate</h2>
                                                        </td>
                                                        <td className="subtotal">
                                                            <h2>Sub-total</h2>
                                                        </td>
                                                    </tr>

                                                    <tr className="service">
                                                        <td className="tableitem">
                                                            <p className="itemtext">Communication</p>
                                                        </td>
                                                        <td className="tableitem">
                                                            <p className="itemtext">5</p>
                                                        </td>
                                                        <td className="tableitem">
                                                            <p className="itemtext">$75</p>
                                                        </td>
                                                        <td className="tableitem">
                                                            <p className="itemtext">$375.00</p>
                                                        </td>
                                                    </tr>

                                                    <tr className="service">
                                                        <td className="tableitem">
                                                            <p className="itemtext">Asset Gathering</p>
                                                        </td>
                                                        <td className="tableitem">
                                                            <p className="itemtext">3</p>
                                                        </td>
                                                        <td className="tableitem">
                                                            <p className="itemtext">$75</p>
                                                        </td>
                                                        <td className="tableitem">
                                                            <p className="itemtext">$225.00</p>
                                                        </td>
                                                    </tr>

                                                    <tr className="service">
                                                        <td className="tableitem">
                                                            <p className="itemtext">Design Development</p>
                                                        </td>
                                                        <td className="tableitem">
                                                            <p className="itemtext">5</p>
                                                        </td>
                                                        <td className="tableitem">
                                                            <p className="itemtext">$75</p>
                                                        </td>
                                                        <td className="tableitem">
                                                            <p className="itemtext">$375.00</p>
                                                        </td>
                                                    </tr>

                                                    <tr className="service">
                                                        <td className="tableitem">
                                                            <p className="itemtext">Animation</p>
                                                        </td>
                                                        <td className="tableitem">
                                                            <p className="itemtext">20</p>
                                                        </td>
                                                        <td className="tableitem">
                                                            <p className="itemtext">$75</p>
                                                        </td>
                                                        <td className="tableitem">
                                                            <p className="itemtext">$1,500.00</p>
                                                        </td>
                                                    </tr>

                                                    <tr className="service">
                                                        <td className="tableitem">
                                                            <p className="itemtext">Animation Revisions</p>
                                                        </td>
                                                        <td className="tableitem">
                                                            <p className="itemtext">10</p>
                                                        </td>
                                                        <td className="tableitem">
                                                            <p className="itemtext">$75</p>
                                                        </td>
                                                        <td className="tableitem">
                                                            <p className="itemtext">$750.00</p>
                                                        </td>
                                                    </tr>

                                                    <tr className="service">
                                                        <td className="tableitem">
                                                            <p className="itemtext"></p>
                                                        </td>
                                                        <td className="tableitem">
                                                            <p className="itemtext">HST</p>
                                                        </td>
                                                        <td className="tableitem">
                                                            <p className="itemtext">13%</p>
                                                        </td>
                                                        <td className="tableitem">
                                                            <p className="itemtext">$419.25</p>
                                                        </td>
                                                    </tr>

                                                    <tr className="tabletitle">
                                                        <td></td>
                                                        <td></td>
                                                        <td className="Rate">
                                                            <h2>Total</h2>
                                                        </td>
                                                        <td className="payment">
                                                            <h2>$3,644.25</h2>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>

                                        <div id="legalcopy">
                                            <p className="legal">
                                                <strong>Thank you for your business!</strong>  Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices.
                                            </p>
                                        </div>
                                    </div>
                                    </>)}
                                    {!data &&(
                                        <div id="project">
                                        <h2>Aun no tienes Solicitudes</h2>
                                        <p>Crea una solicitud en el boton</p>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableSolicitudes;
