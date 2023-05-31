// import React, { useRef, useState } from 'react';
// import { Button } from 'primereact/button';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import { saveAs } from 'file-saver';

// const DetalleForm = ({ datos }) => {
//     const [selectedFormat, setSelectedFormat] = useState('');
//     const dt = useRef(null);
//     const canvasRef = useRef(null);
//     const exportCSV = () => {
//         dt.current.exportCSV();
//     };

//     const downloadPDF = () => {
//         const table = dt.current.getTable();
//         const rows = table.querySelectorAll('tr');
// console.log("dddd",rows, rows?.querySelectorAll('td'));
//         const doc = new jsPDF();
//         // doc.autoTable({
//         //     head: [['Nombre', 'Edad', 'Email', 'Imagen 1']],
//         //     body: rows.map((row) => {
//         //         const cols = row.querySelectorAll('td');
//         //         return [cols[0].innerText, cols[1].innerText, cols[2].innerText, cols[3].innerHTML];
//         //     })
//         // });

//         // doc.save('mi-archivo.pdf');

//         // const doc = new jsPDF();
//         // const table = dt.current.getTable(); // Obtener la tabla a partir de la referencia
//         // console.log("table", table);
//         // doc.autoTable({ html: table, styles: { fontSize: 12 } }); // Pasar la tabla obtenida como parámetro
//         // doc.save('datos.pdf');
//     };

//     const downloadJSON = () => {
//         const json = JSON.stringify(datos, null, 2);
//         saveAs(new Blob([json], { type: 'application/json' }), 'datos.json');
//     };

//     const renderImage = (rowData) => {
//         return (
//             <>
//                 <canvas ref={canvasRef} width={100} height={100} style={{ display: 'none' }} />
//                 <img src={rowData.imagen1.url} alt="Imagen 1" width="100" height="100" className="p-shadow-2" />
//                 <img src={rowData.imagen2.url} alt="Imagen 2" width="100" height="100" className="p-shadow-2" />
//                 <img src={rowData.imagen3.url} alt="Imagen 3" width="100" height="100" className="p-shadow-2" />
//             </>
//         );
//     };

//     const renderDownloadButtons = () => {
//         return (
//             <>
//                 <Button label="PDF" icon="pi pi-file-pdf" onClick={() => setSelectedFormat('pdf')} />
//                 <Button label="Excel" icon="pi pi-file-excel" onClick={() => setSelectedFormat('excel')} />
//                 <Button label="JSON" icon="pi pi-file" onClick={() => setSelectedFormat('json')} />
//             </>
//         );
//     };

//     const renderDataTable = () => {
//         return (
//             <DataTable value={datos} id="table" ref={dt}>
//                 <Column field="nombre" header="Nombre" />
//                 <Column field="edad" header="Edad" />
//                 <Column field="email" header="Email" />
//                 <Column field="imagen1" header="Imagen 1" body={renderImage} />
//             </DataTable>
//         );
//     };

//     return (
//         <div className="p-d-flex p-flex-column p-ai-center">
//             <h1>Detalle de formulario</h1>
//             {renderDataTable()}
//             <div className="p-mt-3 p-d-flex p-jc-center">{renderDownloadButtons()}</div>
//             {selectedFormat === 'pdf' && downloadPDF()}
//             {selectedFormat === 'excel' && exportCSV()}
//             {selectedFormat === 'json' && downloadJSON()}
//         </div>
//     );
// };

// export default DetalleForm;


import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;