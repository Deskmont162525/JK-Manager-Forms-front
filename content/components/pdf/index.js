import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf/dist/esm/entry.webpack';


// Configuración de pdfjs para cargar correctamente el PDF
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({ url }) => (
  <div style={{ height: '100vh' }}>
    <Viewer fileUrl={url} />
  </div>
);

export default PdfViewer;