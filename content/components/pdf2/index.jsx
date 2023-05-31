import React from 'react';
import { useRouter } from 'next/router';
import PdfViewer from '../pdf';

const Pdf = () => {
  const router = useRouter();
  const { id } = router.query;

  return <PdfViewer url={`http://ejemplo.com/pdf/${id}.pdf`} />;
};

export default Pdf;
