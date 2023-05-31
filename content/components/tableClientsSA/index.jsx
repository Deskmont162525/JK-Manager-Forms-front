import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Toolbar } from 'primereact/toolbar';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { InputText } from 'primereact/inputtext';
import { useRouter } from 'next/router';
import { routes } from '../../../data/routes';
import { obtenerFechaSinHora } from '../../../data/functions';

const TableClientsForms = ({dataClientesSA}) => {
    console.log("que le llega a table ",dataClientesSA);
    const router = useRouter();
    const [products, setProducts] = useState(dataClientesSA);
    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);
    const editProduct = (product) => {
        router.push(`/${routes?.routeSuperAdmin}/super-data-detalle/${product._id}`);
      };
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                    icon="pi pi-pencil"
                    rounded
                    outlined
                    className="mr-2"
                    onClick={() => editProduct(rowData)}
                />
            </React.Fragment>
        );
    }; 
    const dateCreBodyTemplate = (rowData) => {
        const fechaSinHora = obtenerFechaSinHora(rowData.createdAt);
        return fechaSinHora;
      };

      const dateActBodyTemplate = (rowData) => {
        const fechaSinHora = obtenerFechaSinHora(rowData.updatedAt);
        return fechaSinHora;
      };
    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Manage Clientes</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    return (
        <div className="card">
            <DataTable
                ref={dt}
                value={products}
                dataKey="id"
                paginator
                rows={10}
                rowsPerPageOptions={[5, 10, 25]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                globalFilter={globalFilter}
                header={header}
                scrollable
            >
                <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }} frozen className="font-bold"></Column>
                <Column field="username" header="Nombre Usuario" style={{ minWidth: '200px' }} frozen className="font-bold"></Column>
                <Column field="_id" header="Code" sortable style={{ minWidth: '12rem' }}></Column>
                <Column field="correo" header="Correo" sortable style={{ minWidth: '16rem' }}></Column>
                <Column field="estado" header="Estado" sortable style={{ minWidth: '12rem' }}></Column>
                <Column field="tipo_pago" header="Tipo de Pago" sortable style={{ minWidth: '8rem' }}></Column>
                <Column field="tipo_usuario" header="Tipo de Usuario" sortable style={{ minWidth: '8rem' }}></Column>
                <Column field="permisos" header="Permisos" sortable style={{ minWidth: '10rem' }}></Column>
                <Column field="createdAt" header="Fecha de Ingreso" body={dateCreBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                <Column field="updatedAt" header="Fecha Actualización" body={dateActBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
            </DataTable>
        </div>
    );
};

export default TableClientsForms;
