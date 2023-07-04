import React, { useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { obtenerFechaSinHora } from '../../../data/functions';

export default function TableStadoCuentaUsu({ ProductService }) {
    const dt = useRef(null);

    const cols = [
        { field: 'linea_concepto', header: 'LINEA/CONCEPTO' },
        { field: 'saldo_ahorros', header: 'SALDO AHORROS' },
        { field: 'saldo_credito', header: 'SALDO CREDITO' },
        { field: 'cuotas', header: 'CUOTAS' },
        { field: 'cuota_siguiente', header: 'CUOTA SIGUIENTE' },
        { field: 'fecha_1_cuota', header: 'FECHA 1 CUOTA' }
    ];

    const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));

    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);

                doc.autoTable(exportColumns, ProductService);
                doc.save(`${ProductService[0]?.asociado?.trim()}-${ProductService[0]?.fecha_pago}.pdf`);
            });
        });
    };

    const header = (
        <div className="flex align-items-center justify-content-end gap-2 export-buttons">
            <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" />
        </div>
    );
    const dateCreBodyTemplate = (rowData) => {
        const fechaSinHora = obtenerFechaSinHora(rowData.fecha_1_cuota);
        return fechaSinHora;
    };

    const totalAhorroBodyTemplate = (rowData) => {
        const dataReturn = rowData.saldo_ahorros?.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
        return dataReturn;
    };

    const totalPrestaBodyTemplate = (rowData) => {
        const dataReturn = rowData.saldo_credito?.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
        return dataReturn;
    };

    return (
        <div className="card">
            <Tooltip target=".export-buttons>button" position="bottom" />

            <DataTable ref={dt} value={ProductService} header={header} tableStyle={{ minWidth: '50rem' }}>
                <Column field="linea_concepto" header="LINEA/CONCEPTO" frozen className="font-bold" style={{ minWidth: '1rem' }}></Column>
                <Column field="saldo_ahorros" header="SALDO AHORROS" body={totalAhorroBodyTemplate} sortable style={{ minWidth: '6rem' }}></Column>
                <Column field="saldo_credito" header="SALDO CREDITO" body={totalPrestaBodyTemplate} sortable style={{ minWidth: '2rem' }}></Column>
                <Column field="cuotas" header="CUOTAS" sortable style={{ minWidth: '6rem' }}></Column>
                <Column field="cuota_siguiente" header="CUOTA SIGUIENTE" sortable style={{ minWidth: '6rem' }}></Column>
                <Column field="fecha_1_cuota" header="FECHA 1 CUOTA" body={dateCreBodyTemplate} sortable style={{ minWidth: '6rem' }}></Column>
            </DataTable>
        </div>
    );
}
