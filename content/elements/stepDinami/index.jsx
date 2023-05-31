import React from 'react';
import { Steps } from 'primereact/steps';
import 'primeicons/primeicons.css';

const EditFormStep = ({ items, activeIndex }) => {
    return (
        <Steps model={items} activeIndex={activeIndex} style={{ paddingBottom: 50}} />           
    );
};

export default EditFormStep;
