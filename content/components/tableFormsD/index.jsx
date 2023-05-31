import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Tag } from 'primereact/tag';
import { InputText } from 'primereact/inputtext';
import { useRouter } from 'next/router';
import { obtenerFechaSinHora } from '../../../data/functions';

const TableFormsDetail = ({ dataClientesA }) => {
    const router = useRouter();
    const [products, setProducts] = useState([]);
    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);
    const cols = [
        { field: 'userId', header: 'UserId' },
        { field: 'username', header: 'Nombres' },
        { field: 'estado', header: 'Estado' },
        { field: 'correo', header: 'Correo' },
        { field: 'te', header: 'Telefono' },
        { field: 'cantidad_hijos', header: 'Cantidad Hijos' },
        { field: 'createdAt', header: 'Fecha de Ingreso' },
        { field: 'ciudad', header: 'Ciudad' }
    ];

    const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));

    useEffect(() => {
        // Obtener los datos de dataClientesA y realizar el procesamiento necesario
        const newData = dataClientesA.map((item) => {
            const { usuario, infoUc } = item;
            const { temp_id: userId, username, estado, correo } = usuario;
            const cantidad_hijos = infoUc ? infoUc.cantidad_hijos : null;
            const ciudad_residencia = infoUc ? infoUc.ciudad_residencia : null;
            const telefono = infoUc ? infoUc.telefono : null;
            const { createdAt } = usuario;

            // Construir el objeto para setear en el estado de products
            const product = {
                userId,
                username,
                estado,
                correo,
                telefono,
                cantidad_hijos,
                createdAt,
                ciudad_residencia
            };

            return product;
        });

        // Actualizar el estado de products con los nuevos datos
        setProducts(newData);
    }, [dataClientesA]);
    
    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);
                doc.autoTable(exportColumns, products);
                doc.save('products.pdf');
            });
        });
    };

    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(products);
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
    const editProduct = (product) => {
        console.log('verifico el id', product);
        router.push(`/admins-perfil/detalle-formulario/${product.userId}`);
    };

    const dateCreBodyTemplate = (rowData) => {
        const fechaSinHora = obtenerFechaSinHora(rowData.createdAt);
        return fechaSinHora;
      };
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} />
            </React.Fragment>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.estado} severity={getSeverity(rowData)}></Tag>;
    };

    const getSeverity = (product) => {
        switch (product.estado) {
            case true:
                return 'success';

            case false:
                return 'danger';

            default:
                return null;
        }
    };

    const rightToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button type="button" icon="pi pi-file-excel ico-med" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" style={{ width: 50, height: 50 }} />
                <Button type="button" icon="pi pi-file-pdf ico-med" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" style={{ width: 50, height: 50 }} />
            </div>
        );
    };
    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Administrar Usuarios</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Buscar por :" />
            </span>
        </div>
    );

    return (
        <div className="card">
            {/* <Tooltip target=".export-buttons>button" position="bottom" /> */}
            <Toolbar className="mb-4" right={rightToolbarTemplate}></Toolbar>
            <DataTable
                ref={dt}
                value={products}
                dataKey="id"
                key="id"
                paginator
                rows={10}
                rowsPerPageOptions={[5, 10, 25]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} usuarios"
                globalFilter={globalFilter}
                header={header}
                scrollable
            >
                {/* {cols.map((col, index) => (
                    <Column key={index} field={col.field} header={col.header} />
                ))} */}
                <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }} frozen className="font-bold"></Column>
                <Column field="username" header="Nombres" style={{ minWidth: '200px' }} frozen className="font-bold"></Column>
                <Column field="userId" header="Code" sortable style={{ minWidth: '12rem' }}></Column>
                <Column field="correo" header="Correo" sortable style={{ minWidth: '16rem' }}></Column>
                <Column field="telefono" header="Telefono"></Column>
                <Column field="cantidad_hijos" header="Cantidad Hijos" sortable style={{ minWidth: '8rem' }}></Column>
                <Column field="createdAt" header="Fecha de Ingreso" body={dateCreBodyTemplate} sortable style={{ minWidth: '10rem' }}></Column>
                <Column field="ciudad_residencia" header="Ciudad Residencia" sortable style={{ minWidth: '12rem' }}></Column>
                <Column field="estado" header="Estado" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
            </DataTable>
        </div>
    );
};

export default TableFormsDetail;
