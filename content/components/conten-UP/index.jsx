import React from 'react';

const PanelDeControl = ({ dataUser }) => {
    console.log("ffff", dataUser?.infoImages?.url_image_cel_dos?.secure_url    );
    return (
        <>
            <div className="content-wrap container-in">
                <div className="main">
                    <div className="container-fluid">
                        <section id="main-content">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="user-profile">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="user-profile-name">{dataUser?.usuario?.username}</div>
                                                        <div className="user-Location">
                                                            <i className="pi pi-fw pi-map-marker"></i> {dataUser?.infoP?.ciudad}
                                                        </div>
                                                        <div className="custom-tab user-profile-tab">
                                                            <ul className="nav nav-tabs" role="tablist">
                                                                <li role="presentation" className="active">
                                                                    <a href="#1" aria-controls="1" role="tab" data-toggle="tab">
                                                                        Acerca de
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <div className="tab-content">
                                                                <div role="tabpanel" className="tab-pane active" id="1">
                                                                    <div className="contact-information">
                                                                        <h4>INFORMACIÓN PERSONAL</h4>
                                                                        <div className="phone-content">
                                                                            <span className="contact-title">Telefono:</span>
                                                                            <span className="phone-number">{dataUser?.infoUc?.telefono}</span>
                                                                        </div>
                                                                        <div className="address-content">
                                                                            <span className="contact-title">Dirección:</span>
                                                                            <span className="mail-address">{dataUser?.infoUc?.direccion_residencia}</span>
                                                                        </div>
                                                                        <div className="email-content">
                                                                            <span className="contact-title">Email:</span>
                                                                            <span className="contact-email">{dataUser?.usuario?.correo}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="basic-information">
                                                                        <h4>INFORMACIÓN DE UBICACIÓN Y CONTACTO</h4>
                                                                        <div className="birthday-content">
                                                                            <span className="contact-title">Id usuario:</span>
                                                                            <span className="birth-date">{dataUser?.infoUc?.id_usuario}</span>
                                                                        </div>
                                                                        <div className="birthday-content">
                                                                            <span className="contact-title">Cantidad hijos:</span>
                                                                            <span className="birth-date">{dataUser?.infoUc?.cantidad_hijos}</span>
                                                                        </div>
                                                                        <div className="birthday-content">
                                                                            <span className="contact-title">Estrato:</span>
                                                                            <span className="birth-date">{dataUser?.infoUc?.estrato?.code}</span>
                                                                        </div>
                                                                        <div className="birthday-content">
                                                                            <span className="contact-title">Tipo vivienda:</span>
                                                                            <span className="birth-date">{dataUser?.infoUc?.tipo_vivienda}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="basic-information">
                                                                        <h4>INFORMACIÓN LABORAL FINANCIERA</h4>
                                                                        <div className="birthday-content">
                                                                            <span className="contact-title">Empresa usuaria:</span>
                                                                            <span className="birth-date">{dataUser?.infoIlf?.empresa_usuario}</span>
                                                                        </div>
                                                                        <div className="birthday-content">
                                                                            <span className="contact-title">Empresa Contratante:</span>
                                                                            <span className="birth-date">{dataUser?.infoIlf?.empresa_contratante}</span>
                                                                        </div>
                                                                        <div className="birthday-content">
                                                                            <span className="contact-title">Cargo:</span>
                                                                            <span className="birth-date">{dataUser?.infoIlf?.cargo}</span>
                                                                        </div>
                                                                        <div className="birthday-content">
                                                                            <span className="contact-title">Banco:</span>
                                                                            <span className="birth-date">{dataUser?.infoIlf?.banco}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="basic-information">
                                                                        <h4>DATOS GRUPO FAMILIAR BÁSICO</h4>
                                                                        <div className="basic-information">
                                                                            <h4>FAMILIARES AFILIADOS</h4>
                                                                            {dataUser?.infoDgfb?.familiares.map((k, i) => (
                                                                                <div className="basic-information">
                                                                                    <h4>FAMILIAR {i + 1}</h4>{' '}
                                                                                    <div className="birthday-content">
                                                                                        <span className="contact-title">Nombre:</span>
                                                                                        <span className="birth-date">{k?.nombre}</span>
                                                                                    </div>
                                                                                    <div className="birthday-content">
                                                                                        <span className="contact-title">Parentezco:</span>
                                                                                        <span className="birth-date">{k?.parente}</span>
                                                                                    </div>
                                                                                    <div className="birthday-content">
                                                                                        <span className="contact-title">Porcentaje:</span>
                                                                                        <span className="birth-date">{k?.porcent}</span>
                                                                                    </div>
                                                                                    <div className="birthday-content">
                                                                                        <span className="contact-title">Tipo de pago:</span>
                                                                                        <span className="birth-date">{dataUser?.infoDgfb?.periodo_nomina.name}</span>
                                                                                    </div>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                    <div className="basic-information">
                                                                        <h4>DOCUMENTOS</h4>
                                                                        <div className="email-content">
                                                                            <span className="contact-title-image">Imagen cara frontal de tu documento de identidad:</span>
                                                                            <span className="contact-email"><a href={dataUser?.infoImages?.url_image_cel_uno?.secure_url} >descarga aqui</a></span>
                                                                        </div>
                                                                        <div className="email-content">
                                                                            <span className="contact-title-image">Imagen cara posterior de tu documento de identidad:</span>
                                                                            <span className="contact-email"><a href={dataUser?.infoImages?.url_image_cel_dos?.secure_url} >descarga aqui</a></span>
                                                                        </div>
                                                                        <div className="email-content">
                                                                            <span className="contact-title-image">Imagen firma:</span>
                                                                            <span className="contact-email"><a href={dataUser?.infoImages?.url_image_firma?.secure_url} >descarga aqui </a></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="card">
                                                            <div className="card-title">
                                                                <h4>Beneficios Proximamente... </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col-lg-12">
                                    <div className="footer">
                                    <AppFooter />
                                    </div>
                                </div>
                            </div> */}
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PanelDeControl;
