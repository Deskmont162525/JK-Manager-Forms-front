import React, { useState, useEffect, useRef } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { obtenerEstado, obtenerFechaSinHora } from '../../../data/functions';

const TableFormsUsersDetailAd = ({ dataClientesA }) => {
    const [products, setProducts] = useState({});
    const dt = useRef(null);
   
    useEffect(() => {
        // Obtener los datos de dataClientesA y realizar el procesamiento necesario
        const newData = dataClientesA.map((item) => {
            const { usuario, infoP, infoUc, infoIlf, infoDgfb, infoImages } = item;

            // Construir el objeto para setear en el estado de products
            const product = {
                usuario,
                infoP,
                infoUc,
                infoIlf,
                infoDgfb,
                infoImages
            };

            return product;
        });

        // Actualizar el estado de products con los nuevos datos
        setProducts(newData);
    }, [dataClientesA]);

    
    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
          import('jspdf-autotable').then(() => {
            const doc = new jsPDF.default();
      
            const exportData = [
              products[0]?.usuario,
              products[0]?.infoP,
              products[0]?.infoUc,
              products[0]?.infoIlf,
              products[0]?.infoDgfb,
              products[0]?.infoImages
            ];
      
            // Configurar las opciones de las columnas
            const columns = [
              { header: 'Campo', dataKey: 'campo' },
              { header: 'Valor', dataKey: 'valor' }
            ];
      
            // Iterar sobre cada campo en exportData y crear una tabla separada en el PDF
            exportData.forEach((item, index) => {
              const data = [];
              Object.keys(item).forEach((key) => {
                let value = item[key];
      
                if (typeof value === 'object') {
                  if (key === 'infoImages') {
                    Object.keys(value).forEach((imageKey) => {
                      const imageUrl = value[imageKey]?.secure_url;
                      data.push({ campo: imageKey, valor: imageUrl });
                    });
                  } else {
                    value = value?.name;
                    data.push({ campo: key, valor: value });
                  }
                } else {
                    if (key === 'familiares') {
                        Object.keys(value).forEach((familiarKey) => {
                          data.push({ campo: `Familiar ${familiarKey}`, valor: value[familiarKey] });
                        });
                      }
                  data.push({ campo: key, valor: value });
                }
              });
      
              doc.autoTable(columns, data, {
                startY: index === 0 ? 5 : doc.lastAutoTable.finalY + 5,
                theme: 'grid',
                styles: { cellPadding: 1, fontSize: 12 }
              });
      
              if (index !== exportData.length - 1) {
                doc.addPage();
              }
            });
            doc.save(`${products[0]?.usuario?.username}.pdf`);
          });
        });
      };
      
      
      
    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
          const data = [
            products[0]?.usuario,
            products[0]?.infoP,
            products[0]?.infoUc,
            products[0]?.infoIlf,
            products[0]?.infoDgfb,
            products[0]?.infoImages
          ];
      
          const worksheet = xlsx.utils.json_to_sheet(data);
          const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
          const excelBuffer = xlsx.write(workbook, {
            bookType: 'xlsx',
            type: 'array'
          });
      
          saveAsExcelFile(excelBuffer, 'products');
        });
      };
      
      const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then((module) => {
          if (module && module.default) {
            let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            let EXCEL_EXTENSION = '.xlsx';
            const data = new Blob([buffer], {
              type: EXCEL_TYPE
            });
      
            module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
          }
        });
      };
      

    const rightToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button type="button" icon="pi pi-file-excel ico-med" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" style={{ width: 50, height: 50 }} />
                <Button type="button" icon="pi pi-file-pdf ico-med" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" style={{ width: 50, height: 50 }} />
            </div>
        );
    };
    return (
        <div className="card">
            {/* <Tooltip target=".export-buttons>button" position="bottom" /> */}
            <Toolbar className="mb-4" right={rightToolbarTemplate}></Toolbar>
            <div className="card">
                <TabView ref={dt}>
                    <TabPanel header="PERSONAL I" rightIcon="pi pi-user ml-2">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="user-profile">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="user-profile-name">{products[0]?.usuario?.username}</div>
                                                    <div className="user-Location">
                                                        <i className="pi pi-fw pi-map-marker"></i> {products[0]?.infoP?.ciudad}
                                                    </div>
                                                    <div className="custom-tab user-profile-tab">
                                                        <div className="tab-content">
                                                            <div role="tabpanel" className="tab-pane active" id="1">
                                                                <div className="contact-information">
                                                                    <h4>INFORMACIÓN PERSONAL</h4>
                                                                    <div className="email-content">
                                                                        <span className="contact-title">Fecha Ingreso:</span>
                                                                        <span className="contact-email">{obtenerFechaSinHora(products[0]?.usuario?.createdAt)}</span>
                                                                    </div>
                                                                    <div className="email-content">
                                                                        <span className="contact-title">Tipo Documento:</span>
                                                                        <span className="contact-email">{products[0]?.infoP?.tipo_documento?.name}</span>
                                                                    </div>
                                                                    <div className="email-content">
                                                                        <span className="contact-title">Número Documento:</span>
                                                                        <span className="contact-email">{products[0]?.infoP?.numero_documento}</span>
                                                                    </div>
                                                                    <div className="email-content">
                                                                        <span className="contact-title">Fecha Nacimiento:</span>
                                                                        <span className="contact-email">{obtenerFechaSinHora(products[0]?.infoP?.fecha_naci)}</span>
                                                                    </div>
                                                                    <div className="email-content">
                                                                        <span className="contact-title">Estado Civil:</span>
                                                                        <span className="contact-email">{products[0]?.infoP?.estado_civil?.name}</span>
                                                                    </div>
                                                                    <div className="email-content">
                                                                        <span className="contact-title">Profesión u Oficio:</span>
                                                                        <span className="contact-email">{products[0]?.infoP?.profecion_ocupacion}</span>
                                                                    </div>
                                                                    <div className="phone-content">
                                                                        <span className="contact-title">Telefono:</span>
                                                                        <span className="phone-number">{products[0]?.infoUc?.telefono}</span>
                                                                    </div>
                                                                    <div className="email-content">
                                                                        <span className="contact-title">Email:</span>
                                                                        <span className="contact-email">{products[0]?.usuario?.correo}</span>
                                                                    </div>
                                                                    <div className="email-content">
                                                                        <span className="contact-title">Estado:</span>
                                                                        <span className="contact-email">{obtenerEstado(products[0]?.usuario?.estado)}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="UBICACIÓN/CONTACTO II" rightIcon="pi pi-map-marker ml-2">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="user-profile">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="custom-tab user-profile-tab">
                                                        <div className="tab-content">
                                                            <div role="tabpanel" className="tab-pane active" id="1">
                                                                <div className="basic-information">
                                                                    <h4>INFORMACIÓN DE UBICACIÓN Y CONTACTO</h4>
                                                                    <div className="address-content">
                                                                        <span className="contact-title">Dirección:</span>
                                                                        <span className="mail-address">{products[0]?.infoUc?.direccion_residencia}</span>
                                                                    </div>
                                                                    <div className="birthday-content">
                                                                        <span className="contact-title">Telefono:</span>
                                                                        <span className="birth-date">{products[0]?.infoUc?.telefono}</span>
                                                                    </div>
                                                                    <div className="birthday-content">
                                                                        <span className="contact-title">Cantidad hijos:</span>
                                                                        <span className="birth-date">{products[0]?.infoUc?.cantidad_hijos}</span>
                                                                    </div>
                                                                    <div className="birthday-content">
                                                                        <span className="contact-title">Estrato:</span>
                                                                        <span className="birth-date">{products[0]?.infoUc?.estrato?.code}</span>
                                                                    </div>
                                                                    <div className="birthday-content">
                                                                        <span className="contact-title">Tipo vivienda:</span>
                                                                        <span className="birth-date">{products[0]?.infoUc?.tipo_vivienda}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="LABORAL/FINANCIERA III" rightIcon="pi pi-money-bill ml-2">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="user-profile">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="custom-tab user-profile-tab">
                                                        <div className="tab-content">
                                                            <div role="tabpanel" className="tab-pane active" id="1">
                                                                <div className="basic-information">
                                                                    <h4>INFORMACIÓN LABORAL FINANCIERA</h4>
                                                                    <div className="birthday-content">
                                                                        <span className="contact-title">Empresa usuaria:</span>
                                                                        <span className="birth-date">{products[0]?.infoIlf?.empresa_usuario}</span>
                                                                    </div>
                                                                    <div className="birthday-content">
                                                                        <span className="contact-title">Empresa Contratante:</span>
                                                                        <span className="birth-date">{products[0]?.infoIlf?.empresa_contratante}</span>
                                                                    </div>
                                                                    <div className="birthday-content">
                                                                        <span className="contact-title">Cargo:</span>
                                                                        <span className="birth-date">{products[0]?.infoIlf?.cargo}</span>
                                                                    </div>
                                                                    <div className="birthday-content">
                                                                        <span className="contact-title">Salario:</span>
                                                                        <span className="birth-date">{products[0]?.infoIlf?.salario_basico}</span>
                                                                    </div>
                                                                    <div className="birthday-content">
                                                                        <span className="contact-title">Otros Ingresos:</span>
                                                                        <span className="birth-date">{products[0]?.infoIlf?.otros_ingresos}</span>
                                                                    </div>
                                                                    <div className="birthday-content">
                                                                        <span className="contact-title">Banco:</span>
                                                                        <span className="birth-date">{products[0]?.infoIlf?.banco}</span>
                                                                    </div>
                                                                    <div className="birthday-content">
                                                                        <span className="contact-title">Tipo Cuenta:</span>
                                                                        <span className="birth-date">{products[0]?.infoIlf?.tipo_cuenta}</span>
                                                                    </div>
                                                                    <div className="birthday-content">
                                                                        <span className="contact-title">Número Cuenta:</span>
                                                                        <span className="birth-date">{products[0]?.infoIlf?.num_cuenta}</span>
                                                                    </div>
                                                                    {products?.infoIlf?.trans_moneda_e && (
                                                                        <>
                                                                            <div className="birthday-content">
                                                                                <span className="contact-title">Usa Moneda Extranjera:</span>
                                                                                <span className="birth-date">{products[0]?.infoIlf?.trans_moneda_e ? 'Si' : ''}</span>
                                                                            </div>
                                                                            <div className="birthday-content">
                                                                                <span className="contact-title">Detalle Moneda Extranjera:</span>
                                                                                <span className="birth-date">{products[0]?.infoIlf?.detalle_trans_moneda_e}</span>
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="GRUPO FAMILIAR IV" rightIcon="pi pi-users ml-2">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="user-profile">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="custom-tab user-profile-tab">
                                                        <div className="tab-content">
                                                            <div role="tabpanel" className="tab-pane active" id="1">
                                                                <div className="basic-information">
                                                                    <h4>DATOS GRUPO FAMILIAR BÁSICO</h4>
                                                                    <div className="basic-information">
                                                                        <h4>FAMILIARES AFILIADOS</h4>
                                                                        {products[0]?.infoDgfb?.familiares.map((k, i) => (
                                                                            <div className="basic-information" key={i}>
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
                                                                                    <span className="birth-date">{products[0]?.infoDgfb?.periodo_nomina.name}</span>
                                                                                </div>
                                                                                <div className="birthday-content">
                                                                                    <span className="contact-title">Valor Ahorro:</span>
                                                                                    <span className="birth-date">{products[0]?.infoDgfb?.valor_ahorro}</span>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="DOCUMENTOS V" rightIcon="pi pi-file ml-2">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="user-profile">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="custom-tab user-profile-tab">
                                                        <div className="tab-content">
                                                            <div role="tabpanel" className="tab-pane active" id="1">
                                                                <div className="basic-information">
                                                                    <h4>DOCUMENTOS</h4>
                                                                    <div className="email-content">
                                                                        <span className="contact-title-image">Imagen cara frontal de tu documento de identidad:</span>
                                                                        <span className="contact-email">
                                                                            <a href={products[0]?.infoImages?.url_image_cel_uno?.secure_url}>
                                                                                <img src={products[0]?.infoImages?.url_image_cel_uno?.secure_url} alt="image" height={250} />
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                    <div className="email-content">
                                                                        <span className="contact-title-image">Imagen cara posterior de tu documento de identidad:</span>
                                                                        <span className="contact-email">
                                                                            <a href={products[0]?.infoImages?.url_image_cel_dos?.secure_url}>
                                                                                <img src={products[0]?.infoImages?.url_image_cel_dos?.secure_url} alt="image1" height={250} />
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                    <div className="email-content">
                                                                        <span className="contact-title-image">Imagen firma:</span>
                                                                        <span className="contact-email">
                                                                            <a href={products[0]?.infoImages?.url_image_firma?.secure_url}>
                                                                                <img src={products[0]?.infoImages?.url_image_firma?.secure_url} alt="image2" height={250} />
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </TabView>
            </div>
        </div>
    );
};

export default TableFormsUsersDetailAd;
